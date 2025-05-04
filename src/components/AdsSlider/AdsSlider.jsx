import { useState, useEffect } from 'react';
import data from '../../helpers/slider_ads';
import { Container } from 'components/common/Container.styled';
import { WrapperSlider, SlideStyled } from './AdsSlider.styled';

export const AdsSlider = () => {
  const [ads] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const lastIndex = ads.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, ads]);

  useEffect(() => {
    let slider = setInterval(() => setCurrentIndex(prev => prev + 1), 5000);
    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);
  
  return (
    <Container>
      <WrapperSlider>
        {ads.map((ad, indexAd) => {
          let position = 'nextSlide';
          if (indexAd === currentIndex) {
            position = 'activeSlide';
          }
          if (
            indexAd === currentIndex - 1 ||
            (currentIndex === 0 && indexAd === ads.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <SlideStyled position={position} key={ad.id}>
              <img src={ad.image} alt="ad_ferma" />
            </SlideStyled>
          );
        })}
      </WrapperSlider>
    </Container>
  );
};
// тут училась делать слайдер
// https://www.youtube.com/watch?v=oEJR8XEwCSo

/* <BtnDirection
          direction="left"
          onClick={() => setCurrentIndex(prev => prev - 1)}
        >
          left
        </BtnDirection>
        <BtnDirection
          direction="right"
          onClick={() => setCurrentIndex(prev => prev + 1)}
        >
          right
        </BtnDirection> */
