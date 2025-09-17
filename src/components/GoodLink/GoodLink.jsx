import {
  GLink,
  GoodImgThumb,
  GoodTitle,
  GoodPrice,
  GoodAvailability,
  GoodAvailabilityN,
  BtnCard,
} from './GoodLink.styled.jsx';
import { FaShoppingBasket } from 'react-icons/fa';

export const GoodLink = ({ addToBasket, good, basket }) => {
  const inBasket = basket.some(item => item._id === good._id);

  return (
    <GLink>
      <GoodImgThumb>
        <img src={good.imageURL} alt="eggs" width="70px" />
      </GoodImgThumb>
      <GoodTitle>{good.title}</GoodTitle>
      <GoodPrice>{good.price} грн</GoodPrice>
      {good.availability ? (
        <>
          <GoodAvailability>Є в наявності</GoodAvailability>
          <BtnCard
            $inBasket={inBasket}
            onClick={e => {
              e.preventDefault();
              addToBasket(good);
            }}
          >
            {inBasket ? <span>У кошику</span> : <span>Купити</span>}
            <FaShoppingBasket />
          </BtnCard>
        </>
      ) : (
        <>
          <GoodAvailabilityN>Немає в наявності</GoodAvailabilityN>
          <BtnCard
            disabled
            onClick={e => {
              e.preventDefault();
              addToBasket(good);
            }}
          >
            Купити
            <FaShoppingBasket />
          </BtnCard>
        </>
      )}
    </GLink>
  );
};
