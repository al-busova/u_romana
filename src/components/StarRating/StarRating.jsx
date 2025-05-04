import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { StarsWrapper } from './StarRating.styled';

export const StarRating = ({ sendRate }) => {
  const stars = Array(5).fill(0);
  const [currentItem, setCurrentItem] = useState();
  const [hoverItem, setHoverItem] = useState();

  return (
    <StarsWrapper>
      {stars.map((item, i) => {
        const currentStyle = i <= currentItem ? { color: 'gold' } : {};
        const hoverStyle = i <= hoverItem ? { color: 'gold' } : {};
        return (
          <div
            key={i}
            onClick={() => {
              setCurrentItem(i);
              sendRate({ i });
            }}
            onMouseMove={() => setHoverItem(i)}
            onMouseOut={() => setHoverItem()}
            style={{ ...currentStyle, ...hoverStyle, cursor: 'pointer' }}
          >
            <FaStar /> 
          </div>
        );
      })}
      {(currentItem &&   <span>{currentItem + 1}</span>)}
    
    </StarsWrapper>
  );
};
