import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Input, Button } from '@mui/material';
import { ModalBox, StyledInput } from './ui';

function PresentationModal ({ isOpen, onClose, onCreate }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (name.trim()) {
      onCreate(name, description);
      setName('');
      setDescription('');
      onClose();
    } else {
      alert('please input a presentation name');
    }
  };

  if (!isOpen) return null;

  console.log(handleSubmit);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalBox>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create New Presentation
        </Typography>
          <div>
            <Input placeholder="New presentation name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <StyledInput
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={handleSubmit}>Create</Button>
      </ModalBox>
    </Modal>
  );
}

export default PresentationModal;
