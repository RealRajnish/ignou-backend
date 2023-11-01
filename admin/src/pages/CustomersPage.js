import React from "react";
import { useUserContext } from "../contexts/UserContext";
import styled from "styled-components";

const CustomersPage = () => {
  const { clients } = useUserContext();

  return (
    <Wrapper>
      <div className="text">Customer Information Page</div>
      <div className="main">
        {clients.map((elem) => {
          const { name, email, address, phone } = elem;
          return (
            <div className="customer_info" key={email}>
              <div className="name">
                <b>Name:</b> {name}
              </div>
              <div className="email">
                <b>Email:</b> {email}
              </div>
              <div className="address">
                <b>Address:</b> {address}
              </div>
              <div className="phone">
                <b>Contact:</b> {phone}
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  font-size: 1.6rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  .text {
    font-size: 2.4rem;
    color: #0ef087;
    display: grid;
    place-content: center;
    padding: 2rem;
  }
  .main {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .customer_info {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      padding: 1rem;
    }
  }
`;
export default CustomersPage;
