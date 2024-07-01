import os
import numpy as np
import pandas as pd
from transformers import BertTokenizer, BertModel, GPT2LMHeadModel, GPT2Tokenizer
import torch
import gradio as gr

# Initialize the BERT model and tokenizer
bert_tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
bert_model = BertModel.from_pretrained('bert-base-uncased')

def get_bert_embeddings(texts):
    inputs = bert_tokenizer(texts, return_tensors='pt', padding=True, truncation=True)
    with torch.no_grad():
        outputs = bert_model(**inputs)
    return outputs.last_hidden_state[:, 0, :].numpy()

def get_closest_question(user_query, questions, threshold=0.95):
    all_texts = questions + [user_query]
    embeddings = get_bert_embeddings(all_texts)
    cosine_similarities = np.dot(embeddings[-1], embeddings[:-1].T) / (
        np.linalg.norm(embeddings[-1]) * np.linalg.norm(embeddings[:-1], axis=1)
    )
    max_similarity = np.max(cosine_similarities)
    if max_similarity >= threshold:
        most_similar_index = np.argmax(cosine_similarities)
        return questions[most_similar_index], max_similarity
    else:
        return None, max_similarity

def generate_gpt2_response(prompt, model, tokenizer, max_length=100):
    inputs = tokenizer.encode(prompt, return_tensors='pt')
    outputs = model.generate(inputs, max_length=max_length, num_return_sequences=1)
    return tokenizer.decode(outputs[0], skip_special_tokens=True)

# Initialize data
data_dict = {
    "questions": [
        "What is Rookus?",
        "How does Rookus use AI in its designs?",
        "What products does Rookus offer?",
        "Can I see samples of Rookus' designs?",
        "How can I join the waitlist for Rookus?",
        "How does Rookus ensure the quality of its AI-generated designs?",
        "Is there a custom design option available at Rookus?",
        "How long does it take to receive a product from Rookus?"
    ],
    "answers": [
        "Rookus is a startup that leverages AI to create unique designs for various products such as clothes, posters, and different arts and crafts.",
        "Rookus uses advanced AI algorithms to generate innovative and aesthetically pleasing designs. These AI models are trained on vast datasets of art and design to produce high-quality mockups.",
        "Rookus offers a variety of products, including clothing, posters, and a range of arts and crafts items, all featuring AI-generated designs.",
        "Yes, Rookus provides samples of its designs on its website. You can view a gallery of products showcasing the AI-generated artwork.",
        "To join the waitlist for Rookus, visit our website and sign up with your email. You'll receive updates on our launch and exclusive early access opportunities.",
        "Rookus ensures the quality of its AI-generated designs through rigorous testing and refinement. Each design goes through multiple review stages to ensure it meets our high standards.",
        "Yes, Rookus offers custom design options. You can submit your preferences, and our AI will generate a design tailored to your specifications.",
        "The delivery time for products from Rookus varies based on the product type and location. Typically, it takes 2-4 weeks for production and delivery."
    ],
    "default_answer": "I'm sorry, I cannot answer this right now. Your question has been saved, and we will get back to you with a response soon."
}

# Initialize GPT-2 model and tokenizer
gpt2_tokenizer = GPT2Tokenizer.from_pretrained('gpt2')
gpt2_model = GPT2LMHeadModel.from_pretrained('gpt2')

# Ensure the Excel file is created with necessary structure
excel_file = 'data.xlsx'
if not os.path.isfile(excel_file):
    df = pd.DataFrame(columns=['question'])
    df.to_excel(excel_file, index=False)

def chatbot(user_query):
    closest_question, similarity = get_closest_question(user_query, data_dict['questions'], threshold=0.95)
    if closest_question and similarity >= 0.95:
        answer_index = data_dict['questions'].index(closest_question)
        answer = data_dict['answers'][answer_index]
    else:
        new_data = pd.DataFrame({'question': [user_query]})
        df = pd.read_excel(excel_file)
        df = pd.concat([df, new_data], ignore_index=True)
        with pd.ExcelWriter(excel_file, engine='openpyxl', mode='w') as writer:
            df.to_excel(writer, index=False)
        answer = data_dict['default_answer']
    
    return answer

iface = gr.Interface(fn=chatbot, inputs="text", outputs="text")
iface.launch()
