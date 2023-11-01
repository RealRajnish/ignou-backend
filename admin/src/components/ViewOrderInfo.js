import React from "react";
import { useParams } from "react-router-dom";
import { useOrderContext } from "../contexts/OrderContext";
import styled from "styled-components";

const ViewOrderInfo = () => {
  const { id } = useParams();
  const { orders } = useOrderContext();

  const data = orders.find((elem) => elem._id === id.toString());
  const { customer_details, order_details, Data } = data;
  return (
    <Wrapper>
      <div className="main">
        <div className="customer">
          <div className="heading">Customer Details:</div>
          <div className="customer_info"></div>
          <div className="name">Customer Name: {customer_details.name}</div>
          <div className="email">Email: {customer_details.email}</div>
          <div className="contact">Contact: {customer_details.phone}</div>
          <div className="address">Address: {customer_details.address}</div>
        </div>
        <div className="order">
          {order_details.cart.map((elem) => {
            return (
              <div className="product_info" key={elem.id}>
                <div className="image">
                  <img src={elem.image} alt="" />
                </div>
                <div className="product_id">Product ID: {elem.id}</div>
                <div className="breed">Breed: {elem.breed}</div>
                <div className="amount">Count : {elem.amount}</div>
                <div className="price">Price: {elem.price / 100}</div>
              </div>
            );
          })}
        </div>
        <div className="price_section">
          <div className="shipping_fee">
            Shipping Fee: {order_details.shipping_fee / 100}
          </div>
          <div className="total_price">
            Total Price : {order_details.total_price / 100}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  font-size: 1.6rem;
  margin-top: 2rem;
  img {
    width: 7rem;
  }

  .main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;
    .customer,
    .order,
    .price_section {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      padding: 2rem;
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }

    .price_section {
      margin-top: 1rem;
    }

    .product_info {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      flex-grow: 1;
      align-items: center;
      /* justify-content: center; */
    }

    .customer {
      flex-direction: column;
    }
    .heading {
      flex-grow: 1;
      font-size: 2.4rem;
      color: #0ef087;
    }
  }
`;
export default ViewOrderInfo;
