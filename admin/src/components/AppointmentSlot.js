import React from "react";
import styled from "styled-components";
import { useProductContext } from "../contexts/ProductContext";

const AppointmentSlot = (width, customWidth) => {
  const { appointments } = useProductContext();
  // debugger;
  console.log(customWidth);

  return (
    <Wrapper>
      <div
        className="parent"
        inner-width={width}
        style={{ width: width.customWidth }}
      >
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
              const { title, breed, age, appointment, clinic } = animal_details;

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
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .parent {
    overflow: scroll;
  }
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

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
export default AppointmentSlot;
