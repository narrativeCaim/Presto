import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import { Input, Button } from '@mui/material';

export const ModalContent = styled.div``

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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

  console.log(handleSubmit);

  return <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          create new presentation
        </Typography>
          <ModalContent id="modal-modal-description">
            <div style={{ margin: '8px 0' }}>
              <Input placeholder="New presentation" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <Button onClick={onClose}>Close</Button>
            <Button onClick={handleSubmit}>Create</Button>
          </ModalContent>
      </Box>
  </Modal>
}

export default PresentationModal;
