import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PresentationCard, CardTitle, Thumbnail, CardImage } from './ui';

function PresentationCardComponent ({ presentation }) {
  if (!presentation) return null;

  const navigate = useNavigate();
  const { id, name, description, slides, thumbnail } = presentation;
  const thumbnailSrc = thumbnail || 'path/to/default/thumbnail.png';

  const handleCardClick = () => {
    navigate(`/dashboard/presentation/${id}`);
  };

  return (
    <PresentationCard onClick={handleCardClick}>
      <CardTitle>{name}</CardTitle>
      <Thumbnail>
        <CardImage src={thumbnailSrc} alt={name} />
      </Thumbnail>
      <p>{description || ''}</p>
      <p>{slides.length} slides</p>
    </PresentationCard>
  );
}

export default PresentationCardComponent;
