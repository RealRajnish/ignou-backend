import React from "react";
import styled from "styled-components";
import { useProductContext } from "../../contexts/ProductContext";
import { NavLink } from "react-router-dom";

const ApproveStrayAnimals = () => {
  const { reqRegisterStray } = useProductContext();
  return (
    <Wrapper>
      <div className="text">Approve Stray Animal Registration Page</div>
      <div className="main">
        {reqRegisterStray.map((elem) => {
          const { added_by, stray_animal_info, _id } = elem;
          return (
            <div className="row" key={_id}>
              <div className="name">{added_by.name}</div>
              <div className="animal">{stray_animal_info.title}</div>
              <NavLink to={`/ApproveStrayAnimal/${_id}`}>
                <button>Accept / Reject</button>
              </NavLink>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  font-size: 1.6rem;
  .text {
    display: grid;
    place-content: center;
    font-size: 2.4rem;
    color: #0ef087;
    padding: 1rem;
  }

  .main {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
  }
  .row {
    display: flex;
    gap: 2rem;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 1rem 0;
    flex-wrap: wrap;
    &:nth-child(even) {
      background-color: #f2f2f2;
    }
    .name {
      min-width: 3rem;
    }
    .animal {
      min-width: 5rem;
    }
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
export default ApproveStrayAnimals;
