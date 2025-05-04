import { FaRegTrashAlt } from 'react-icons/fa';
import { Container } from 'components/common/Container.styled';
import {BasketSection, BtnChangeCount } from './BasketPage.styled';
import { PageTitle } from 'components/common/CommonText.styled';
const BASKET = 'basket';

const Basket = () => {
  const basketGoods = JSON.parse(window.localStorage.getItem(BASKET));

  return (
    <BasketSection>
      <Container>
        <PageTitle>Корзина</PageTitle>
        <ul>
          {basketGoods &&
            basketGoods.map(good => {
              return (
                <li key={good.id}>
                  <img src={good.image} alt="" />
                  <p>{good.name}</p>
                  <p>{good.priceStr}</p>
                  <div style={{ display: 'flex' }}>
                    <BtnChangeCount>-</BtnChangeCount>
                    <p> {good.count}</p> <BtnChangeCount>+</BtnChangeCount>
                  </div>
                  <button>
                    <FaRegTrashAlt />
                  </button>
                </li>
              );
            })}
        </ul>
        <p>
          Разом до сплати{' '}
          {basketGoods &&
            basketGoods.reduce((prev, good) => {
              return prev + good.priceN;
            }, 0)}
        </p>
        <button>Офрмити замолення</button>
      </Container>{' '}
    </BasketSection>
  );
};
export default Basket;
