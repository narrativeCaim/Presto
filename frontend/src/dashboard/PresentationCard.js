import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

function PresentationCard ({ presentation }) {
  if (!presentation) return null;

  const navigate = useNavigate();
  const { id, name, description, slides, thumbnail } = presentation;
  const thumbnailSrc = thumbnail || 'path/to/default/thumbnail.png';

  const handleCardClick = () => {
    navigate(`/dashboard/presentation/${id}`);
  };

  return (
    <div className={styles.presentationCard} onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <img src={thumbnailSrc} alt={name} style={{ width: '100%', height: '100%' }} />
      <h3>{name}</h3>
      <p>{description || 'No description provided.'}</p>
      <p>{slides.length} slides</p>
    </div>
  );
}

export default PresentationCard;
