import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import PresentationModal from './PresentationModal';
import PresentationCard from './PresentationCard';

function Home () {
  const [modalOpen, setModalOpen] = useState(false);
  const [presentations, setPresentations] = useState(() => {
    const savedPresentations = localStorage.getItem('presentations');
    return savedPresentations ? JSON.parse(savedPresentations) : [];
  });

  useEffect(() => {
    // 每次presentations变化时更新localStorage
    localStorage.setItem('presentations', JSON.stringify(presentations));
  }, [presentations]);

  const handleCreatePresentation = (name) => {
    const newPresentation = {
      id: presentations.length + 1,
      name,
      slides: [{}], // 默认包含一个空白幻灯片
    };
    setPresentations([...presentations, newPresentation]);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => setModalOpen(true)}>New presentation</button>
      <div className={styles.dashboard}>
        {presentations.map(p => (
          <PresentationCard
            key={p.id}
            presentation={p}
          />
        ))}
      </div>
      <PresentationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={handleCreatePresentation}
      />
    </div>
  );
}

export default Home;
