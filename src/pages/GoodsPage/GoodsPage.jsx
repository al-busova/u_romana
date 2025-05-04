import { useState, useEffect } from 'react';
import {
  GoodsSection,
  WrapperTitle,
  GoodsList,
  GoodLink,
} from './GoodsPage.styled.jsx';
import { PageTitle } from 'components/common/CommonText.styled.jsx';
import { SearchBar } from '../../components/common/SearchBar/SearchBar.jsx';
import { Container } from 'components/common/Container.styled.jsx';
import { FaShoppingBasket } from 'react-icons/fa';
import data from '../../helpers/goods.js';
const GOODS = 'goods';
const BASKET = 'basket';

const GoodsPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [goods] = useState(() => {
    return JSON.parse(window.localStorage.getItem(GOODS)) ?? data;
  });
  const [basket, setBasket] = useState([]);
  const modifBasket = basket => {
    const newBasket = [];
    basket.map(good => {
      const dubl = newBasket.find(el => el.id === good.id);
      if (!dubl) {
        newBasket.push({ ...good, count: 1 });
      } else {
        newBasket.map(el => {
          return el.id === dubl.id ? (el.count = el.count + 1) : {};
        });
      }
      return newBasket;
    });
    return newBasket;
  };

  useEffect(() => {
    window.localStorage.setItem(GOODS, JSON.stringify(goods));
    window.localStorage.setItem(BASKET, JSON.stringify(modifBasket(basket)));
  }, [goods, basket]);

  const handlerSearchInput = e => {
    setInputValue(e.target.value);
  };

  const handlerSearchSubmit = e => {
    e.preventDefault();
    setSearchValue(inputValue);
  };

  const handlerSearchReset = e => {
    e.preventDefault();
    setInputValue('');
    setSearchValue('');
  };

  const addToBasket = el => {
    console.log(el);
    setBasket(prev => [...prev, el]);
    // (а на бекенде должно біть - 1 и нужна проверка, что
    //   если кол - о меньше, чем просит покупатель, то показать,
    //   что осталось только столько - то)
  };

  return (
    <main>
      <GoodsSection>
        <Container>
          <WrapperTitle>
            <PageTitle>Товари та послуги</PageTitle>
            <SearchBar
              value={inputValue}
              onChange={handlerSearchInput}
              onSubmit={handlerSearchSubmit}
              onReset={handlerSearchReset}
              searchValue={searchValue.trim()}
            />
          </WrapperTitle>
          <GoodsList>
            {goods.map(good => (
              <li key={good.id}>
                <GoodLink href="" data={good}>
                  <img src={good.image} alt="eggs" width="70px" />
                  <h3>{good.name}</h3>
                  <p>{good.priceStr}</p>
                  <p> счетчик колличества</p>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      addToBasket(good);
                    }}
                  >
                    <FaShoppingBasket /> В корзину
                  </button>{' '}
                </GoodLink>
              </li>
            ))}{' '}
          </GoodsList>{' '}
        </Container>
      </GoodsSection>
    </main>
  );
};

export default GoodsPage;
