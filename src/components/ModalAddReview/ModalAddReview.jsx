import { useState, useEffect } from 'react';
import { StarRating } from 'components/StarRating/StarRating';
import { getCurrent } from 'helpers/formatDate';
import { nanoid } from 'nanoid';
import {
  FormReview,
  ReviewBody,
  DateStyled,
  InputName,
  TextField, ReviewBtn,
} from './ModalAddReview.styled';

export const ModalAddReview = ({ onSubmit }) => {
  const [rate, setRate] = useState();
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [IsSend, setIsSend] = useState(true);
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(getCurrent());
  }, [date]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!rate) {
      alert('rate give');
      return;
    }
    console.log(name, rate, comment, date);
    onSubmit({ id: nanoid(), name, rate, comment, date });
    setName('');
    setComment('');
    setRate('');
    setIsSend(true);
  };
  const sendRate = rate => {
    setRate(rate.i + 1);
  };
  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'comment':
        setComment(e.target.value);
        break;
      default:
        return;
    }
  };
  return (
    <div>
      {!IsSend ? (
        <FormReview onSubmit={handleSubmit}>
          <ReviewBody>
            <DateStyled>{date}</DateStyled>
            <p>Ваша оцінка</p>
            <StarRating sendRate={sendRate} />
            <InputName
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
              placeholder="Ваше ім'я"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
            />
            <TextField
              name="comment"
              id="comment"
              value={comment}
              onChange={handleChange}
              placeholder="Ваш відгук"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            ></TextField>
          </ReviewBody>
          <ReviewBtn type="submit">Надіслати</ReviewBtn>
        </FormReview>
      ) : (
        <ReviewBtn
          onClick={() => {
            setIsSend(false);
          }}
        >
          Додати відгук
        </ReviewBtn>
      )}
    </div>
  );
};
//www.youtube.com/watch?v=p65at_mae9U
/* <RateWrapperStyled>
            <InputBoxStyled>
              <InputStyled type="radio" name="review" id="rate_5" value="5" />
              <LabelStyled htmlFor="rate_5"></LabelStyled>
              <InputStyled type="radio" name="review" id="rate_4" value="4" />
              <LabelStyled htmlFor="rate_4"></LabelStyled>
              <InputStyled type="radio" name="review" id="rate_3" value="3" />
              <LabelStyled htmlFor="rate_3"></LabelStyled>
              <InputStyled type="radio" name="review" id="rate_2" value="2" />
              <LabelStyled htmlFor="rate_2"></LabelStyled>
              <InputStyled type="radio" name="review" id="rate_1" value="1" />
              <LabelStyled htmlFor="rate_1"></LabelStyled>
            </InputBoxStyled>
          </RateWrapperStyled> */
/* <RateWrapperStyled>
            <RateBody>
              <RateActive></RateActive>
              <InputBoxStyled>
                <InputStyled type="radio" name="review" id="rate_5" value="5" />
                <InputStyled type="radio" name="review" id="rate_4" value="4" />
                <InputStyled type="radio" name="review" id="rate_3" value="3" />
                <InputStyled type="radio" name="review" id="rate_2" value="2" />
                <InputStyled type="radio" name="review" id="rate_1" value="1" />
              </InputBoxStyled>
            </RateBody>
            <RateNumber>3.6</RateNumber>
          </RateWrapperStyled> */
