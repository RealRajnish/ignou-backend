import React from "react";
import styled from "styled-components";
import { useOrderContext } from "../contexts/OrderContext";
import OrderList from "../components/OrderList";

const OrdersPage = () => {
  const { orders } = useOrderContext();
  return (
    <Wrapper>
      <div className="text">Recent Orders Page</div>
      <div className="main " id="color-alter">
        {orders.map((elem) => {
          return (
            <OrderList
              _id={elem._id}
              cust={elem.customer_details}
              price={elem.order_details.total_price}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .text {
    display: grid;
    place-content: center;
    font-size: 2.4rem;
    color: #0ef087;
    padding: 1rem;
  }

  .main {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 0.5rem;
    /* :nth-child(even) {
      background-color: #f2f2f2;
    } */
  }
`;
export default OrdersPage;
