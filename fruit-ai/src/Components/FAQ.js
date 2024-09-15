import React, { useState } from 'react';
import '../styles/FAQ.css'; // Create and use a CSS file for styling

const FAQPage = () => {
  const [faqItems, setFaqItems] = useState([
    {
      id: 1,
      question: 'How is Tangerine healthy?',
      answer: 'Tangerines are a great health booster due to their high vitamin C content, which supports the immune system and skin health.',
      image: 'path-to-your-image', // Placeholder for image
      title: 'Tangerine',
    },
  ]);

  const [newFaq, setNewFaq] = useState({
    id: null,
    question: '',
    answer: '',
    title: '',
    image: '', // Image path or URL
  });

  const [editing, setEditing] = useState(false);

  // Create new FAQ
  const handleCreate = () => {
    if (newFaq.question && newFaq.answer && newFaq.title) {
      setFaqItems([...faqItems, { ...newFaq, id: faqItems.length + 1 }]);
      setNewFaq({ id: null, question: '', answer: '', title: '', image: '' });
    }
  };

  // Edit existing FAQ
  const handleEdit = (faq) => {
    setNewFaq(faq);
    setEditing(true);
  };

  // Update FAQ
  const handleUpdate = () => {
    setFaqItems(
      faqItems.map((item) => (item.id === newFaq.id ? newFaq : item))
    );
    setNewFaq({ id: null, question: '', answer: '', title: '', image: '' });
    setEditing(false);
  };

  // Delete FAQ
  const handleDelete = (id) => {
    setFaqItems(faqItems.filter((item) => item.id !== id));
  };

  return (
    <div className="faq-container">
      <h1 className="section-title">FAQ Section</h1>

      <div className="form-container">
        <h2>{editing ? 'Edit FAQ' : 'Create FAQ'}</h2>
        <input
          type="text"
          placeholder="Question"
          value={newFaq.question}
          onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
        />
        <input
          type="text"
          placeholder="Answer"
          value={newFaq.answer}
          onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
        />
        <input
          type="text"
          placeholder="Title"
          value={newFaq.title}
          onChange={(e) => setNewFaq({ ...newFaq, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newFaq.image}
          onChange={(e) => setNewFaq({ ...newFaq, image: e.target.value })}
        />

        <button onClick={editing ? handleUpdate : handleCreate}>
          {editing ? 'Update FAQ' : 'Add FAQ'}
        </button>
      </div>

      <div className="faq-list">
        {faqItems.map((item) => (
          <div className="faq-card" key={item.id}>
            <div className="image-container">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="faq-content">
              <h2 className="faq-question">
                {item.question} <span style={{ color: 'red' }}>?</span>
              </h2>
              <p className="faq-answer">{item.answer}</p>
              <h3 className="faq-title">{item.title}</h3>

              <button className="edit-btn" onClick={() => handleEdit(item)}>
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
