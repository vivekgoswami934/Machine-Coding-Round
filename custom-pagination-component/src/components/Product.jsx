import React from "react";
import styled from "styled-components";

const Product = ({ thumbnail, title, price }) => {
  return (
    <Wrapper>
      <Img src={thumbnail} alt="img" />
      <h3>{title.slice(0,20)}</h3>
      <h4>Price - {price}</h4>
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
`;

const Img = styled.img`
  height: 150px;
  width: 180px;
  object-fit: cover;
`;

// {
//     "id": 1,
//     "title": "iPhone 9",
//     "description": "An apple mobile which is nothing like apple",
//     "price": 549,
//     "discountPercentage": 12.96,
//     "rating": 4.69,
//     "stock": 94,
//     "brand": "Apple",
//     "category": "smartphones",
//     "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//     "images": [
//         "https://cdn.dummyjson.com/product-images/1/1.jpg",
//         "https://cdn.dummyjson.com/product-images/1/2.jpg",
//         "https://cdn.dummyjson.com/product-images/1/3.jpg",
//         "https://cdn.dummyjson.com/product-images/1/4.jpg",
//         "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
//     ]
// }
