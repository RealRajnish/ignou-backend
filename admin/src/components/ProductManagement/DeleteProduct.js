import React, { useState } from "react";
import styled from "styled-components";
import { useProductContext } from "../../contexts/ProductContext";
import { useEffect } from "react";
import axios from "axios";
import { API_12 } from "../../api/Api";
import { useNavigate } from "react-router-dom";

const DeleteProduct = () => {
  const [id, setId] = useState();
  const [category, setCategory] = useState();
  const [breed, setBreed] = useState();
  const [temp, setTemp] = useState([]);

  const { products, getProducts } = useProductContext();
  const Navigate = useNavigate();

  // const [product, setProduct] = useState([...products]);
  let product = [...products];
  useEffect(() => {
    if (id) {
      product = product.filter((curElem) => {
        return curElem.id.toLowerCase().includes(id);
      });
    }
    if (breed) {
      product = product.filter((curElem) => {
        return curElem.breed.toLowerCase().includes(breed);
      });
    }
    if (category) {
      product = product.filter((curElem) => {
        return curElem.category.toLowerCase().includes(category);
      });
    }
    setTemp(product);
  }, [id, category, breed]);

  // const data = products.map((elem) => {});

  const handleDelete = async (uid) => {
    try {
      console.log(uid);
      const resp = await axios.delete(`${API_12}/${uid}`, {
        withCredentials: true,
      });
      console.log(resp);
      getProducts();
      Navigate("/manageproducts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="main">
        <div className="text">Deleting Product Page</div>
        <div className="filter">
          <div className="filter-1">
            <label htmlFor="id">ID: </label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="unique id given"
            />
          </div>
          <div className="filter-2">
            <label htmlFor="breed">Breed: </label>
            <input
              type="text"
              id="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              placeholder="e.g, Libra dog, persian cat..."
            />
          </div>
          <div className="filter-3">
            <label htmlFor="category">Category: </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g, Dog , cat .."
            />
          </div>
        </div>
        <div className="box-1">
          {temp.map((elem) => {
            return (
              <div className="products" key={elem.id}>
                <div className="img">
                  <img src={elem.image} alt="img" />
                </div>
                <div className="category">{elem.category}</div>
                <div className="breed">{elem.breed}</div>
                <div className="del-btn">
                  <button onClick={(e) => handleDelete(elem.id)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin: 2rem auto;
  font-size: 1.6rem;
  img {
    width: 7rem;
  }
  display: flex;
  flex-direction: column;
  .text {
    display: grid;
    place-content: center;
    font-size: 2.4rem;
    color: #0ef087;
    padding: 1rem;
  }

  .filter {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 1rem;

    .filter-1,
    .filter-2,
    .filter-3 {
      display: flex;
      flex-wrap: wrap;
      flex-grow: 1;
      align-items: center;
      gap: 1rem;
    }

    input {
      width: 30rem;
      height: 4rem;
      padding: 0.5rem;
    }
  }

  .products {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1rem;
    align-items: center;
    margin: 1rem;

    .category {
      min-width: 7rem;
    }
    .breed {
      min-width: 15rem;
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
export default DeleteProduct;
