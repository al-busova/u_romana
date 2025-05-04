import React from 'react';
import {
  Section,
  HeroStyled,HomeTitle, HomeMainTitle,
  GroupGoodsTitle,
  GroupGoodsList,
  GroupGoodsItem} from './HomePage.styled';
import { Container } from 'components/common/Container.styled';
import { AdsSlider } from 'components/AdsSlider/AdsSlider';

const HomePage = () => {
  return (
    <main>
      <HeroStyled>
        <AdsSlider />
      </HeroStyled>
      <Section>
        <Container>
          <HomeTitle>Групи товарів на послуг</HomeTitle>
          <GroupGoodsList>
            <GroupGoodsItem>
              <div>
                <GroupGoodsTitle>М'ясо та яйця птиці</GroupGoodsTitle>
                <ul>
                  <li>М'ясо перепелів</li>
                  <li>М'ясо цесарки</li>
                  <li>Яйця харчові (дієтичні)</li>
                </ul>
              </div>
              <img
                src="https://myasnuyray.com.ua/wp-content/uploads/2022/01/perepeliniye-yayca-20-st-egg.jpg"
                alt="bird"
              />
            </GroupGoodsItem>
            <GroupGoodsItem>
              <div>
                <GroupGoodsTitle>Молодняк, перепела та цесарки</GroupGoodsTitle>
                <ul>
                  <li>Молодняк і несучки перепела</li>
                  <li>Цусарка молодняк</li>
                </ul>
              </div>
              <img
                src="https://myasnuyray.com.ua/wp-content/uploads/2022/01/perepeliniye-yayca-20-st-egg.jpg"
                alt="bird"
              />
            </GroupGoodsItem>
            <GroupGoodsItem>
              <div>
                {' '}
                <GroupGoodsTitle>Яйця інкубаційні</GroupGoodsTitle>
                <ul>
                  <li>Інкубаційні яйця перепелів</li>
                  <li>Інкубаційні яйця цесарки</li>
                </ul>
              </div>
              <img
                src="https://myasnuyray.com.ua/wp-content/uploads/2022/01/perepeliniye-yayca-20-st-egg.jpg"
                alt="bird"
              />
            </GroupGoodsItem>
            <GroupGoodsItem>
              <GroupGoodsTitle>
                Комбікорма та БВМД для перепелів
              </GroupGoodsTitle>
              <img
                src="https://myasnuyray.com.ua/wp-content/uploads/2022/01/perepeliniye-yayca-20-st-egg.jpg"
                alt="bird"
              />
            </GroupGoodsItem>
          </GroupGoodsList>{' '}
        </Container>
      </Section>
      <Section>
        <Container>
          <HomeMainTitle> Ферма У_Романа </HomeMainTitle>
          <p>
                  За “Фермою Дичина” стоїть невелика команда відданих і
            мотивованих людей, які з 2004 року роблять усе можливе, щоб ви
            отримували свіже м'ясо та яйця перепелів і цесарок протягом усього
            року.       Ми – професіонали які люблять перепелів! Пропонуємо не
            лише продукти, але й повний спектр товарів і послуг для утримання
            перепелів. У нас ви знайдете все необхідне: корма для перепілок,
            професійне обладнання, молодняк перепілок різних порід і
            кольорів. Крім того, ми пропонуємо селекційні інкубаційні яйця для
            розведення перепелів і цесарок.       Ферма Дичина завжди
            дотримується високих стандартів якості, забезпечуючи здоров'я та
            благополуччя птахів. Ми надаємо консультації та підтримку, щоб ваші
            пернаті вихованці зростали здоровими й продуктивними. Ми впевнені,
            що з нашою допомогою ваше господарство стане успішним і прибутковим.
                 Наші клієнти довіряють нам, і ми завжди готові допомогти вам
            досягти найкращих результатів. Детальніше: https://dich.kiev.ua/ua/
          </p>
        </Container>
      </Section>
      <Section style={{ backgroundColor: 'violet' }}>
        <Container>
          <p>розпродажі та акції</p>
          <p>слайдер з популярними або з рекламами?</p>
        </Container>
      </Section>
      <Section style={{ backgroundColor: 'violet' }}>
        <Container>
          Причини замовляти у нас - 4-5 іконок з маленькими описами та деінде з
          випадаючим елементом 2-3 статті про користь продуктів для здоров'я.
          Вміст мінералів та вітамінів Щось про норми споживання білка Про
          птахівництво або Рецепти проготування
        </Container>
      </Section>
    </main>
  );
};
export default HomePage;
