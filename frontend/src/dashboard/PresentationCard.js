import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PresentationCard, CardTitle, Thumbnail, CardImage } from './ui';

function PresentationCardComponent ({ presentation }) {
  if (!presentation) return null;

  const navigate = useNavigate();
  const { id, name, description, slides, thumbnail } = presentation;

  const handleCardClick = () => {
    navigate(`/dashboard/presentation/${id}`);
  };

  return (
    <PresentationCard onClick={handleCardClick}>
      <CardTitle>{name}</CardTitle>
      {thumbnail
        ? (
        <Thumbnail style={{ backgroundColor: '#f9f9f9', boxShadow: '0 0px 0px' }}>
          <CardImage src={thumbnail} alt={name} />
        </Thumbnail>
          )
        : (
          <Thumbnail></Thumbnail>
          )}
      <p>{description || ''}</p>
      <p>{slides.length} slides</p>
    </PresentationCard>
  );
}

export default PresentationCardComponent;
