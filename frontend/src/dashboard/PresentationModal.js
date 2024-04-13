import React, { useState } from 'react';

function PresentationModal ({ isOpen, onClose, onCreate }) {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name.trim()) {
      onCreate(name);
      setName('');
      onClose();
    } else {
      alert('please input a presentation name！');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>create new presentation</h2>
        <input
          type="text"
          placeholder="New presentation"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit}>Create</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PresentationModal;
