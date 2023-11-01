import React from "react";
import styled from "styled-components";
import { useProductContext } from "../../contexts/ProductContext";
import Product from "./Product";

const ModifyProduct = () => {
  const { products } = useProductContext();
  return (
    <Wrapper>
      <div className="main">
        <div className="text">Edit Product Page</div>
        <div className="product-container">
          {products.map((elem) => {
            const { id, category, image, breed, price } = elem;
            return (
              <Product
                id={id}
                category={category}
                image={image}
                breed={breed}
                price={price}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  font-size: 1.6rem;
  .text {
    padding: 1rem;
    font-size: 2.4rem;
    color: #0ef087;
    display: grid;
    place-content: center;
  }

  .main {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    gap: 2rem;
  }
`;
export default ModifyProduct;
