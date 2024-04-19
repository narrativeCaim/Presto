import React, { useState, useEffect } from 'react';
import PresentationModal from './PresentationModal';
import PresentationCard from './PresentationCard';
import { commonConfig } from './contanst';
import { v4 } from 'uuid';
import { StyledButton, ButtonContainer, Dashboard } from './ui';

function Home () {
  const [modalOpen, setModalOpen] = useState(false);

  const [presentations, setPresentations] = useState([]);
  console.log(presentations);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:5005/store', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(response => response.json())
      .then(data => {
        if (Array.isArray(data.store)) {
          setPresentations(data.store);
        }
      });
  }, [])

  const handleCreatePresentation = async (name, description) => {
    const newPresentation = {
      id: v4(),
      name,
      description,
      ...commonConfig,
    };
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5005/store', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ store: [...presentations, newPresentation] }),
      });

      await response.json();
      if (!response.ok) {
        window.alert('Save Error')
      } else {
        setPresentations([...presentations, newPresentation]);
      }
    } catch (error) {
      console.log(error);
      window.alert('An error occurred while creating the presentation.');
    }
  };

  return (
    <div>
      <ButtonContainer>
        <StyledButton onClick={() => setModalOpen(true)}>
          New presentation
        </StyledButton>
      </ButtonContainer>
      <Dashboard>
        {presentations.map(p => (
          <PresentationCard
            key={p.id}
            presentation={p}
          />
        ))}
      </Dashboard>
      <PresentationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={(name, description) => handleCreatePresentation(name, description)}
      />
    </div>
  );
}

export default Home;
