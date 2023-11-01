import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ManageProducts = () => {
  return (
    <Wrapper>
      <div className="main">
        <div className="navlinks">
          <div className="text">
            <NavLink to="/AddProducts">Add Product</NavLink>
          </div>
        </div>
        <div className="navlinks">
          <div className="text">
            <NavLink to="/DeleteProducts">Delete Product</NavLink>
          </div>
        </div>
        <div className="navlinks">
          <div className="text">
            <NavLink to="/ModifyProducts">View/Modify Products</NavLink>
          </div>
        </div>
        <div className="navlinks">
          <div className="text">
            <NavLink to="/AddStrayAnimals">Add Stray Animals</NavLink>
          </div>
        </div>
        <div className="navlinks">
          <div className="text">
            <NavLink to="/ApproveStrayAnimals">Approve Stray Animals</NavLink>
          </div>
        </div>
        <div className="navlinks">
          <div className="text">
            <NavLink to="/ViewAppointments">View Appointments</NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;

  .main {
    display: flex;
    flex-grow: 1;
    flex-direction: column;

    .text {
      padding: 1rem;
    }

    .navlinks {
      border: 2px solid black;
      padding: 1rem;
      font-size: 2.4rem;
      width: 100%;
      flex-grow: 1;
    }
  }
  a:link {
    text-decoration: none;
    color: rebeccapurple;
  }

  a:hover {
    font-size: 3.2rem;
    transform: scale(1.5);
    color: #00ff00;
  }
`;

export default ManageProducts;
