import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useProductContext } from "../../contexts/ProductContext";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { API_6, API_7 } from "../../api/Api";
import axios from "axios";

const EditProduct = () => {
  const { products, getSingleProduct, singleProduct } = useProductContext();
  const { id } = useParams();
  const Navigate = useNavigate();

  const [id1, setId1] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [price, setPrice] = useState("");
  const [color1, setColor1] = useState();
  const [color2, setColor2] = useState();
  const [color3, setColor3] = useState();
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [featured, setFeatured] = useState(false);
  const [shipping, setShipping] = useState(true);
  const [stock, setStock] = useState("");
  const [reviews, setReviews] = useState("");
  const [stars, setStars] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  const data = singleProduct[0];
  useEffect(() => {
    if (data) {
      setId1(data.id);
      setBreed(data.breed);
      setAge(data.age);
      setPrice(data.price);
      if (data.colors[0]) {
        setColor1(data.colors[0]);
      }
      if (data.colors[1]) {
        setColor2(data.colors[1]);
      }
      if (data.colors[2]) {
        setColor3(data.colors[2]);
      }
      setDescription(data.description);
      setCategory(data.category);
      setFeatured(data.featured);
      setShipping(data.shipping);
      setStock(data.stock);
      setReviews(data.reviews);
      setStars(data.stars);
      setImage1(data.image[0].url);
      setImage2(data.image[1].url);
      setImage3(data.image[2].url);
      setImage4(data.image[3].url);
    }
  }, [data, setId1]);

  useEffect(() => {
    getSingleProduct(`${API_6}/${id}`);
  }, []);

  const colors = [];
  if (color1) {
    colors.push(color1);
  }
  if (color2) {
    colors.push(color2);
  }
  if (color3) {
    colors.push(color3);
  }

  const image = [
    { id: "random1", url: image1 },
    { id: "random2", url: image2 },
    { id: "random3", url: image3 },
    { id: "random4", url: image4 },
  ];
  const finalData = {
    id: id1,
    breed,
    age,
    price,
    colors,
    description,
    category,
    featured,
    shipping,
    stock,
    reviews,
    stars,
    image,
  };

  const handleUpdate = async (id) => {
    try {
      const res = await axios.put(`${API_7}/${id}`, finalData);
      console.log(res.data);
      Navigate("/modifyProducts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="form-container">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="input-box">
            <label htmlFor="id">ID: </label>
            <input type="text" id="id" value={id1} name="id" />
          </div>
          <div className="input-box">
            <label htmlFor="breed">Breed: </label>
            <input
              type="text"
              id="breed"
              value={breed}
              name="breed"
              onChange={(e) => setBreed(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="color1">Color 1: </label>
            <input
              type="color"
              id="color1"
              name="color1"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="color2">Color 2: </label>
            <input
              type="color"
              id="color2"
              name="color2"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Color 3: </label>
            <input
              type="color"
              id="color3"
              name="color3"
              value={color3}
              onChange={(e) => setColor3(e.target.value)}
            />
          </div>

          <div className="input-box">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="featured">Featured</label>
            {/* <input
              type="checkbox"
              id="featured"
              value={featured}
              name="featured"
              checked={featured}
              onClick={(e) => setFeatured(!featured)}
            /> */}
            <div
              className={
                featured ? "true featured highlighed" : "featured true"
              }
              onClick={(e) => setFeatured(true)}
            >
              True
            </div>
            <div
              className={
                !featured ? "false featured highlighed" : "featured false"
              }
              onClick={(e) => setFeatured(false)}
            >
              False
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="">Shipping</label>
            {/* <input type="text" /> */}

            <div
              className={
                shipping ? "true featured highlighed" : "featured true"
              }
              onClick={(e) => setShipping(true)}
            >
              True
            </div>
            <div
              className={
                !shipping ? "false featured highlighed" : "featured false"
              }
              onClick={(e) => setShipping(false)}
            >
              False
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="stock">Stock</label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="reviews">Reviews</label>
            <input
              type="number"
              id="reviews"
              name="reviews"
              value={reviews}
              onChange={(e) => setReviews(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="stars">Stars</label>
            <input
              type="number"
              id="stars"
              name="stars"
              value={stars}
              max={5}
              onChange={(e) => setStars(e.target.value)}
            />
          </div>

          <div className="input-box">
            <label htmlFor="image1">Image 1</label>
            <input
              type="text"
              id="image1"
              name="image1"
              value={image1}
              onChange={(e) => setImage1(e.target.value)}
            />
            <div className="img">
              <img src={image1} alt="" />
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="image2">Image 2</label>
            <input
              type="text"
              id="image2"
              name="image2"
              value={image2}
              onChange={(e) => setImage2(e.target.value)}
            />
            <div className="img">
              <img src={image2} alt="" />
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="image3">Image 3</label>
            <input
              type="text"
              id="image3"
              name="image3"
              value={image3}
              onChange={(e) => setImage3(e.target.value)}
            />
            <div className="img">
              <img src={image3} alt="" />
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="image4">Image 4</label>
            <input
              type="text"
              id="image4"
              name="image4"
              value={image4}
              onChange={(e) => setImage4(e.target.value)}
            />
            <div className="img">
              <img src={image4} alt="" />
            </div>
          </div>
          <button type="submit" onClick={() => handleUpdate(data._id)}>
            Update
          </button>
          <NavLink to={"/modifyProducts"}>
            <button type="submit" className="btn">
              Cancel
            </button>
          </NavLink>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  font-size: 1.6rem;
  display: grid;
  place-content: center;

  .input-box {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    max-width: 50rem;
    flex-wrap: wrap;
    form {
      margin: 0 auto;
    }
  }

  .highlighed {
    background: purple;
    color: #fff;
  }
  .featured {
    padding: 1rem;
  }
  .featured:hover {
    cursor: pointer;
  }

  img {
    width: 7rem;
    height: 5rem;
    object-fit: contain;
  }

  form {
    /* margin-top: 2rem; */
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .btn {
    width: 100%;
  }

  textarea {
    min-width: 20rem;
  }

  button {
    padding: 1rem;
    color: #fff;
    background: #3e4959;
    font-weight: bold;
    &:hover,
    &:focus {
      transform: scale(1.1);
      cursor: pointer;
      background: #189bed;
      transition: all 0.2s;
    }
  }
`;

export default EditProduct;
