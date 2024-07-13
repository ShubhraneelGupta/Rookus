import React, { useState } from 'react';
import './ImageGen.scss';
import { Client } from "@gradio/client";

const ImageGen = () => {
  const [color, setColor] = useState("red");
  const [dressType, setDressType] = useState("t-shirt");
  const [design, setDesign] = useState("yellow stripes");
  const [loading, setLoading] = useState(false);
  const [timeTaken, setTimeTaken] = useState(null);
  const [error, setError] = useState(null);
  const [imageData, setImageData] = useState(null);

  const generateMockup = async () => {
    setLoading(true);
    setTimeTaken(null);
    setError(null);
    setImageData(null);
    const startTime = performance.now();

    try {
      console.log("Connecting to client...");
      const client = await Client.connect("gaur3009/Modelgen1");
      console.log("Client connected, sending prediction request...");
      const result = await client.predict("/infer", {
        prompt_part1: "Hello!!",
        color: color,
        dress_type: dressType,
        design: design,
        prompt_part5: "Hello!!",
        negative_prompt: "Hello!!",
        seed: 0,
        randomize_seed: true,
        width: 256,
        height: 256,
        guidance_scale: 0,
        num_inference_steps: 1,
      });
      console.log("Full API response:", result);

      if (result && result.data && result.data[0]) {
        setImageData(result.data[0]);
      } else {
        throw new Error("Invalid result format or missing image data");
      }

      const endTime = performance.now();
      setTimeTaken(((endTime - startTime) / 1000).toFixed(2));
    } catch (error) {
      console.error("Error generating mockup:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-gen-container">
      <div className="form-area">
        <h1>T-shirt Mockup Generator with Rookus AI</h1>
        <div className="form-group">
          <label>Color</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Enter color (e.g., red, blue)"
          />
        </div>
        <div className="form-group">
          <label>Dress Type</label>
          <input
            type="text"
            value={dressType}
            onChange={(e) => setDressType(e.target.value)}
            placeholder="Enter dress type (e.g., t-shirt, sweatshirt)"
          />
        </div>
        <div className="form-group">
          <label>Design</label>
          <input
            type="text"
            value={design}
            onChange={(e) => setDesign(e.target.value)}
            placeholder="Enter design (e.g., yellow stripes)"
          />
        </div>
        <button onClick={generateMockup}>Generate Mockup</button>
      </div>
      <div className="output-area">
        {loading && (
          <div className="loader-container">
            <div className="loader"></div>
            <p>Generating mockup...</p>
          </div>
        )}
        {error && (
          <div className="error-message">
            <h2>Error</h2>
            <p>{error}</p>
          </div>
        )}
        {!loading && !error && imageData && (
          <div className="mockup-result">
            <h2>Mockup Result</h2>
            <img 
              src={URL.createObjectURL(new Blob([imageData], { type: 'image/png' }))}
              alt="T-shirt Mockup" 
              onError={(e) => {
                console.error("Error loading image:", e);
                e.target.style.display = 'none';
              }} 
            />
          </div>
        )}
        {!loading && !imageData && !error && (
          <div className="mockup-result">
            <h2>Mockup Result</h2>
            <div className="placeholder-box">Your generated image will appear here.</div>
          </div>
        )}
        {timeTaken && (
          <div className="time-taken">
            <p>Time taken: {timeTaken} seconds</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGen;
