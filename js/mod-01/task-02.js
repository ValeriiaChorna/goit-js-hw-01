console.log('Задание 2');

const total = 100; // количество товаров на складе
const ordered = 80; // единиц товара в заказе

if (ordered > total) {
  console.log('На складе недостаточно товаров!');
} else {
  console.log('Заказ оформлен, с вами свяжется менеджер');
}
