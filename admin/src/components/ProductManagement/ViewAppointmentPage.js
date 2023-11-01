import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useProductContext } from "../../contexts/ProductContext";
import styled from "styled-components";
import AppointmentSlot from "../AppointmentSlot";

const ViewAppointmentPage = () => {
  const { appointments } = useProductContext();

  return (
    <Wrapper>
      <div className="table-container">
        <div className="parent">
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Contact</th>
                <th>Pet</th>
                <th>Breed</th>
                <th>Age</th>
                <th>Date</th>
                <th>Booked On</th>
                <th>Clinic</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((elem) => {
                const { customer_details, animal_details, Date } = elem;
                const { name, email, phone, address } = customer_details;
                const { title, breed, age, appointment, clinic } =
                  animal_details;

                return (
                  <tr>
                    <td>{name}</td>
                    <td>
                      {phone} <br /> {email}
                    </td>
                    <td>{title}</td>
                    <td>{breed}</td>
                    <td>{age}</td>
                    <td>{appointment}</td>
                    <td>{Date}</td>
                    <td>{clinic}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1; */

  .table-container {
    /* background: green; */
    width: 100%;
  }

  .parent {
    min-width: 100%;
    /* max-height: 200px; */
    /* overflow: auto; */
    .child {
      /* overflow: auto; */
    }
  }

  /* .table {
    width: 100%;
    overflow: scroll;
  } */

  font-size: 1.5rem;
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }

  th,
  td {
    text-align: left;
    padding: 8px;
  }

  tbody {
    overflow-y: auto;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
export default ViewAppointmentPage;
