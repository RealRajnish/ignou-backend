import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const OrderList = ({ _id, cust, price }) => {
  const viewOrder = () => {};
  return (
    <Wrapper>
      <div className="container">
        <div className="name">Name: {cust.name}</div>
        <div className="name">Email: {cust.email}</div>
        <div className="name">Phone: {cust.phone}</div>
        <div className="name"> Purchase id : {_id}</div>
        <div className="name"> Price : {price / 100}</div>
        <NavLink to={`/viewOrder/${_id}`}>
          <button onClick={viewOrder}>View Order</button>
        </NavLink>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  font-size: 1.6rem;
  display: flex;
  gap: 1rem;
  /* border: 1px solid black; */

  .container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
    flex-grow: 1;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 0.5rem;
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

export default OrderList;
