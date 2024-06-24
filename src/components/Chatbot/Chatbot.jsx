// Chatbot.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.scss';
import chatimage from '../../assets/comment.png';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setChat([...chat, userMessage]);

    // Reset input field
    setInput('');

    try {
      const response = await axios.post('https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B', 
        { inputs: input }, 
        {
          headers: {
            'Authorization': 'Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
          }
        }
      );

      const botMessage = { sender: 'bot', text: response.data[0].generated_text };
      setChat(prevChat => [...prevChat, botMessage]);
    } catch (error) {
      console.error('Error fetching response from HuggingFace API', error);
      const errorMessage = { sender: 'bot', text: 'Sorry, there was an error fetching the response.' };
      setChat(prevChat => [...prevChat, errorMessage]);
    }
  };

  return (
    <div className={`chat-icon ${isOpen ? 'open' : ''}`}>
      <div className="chat-icon-button" onClick={() => setIsOpen(!isOpen)}>
        <img src={chatimage} alt="Chat Icon" />
      </div>
      {isOpen && (
        <div className="chatbot">
          <div className="chatbot-messages">
            {chat.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Ask a question..." 
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
