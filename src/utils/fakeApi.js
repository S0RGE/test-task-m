export const getProducts = () => {
  return createProducts();
};

export const getCategories = () => {
  return [
    'Авиация',
    'Автомобили и мотоциклы',
    'Аэрографы и компрессоры',
    'Военная техника',
    'Доработка моделей',
    'Железная дорога',
    'Инструмент',
    'Краска',
    'Литература',
    'Миниатюра и диорама',
    'Модели для детей',
    'Модельная химия',
    'Печатная продукция',
    'Флот',
    'Футляры и подставки',
  ];
};

export const getCompanies = () => {
  return [
    'AVD',
    'Advanced Modeling',
    'Start Scale Models (SSM)',
    'Edmon Studia',
    'Modelcollect',
    'ModelGun',
    'Восточный Экспресс',
  ];
};

function createProducts() {
  const products = [];
  const quantity = 123;
  for (let i = 0; i < quantity; i++) {
    products.push({
      id: CreateUUID(),
      name: 'Сборная модель Экскаватор UDS-114 Tatra',
      price: Math.floor(Math.random() * 10000),
      image: `@/assets/images/product_image_${Math.floor(
        Math.random() * 3 + 1
      )}.png`,
      liked: !!Math.round(Math.random()),
      raiting: Math.floor(Math.random() * 5),
      inStock: !!Math.round(Math.random()),
      messages: Math.floor(Math.random() * 100),
      category:
        getCategories()[Math.floor(Math.random() * getCategories().length)],
      company:
        getCompanies()[Math.floor(Math.random() * getCompanies().length)],
    });
  }

  return products;
}

function CreateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
