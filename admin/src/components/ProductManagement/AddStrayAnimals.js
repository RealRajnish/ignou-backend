import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { API_4 } from "../../api/Api";

const AddStrayAnimals = () => {
  const [state, setState] = useState({
    id: "",
    title: "",
    breed: "",
    age: "",
    location: "",
    image: "",
  });

  const Navigate = useNavigate();

  const Data = {
    id: state.id,
    title: state.title,
    breed: state.breed,
    age: state.age,
    location: state.location,
    image: state.image,
    added_by: {},
  };
  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const data = await axios.post(`${API_4}`, Data);
      console.log(data);
      Navigate("/manageproducts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="text">Add Stray Animal Page</div>
      <div className="main">
        <div className="input-container">
          <div className="lable">
            <label htmlFor="id">Enter ID: </label>
          </div>
          <div className="lable-input">
            <input
              type="text"
              id="id"
              name="id"
              onChange={handleInputs}
              placeholder="Enter some unique value"
            />
          </div>
        </div>
        <div className="input-container">
          <div className="lable">
            <label htmlFor="title">Title : </label>
          </div>
          <div className="lable-input">
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleInputs}
              placeholder="Enter its title e.g Dog , cat .."
            />
          </div>
        </div>
        <div className="input-container">
          <div className="lable">
            <label htmlFor="breed">Breed : </label>
          </div>
          <div className="lable-input">
            <input
              type="text"
              id="breed"
              name="breed"
              onChange={handleInputs}
              placeholder="Enter breed"
            />
          </div>
        </div>
        <div className="input-container">
          <div className="lable">
            <label htmlFor="age">Age: </label>
          </div>
          <div className="lable-input">
            <input
              type="text"
              id="age"
              name="age"
              onChange={handleInputs}
              placeholder="Enter Age"
            />
          </div>
        </div>
        <div className="input-container">
          <div className="lable">
            <label htmlFor="location">Location : </label>
          </div>
          <div className="lable-input">
            <input
              type="text"
              id="location"
              name="location"
              onChange={handleInputs}
              placeholder="Nearest Landmark e.g, Nehru place"
            />
          </div>
        </div>
        <div className="input-container">
          <div className="lable">
            <label htmlFor="image">Image </label>
          </div>
          <div className="lable-input">
            <input
              type="text"
              id="image"
              name="image"
              onChange={handleInputs}
              placeholder="Image URL"
            />
          </div>
        </div>
        <div className="button">
          <button onClick={handleSubmit}>Submit Data</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0 auto;
  padding: 2rem 0;
  font-size: 1.6rem;
  .text {
    font-size: 2.4rem;
    color: #0ef087;
    display: grid;
    place-content: center;
  }
  .main {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    max-width: 60rem;
    margin: 0 auto;

    border-radius: 5rem;
    .input-container {
      display: flex;
      flex-wrap: wrap;
      padding: 1rem;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;

      input {
        width: 40rem;
        height: 4rem;
        padding: 0.5rem;
      }
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

export default AddStrayAnimals;
