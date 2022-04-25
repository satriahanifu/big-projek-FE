import { ADD_TO_CART, FIND_PRODUCT, GET_PRODUCT } from "../constants";

export const getProducts = () => {
  return {
    type: GET_PRODUCT,
    payload: [
      {
        id: 1,
        productName: "Gucci Aviator",
        color: "black",
        tagline: "eye wear for true gantlemen",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, et aut? Hic rerum non incidunt eligendi debitis porro nisi architecto?",
        imageUrl: "https://i0.wp.com/flawlesscrowns.com/wp-content/uploads/2011/09/Gucci-Plastic-Aviator-Sunglasses-Havana-Brown-2.jpg?fit=1068%2C723&ssl=1",
        stock: 20,
        stock_real: 20,
        price: 150000,
      },
      {
        id: 2,
        productName: "Gucci Sunglasses",
        color: "silver",
        tagline: "stylish at vacation",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, et aut? Hic rerum non incidunt eligendi debitis porro nisi architecto?",
        imageUrl: "https://img-static.tradesy.com/item/23633724/gucci-gold-dark-gray-bee-aviator-sunglasses-2-0-960-960.jpg",
        stock: 30,
        stock_real: 30,
        price: 250000,
      },
      {
        id: 3,
        productName: "Gucci recutangular frame glasses",
        color: "black",
        tagline: " inspired by Italian sunglasses from the '80s",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, et aut? Hic rerum non incidunt eligendi debitis porro nisi architecto?",
        imageUrl: "https://ak1.ostkcdn.com/images/products/12817651/Gucci-3647-0D28-Womens-Rectangular-Eyeglasses-45d4bec7-ea6b-46b5-8865-6abbd279773b_600.jpg",
        stock: 25,
        stock_real: 25,
        price: 550000,
      },
      {
        id: 4,
        productName: "Fila Men's SF003P Polarized Sunglasses",
        color: "black",
        tagline: "eye wear for adventurer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, et aut? Hic rerum non incidunt eligendi debitis porro nisi architecto?",
        imageUrl: "https://i5.walmartimages.com/asr/5c86c307-9793-42c8-863f-4c7ae58858c2_1.5bdf0cf7eeb87927da6a9607fa13f6e5.jpeg",
        stock: 25,
        stock_real: 25,
        price: 550000,
      },
      {
        id: 5,
        productName: "fossil metal aviator sunglasses",
        color: "metal",
        tagline: "eye wear for true gantlemen",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, et aut? Hic rerum non incidunt eligendi debitis porro nisi architecto?",
        imageUrl: "https://www.shopmyexchange.com/products/images/xlarge/1767609_2ACD.jpg",
        stock: 25,
        stock_real: 25,
        price: 550000,
      },
      {
        id: 6,
        productName: "Fosil Fos 6080 sunglasses",
        color: "brown",
        tagline: "eye wear for true gantlemen",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, et aut? Hic rerum non incidunt eligendi debitis porro nisi architecto?",
        imageUrl: "https://www.framesdirect.com/product_elarge_images/Fossil-eyeglasses-6080-036R00.jpg",
        stock: 25,
        stock_real: 25,
        price: 550000,
      },
      {
        id: 7,
        productName: "Fila SF8493 Sunglasses",
        color: "black",
        tagline: "eye wear for true gantlemen",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, et aut? Hic rerum non incidunt eligendi debitis porro nisi architecto?",
        imageUrl: "https://images.eyeglasses.com/product/xlarge/50380060.jpg",
        stock: 25,
        stock_real: 25,
        price: 550000,
      },
      {
        id: 8,
        productName: "Adidas A690 ",
        color: "black",
        tagline: "eye wear for true gantlemen",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, et aut? Hic rerum non incidunt eligendi debitis porro nisi architecto?",
        imageUrl: "http://www.framesdirect.com/product_elarge_images/adidas-690-eyeglasses-6062.jpg",
        stock: 25,
        stock_real: 25,
        price: 550000,
      },
      {
        id: 9,
        productName: "Adidas Sunglasses sport ",
        color: "black",
        tagline: "eye wear for true gantlemen",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, et aut? Hic rerum non incidunt eligendi debitis porro nisi architecto?",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/5165Xequ-pL._AC_UL1500_.jpg",
        stock: 25,
        stock_real: 25,
        price: 550000,
      },
    ],
  };
};

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
};

export const findProduct = (id) => {
  return {
    type: FIND_PRODUCT,
    payload: id,
  };
};
