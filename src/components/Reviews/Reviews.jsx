import { useState, useEffect } from 'react';
import data from '../../helpers/reviews';
import { ModalAddReview } from 'components/ModalAddReview/ModalAddReview';
import { LeftSideTitle } from 'components/LeftSide/LeftSide.styled';
import {ReviewSection,
  ReviewList,
  ReviewItem,
  ReviewDate,
  ReviewName,
  ReviewRate,
  ReviewText,
  RateWrapperStyled,
  RateBody,
  RateActive,
  InputBoxStyled,
  InputStyled,
} from './Reviews.styled';
const REVIEWS = 'reviews';
//www.youtube.com/watch?v=H8QnlH6sou0

export const Reviews = () => {
  const [reviews, setReviews] = useState(() => {
    return JSON.parse(window.localStorage.getItem(REVIEWS)) ?? data;
  });
  useEffect(() => {
    window.localStorage.setItem(REVIEWS, JSON.stringify(reviews));
  }, [reviews]);
  
  const addReview = review => {
    setReviews(prev => [...prev, review]);
  };

  return (
    <ReviewSection>
      <div>
        <LeftSideTitle>Відгуки</LeftSideTitle>
        <ReviewList>
          {reviews.map(review => (
            <ReviewItem key={review.id}>
              <ReviewName>{review.name}</ReviewName>
              <RateWrapperStyled>
                <RateBody>
                  <RateActive rate={review.rate}></RateActive>
                  <InputBoxStyled>
                    <InputStyled
                      type="radio"
                      name="review"
                      id="rate_5"
                      value="5"
                    />
                    <InputStyled
                      type="radio"
                      name="review"
                      id="rate_4"
                      value="4"
                    />
                    <InputStyled
                      type="radio"
                      name="review"
                      id="rate_3"
                      value="3"
                    />
                    <InputStyled
                      type="radio"
                      name="review"
                      id="rate_2"
                      value="2"
                    />
                    <InputStyled
                      type="radio"
                      name="review"
                      id="rate_1"
                      value="1"
                    />
                  </InputBoxStyled>
                </RateBody>
                <ReviewRate>{review.rate}</ReviewRate>
              </RateWrapperStyled>
              <ReviewText>{review.comment}</ReviewText>
              <ReviewDate>{review.date}</ReviewDate>
            </ReviewItem>
          ))}
        </ReviewList>
        <ModalAddReview onSubmit={addReview} />
      </div>
    </ReviewSection>
  );
};
