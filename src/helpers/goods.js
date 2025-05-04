import good_e from '../staticImages/good_e.jpeg';
import good_b from '../staticImages/good_b.jpg';

const goods = [
  {
    id: 1,
    image: `${good_e}`,
    name: 'Яйця курячі, 1 десяток',
    description:
      '       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem maiores et, aliquam odio consequuntur eligendi obcaecati accusantium autem mollitia.',
    count: 1000,
    priceN: 60,
    priceStr: '60 грн/десяток',
    sale: 0,
    likes: 3,
  },
  {
    id: 2,
    image: `${good_e}`,
    name: 'Яйця перепелині, 1 десяток',
    description:
      '       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem maiores et, aliquam odio consequuntur eligendi obcaecati accusantium autem mollitia.',
    count: 500,
    priceN: 90,
    priceStr: '90 грн/десяток',
    sale: 0,
    likes: 8,
  },
  {
    id: 3,
    image: `${good_b}`,
    name: "М'ясо молодих перепелів",
    description:
      '       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem maiores et, aliquam odio consequuntur eligendi obcaecati accusantium autem mollitia.',
    count: 100,
    priceN: 140,
    priceStr: '140 грн/кг',
    sale: 0,
    likes: 2,
  },
  {
    id: 4,
    image: `${good_b}`,
    name:"М'ясо куряче",
    description:
      '       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem maiores et, aliquam odio consequuntur eligendi obcaecati accusantium autem mollitia.',
    count: 1000,
    priceN: 120,
    priceStr: '120 грн/десяток',
    sale: 0,
    likes: 4,
  },
];

export default goods;
