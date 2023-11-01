import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useProductContext } from "../../contexts/ProductContext";
import axios from "axios";
import { API_2, API_3, API_4 } from "../../api/Api";

const ApproveStrayAnimal = () => {
  const [id1, setId1] = useState("");
  const [title, setTitle] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  const { reqRegisterStray, getReqRegisterStray } = useProductContext();

  const Navigate = useNavigate();

  const data = reqRegisterStray.find((elem) => elem._id === id.toString());

  useEffect(() => {
    if (data) {
      setTitle(data.stray_animal_info.title);
      setBreed(data.stray_animal_info.breed);
      setAge(data.stray_animal_info.age);
      setLocation(data.stray_animal_info.location);

      // setEditBody(post.body);
    }
  }, [data, setTitle, setId1, setBreed, setAge, setLocation, setImage]);

  const Data1 = {
    id: id1,
    title: title,
    breed: breed,
    age: age,
    location: location,
    image: image,
    added_by: {
      name: data.added_by.name,
      email: data.added_by.email,
      phone: data.added_by.phone,
    },
  };

  const handleDelete = async (id) => {
    try {
      const data = await axios.delete(`${API_3}/${id}`);
      console.log(data);
      getReqRegisterStray(API_2);

      Navigate("/ApproveStrayAnimals");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAccept = async (id) => {
    try {
      const data = await axios.post(`${API_4}`, Data1);
      console.log(data);
      handleDelete(id);
      Navigate("/ApproveStrayAnimals");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="text">Approve or Reject Stray Animal Registration</div>
      <div className="form-container">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="input-box">
            <label htmlFor="id">Enter Id: </label>
            <input
              type="text"
              id="id"
              value={id1}
              name="id"
              onChange={(e) => setId1(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="title">Title : </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="breed">Breed : </label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              id="age"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="location">Location : </label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="image">Image : </label>
            <input
              type="text"
              id="image"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="btn-container">
            <button type="submit" onClick={() => handleAccept(data._id)}>
              Accept
            </button>
            <button
              type="submit"
              className="dlt"
              onClick={() => handleDelete(data._id)}
            >
              Delete
            </button>
          </div>
        </form>
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

  .form-container {
    form {
      display: flex;
      flex-direction: column;
      max-width: 60rem;
      margin: 1rem auto;
      .input-box {
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
      .btn-container {
        display: flex;
        gap: 2rem;
        margin: 1rem;
      }
    }
  }
  button {
    padding: 1rem;
    color: #fff;
    background: #3e4959;
    font-weight: bold;
    max-width: 8rem;
    &:hover,
    &:focus {
      transform: scale(1.2);
      cursor: pointer;
      background: #189bed;
      transition: all 0.2s;
    }
  }

  button.dlt {
    &:hover,
    &:focus {
      background: red;
    }
  }
`;
export default ApproveStrayAnimal;
