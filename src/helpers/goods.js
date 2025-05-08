import good_e from '../staticImages/good_e.jpeg';
import good_b from '../staticImages/good_b.jpg';

const goods = [
  {
    _id: 'fjdhfdsj3',
    imageURL: `${good_e}`,
    title: 'Яйця курячі, 1 десяток',
    description:
      '       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem maiores et, aliquam odio consequuntur eligendi obcaecati accusantium autem mollitia.',
    availability: true,
    price: 60,
    sale: 0,
    likes: 3,
  },
  {
    _id: 'fjdhfdsj1',
    imageURL: `${good_b}`,
    title: 'Яйця перепелині, 1 десяток',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem maiores et, aliquam odio consequuntur eligendi obcaecati accusantium autem mollitia.',
    availability: true,
    price: 80,
    sale: 0,
    likes: 8,
  },
  {
    _id: 'fjdhfdsj2',
    imageURL: `${good_b}`,
    title: "М'ясо молодих перепелів",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem maiores et, aliquam odio consequuntur eligendi obcaecati accusantium autem mollitia.',
    availability: false,
    price: 130,
    sale: 10,
    likes: 4,
  },
  {
    _id: 'fjdhfdsj7',
    imageURL: `${good_e}`,
    title: "fdgfsdg dgdfg",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem maiores et, aliquam odio consequuntur eligendi obcaecati accusantium autem mollitia.',
    availability: false,
    price: 170,
    sale: 70,
    likes: 4,
  },
];
;

export default goods;
