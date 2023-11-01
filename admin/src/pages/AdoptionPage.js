import React from "react";
import styled from "styled-components";
import { useProductContext } from "../contexts/ProductContext";

const AdoptionPage = () => {
  const { adoptionReq } = useProductContext();
  return (
    <Wrapper>
      <div className="text">Adoption Request Page</div>
      <div className="main">
        {adoptionReq.map((elem) => {
          const { stray_animal_info, customer_info, Date } = elem;
          return (
            <div className="adopt_req">
              <div className="title">
                <b>Title:</b> {stray_animal_info.title}
              </div>
              <div className="breed">
                <b>Breed:</b> {stray_animal_info.breed}
              </div>
              <div className="age">
                <b>Age:</b> {stray_animal_info.age}
              </div>
              <div className="serial">
                <b>Serial no: </b> {stray_animal_info.id}
              </div>
              <div className="request">
                <b>Requested By:</b> {customer_info.name}
              </div>
              <div className="email">
                <b>Email:</b> {customer_info.email}
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
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .text {
    font-size: 2.4rem;
    color: #0ef087;
    padding: 1rem;
  }
  .main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .adopt_req {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      padding: 1rem;
    }
  }
`;

export default AdoptionPage;
