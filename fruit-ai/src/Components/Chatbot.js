import React, { useState } from 'react';
import '../styles/App.css';
import FruitList from '../Components/FruitList';
import FruitDetail from '../Components/FruitDetail';

const fruitsData = [
  { id: 1, name: 'Apple', description: 'A sweet red fruit.', image: 'apple.jpg' },
  { id: 2, name: 'Banana', description: 'A long yellow fruit.', image: 'banana.jpg' },
  // Add more fruits here
];

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const fileMessage = { type: 'file', url, name: file.name };
      setMessages([...messages, fileMessage]);
      setFile(null); // Clear the file input
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '' && !file) return;

    // Add user message
    const userMessage = { text: input, type: 'user' };
    setMessages([...messages, userMessage]);

    // Process user input
    const fruit = fruitsData.find(fruit => fruit.name.toLowerCase() === input.toLowerCase());

    if (fruit) {
      // Show fruit details if found
      const botMessage = { text: `Here are the details for ${fruit.name}: ${fruit.description}`, type: 'bot' };
      setSelectedFruit(fruit);
      setMessages([...messages, userMessage, botMessage]);
    } else {
      // Default response if fruit not found
      const botMessage = { text: "Sorry, I don't know about that fruit. Try 'Apple' or 'Banana'.", type: 'bot' };
      setMessages([...messages, userMessage, botMessage]);
    }

    setInput('');
    setFile(null); // Clear the file input
  };

  const handleBackToList = () => {
    setSelectedFruit(null);
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {selectedFruit ? (
          <FruitDetail fruit={selectedFruit} onBack={handleBackToList} />
        ) : (
          <>
            {messages.map((message, index) => (
              <div key={index} className={`chatbot-message chatbot-message-${message.type}`}>
                {message.type === 'file' ? (
                  message.url.endsWith('.jpg') || message.url.endsWith('.png') ? (
                    <img src={message.url} alt={message.name} style={{ maxWidth: '100%', borderRadius: '8px' }} />
                  ) : (
                    <video controls src={message.url} style={{ maxWidth: '100%', borderRadius: '8px' }} />
                  )
                ) : (
                  message.text
                )}
              </div>
            ))}
          </>
        )}
      </div>
      <form className="chatbot-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <label htmlFor="file-upload">Add File</label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
