import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Product = ({ id, category, image, breed, price }) => {
  return (
    <Wrapper>
      <div className="outer-div">
        <div className="image box">
          <figure>
            <img
              className="fill box"
              src={image}
              alt=""
              width={80}
              height={80}
            />
          </figure>
        </div>
        <div className="content">
          <div className="category box">{category}</div>
          <div className="id box">{id}</div>
          <div className="breed box">{breed}</div>
          <div className="price box">{price / 100}</div>
          <div className="btn box">
            <NavLink to={`/EditProduct/${id}`}>
              <button>View / Modify</button>
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  font-size: 1.6rem;

  .outer-div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 1rem;
    padding: 0.5rem;
  }
  .box {
    min-width: 10rem;
    display: grid;
    place-content: center;
    min-height: 2rem;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-between;
  }

  button {
    padding: 1rem;
    color: #fff;
    background: #3e4959;
    font-weight: bold;
    &:hover,
    &:focus {
      transform: scale(1.2);
      cursor: pointer;
      background: #189bed;
      transition: all 0.2s;
    }
  }
`;
export default Product;
