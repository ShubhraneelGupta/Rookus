import { useEffect, useState } from 'react';
import axios from 'axios';
import './Demo.scss';

const generateImage = async (prompt) => {
  const response = await axios.post(
    'https://api-inference.huggingface.co/models/stable-diffusion-v1-4',
    {
      inputs: prompt,
    },
    {
      headers: {
        Authorization: `Bearer YOUR_HUGGING_FACE_API_KEY`,
      },
    }
  );
  return response.data;
};

const Demo = () => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Example prompt for image generation
    const prompt = 'A futuristic cityscape with flying cars';
    generateImage(prompt).then((imageData) => {
      const img = URL.createObjectURL(new Blob([imageData], { type: 'image/png' }));
      setImageSrc(img);
    });

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="demoContainer" data-demo_id="18113" data-widget_type="WIDGET_1"></div>
      {imageSrc && <img src={imageSrc} alt="Generated by Stable Diffusion" />}
    </div>
  );
};

export default Demo;
