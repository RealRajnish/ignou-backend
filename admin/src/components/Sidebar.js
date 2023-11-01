import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { SiGoogletagmanager } from "react-icons/si";
import { MdLogout } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";
import { HiCurrencyRupee, HiDocumentReport } from "react-icons/hi";
import { MdOutlinePets } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import axios from "axios";
import { API_1, API_8 } from "../api/Api";
import { useUserContext } from "../contexts/UserContext";
import { useProductContext } from "../contexts/ProductContext";

const Sidebar = ({ isExpanded, setExpanded }) => {
  const [pass, setPass] = useState();
  const { setLoggedInStatus, userLoggedIn, setLogOut } = useUserContext();
  const { getAppointments } = useProductContext();

  const handleLogin = async () => {
    try {
      const res = await axios.post(API_8, { user: "ADMIN", password: pass });
      console.log(res);
      if (res.data.code == 3) {
        setLoggedInStatus();
        setPass("");
        getAppointments(API_1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="container1">
        <div
          className={
            isExpanded
              ? "expanded sidebar-nav-btn box-1"
              : "sidebar-nav-btn box-1"
          }
        >
          <GiHamburgerMenu
            className="menu-btn"
            onClick={() => {
              setExpanded(!isExpanded);
            }}
          />
        </div>
        <div className={isExpanded ? "box-2 d-block" : "box-2 d-none"}>
          <FaUserAlt />
          <p>ADMIN</p>
          <div className="toggle">
            {/* <LoginToggle /> */}

            <div
              className={userLoggedIn ? "toggle-1 d-none" : "toggle-1 d-flex"}
            >
              <input
                type="password"
                placeholder="Enter Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
            <div
              className={!userLoggedIn ? "toggle-2 d-none" : "toggle-2 d-flex"}
            >
              <MdLogout onClick={setLogOut} />
            </div>
          </div>
        </div>
        <div
          className={
            isExpanded ? "expanded nav-links box-3" : "nav-links box-3"
          }
        >
          <nav>
            <ul>
              <li>
                <NavLink to="/">
                  <div className="navlinks">
                    <div className="icon">
                      <AiFillHome />
                    </div>
                    <div className="text">Home</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/OrdersPage">
                  <div className="navlinks">
                    <div className="icon">
                      <HiCurrencyRupee />
                    </div>
                    <div className="text">Orders</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/PerformancePage">
                  <div className="navlinks">
                    <div className="icon">
                      <HiDocumentReport />
                    </div>
                    <div className="text">Performance</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/AdoptionPage">
                  <div className="navlinks">
                    <div className="icon">
                      <MdOutlinePets />
                    </div>
                    <div className="text">Adoptions</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/manageproducts">
                  <div className="navlinks">
                    <div className="icon">
                      <SiGoogletagmanager />
                    </div>
                    <div className="text">Manage Products</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/customersPage">
                  <div className="navlinks">
                    <div className="icon">
                      <BsPersonLinesFill />
                    </div>
                    <div className="text">Customers</div>
                  </div>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="box-4">
          <MdLogout onClick={setLogOut} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* overflow-x: hidden; */
  /* position: relative; */
  /* .sidebar-nav-btn {
    position: absolute;
    right: 0.2rem;
    padding: 0.2rem;
    font-size: 2.5rem;

    .menu-btn {
      font-size: 3.2rem;
    }

    .admin-text {
      font-size: 3.2rem;
      display: none;
    }
  } */
  /* .top-nav {
    display: flex;
    gap: 0.5rem;
  } */

  .container1 {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 100vh;
    font-size: 2.4rem;
    flex-basis: 100%;
  }

  .box-1.sidebar-nav-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.2rem;
    padding: 1rem;
  }

  .box-1.sidebar-nav-btn.expanded {
    justify-content: flex-end;
  }

  .box-2 {
    /* height: fit-content; */
    /* flex: 0 1 auto; */
  }

  .box-3 {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    color: purple;
    font-size: 3.2rem;

    nav ul {
      list-style-type: none;
    }

    .navlinks {
      display: flex;
      gap: 0.5rem;
    }

    .text {
      display: none;
    }
  }

  .box-4 {
    display: grid;
    place-content: center;
    font-size: 3.2rem;
    padding: 1rem;
  }

  .expanded.nav-links {
    .text {
      display: inline-block;
    }
    font-size: 2.4rem;
  }

  nav {
    display: flex;
    flex-grow: 1;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      li {
        color: #fff;
      }
    }
  }

  a:link {
    text-decoration: none;
    color: var(--white);
  }
  a:visited {
    color: var(--white);
  }

  .toggle,
  .box-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .box-2.d-none {
    display: none;
  }

  .box-2.d-block {
    display: flex;
  }

  .toggle-2.d-none,
  .toggle-1.d-none {
    display: none;
  }
  .toggle-1.d-flex,
  .toggle-2.d-flex {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    input {
      min-height: 2.5rem;
      padding: 0.5rem;
    }
    button {
      padding: 1rem;
      color: #fff;
      background: #e900ff;
      font-weight: bold;
      &:hover,
      &:focus {
        transform: scale(0.9);
        cursor: pointer;
        background: #189bed;
        transition: all 0.2s;
      }
    }
  }

  .icon:hover {
    text-shadow: 2px 2px 5px #fff;
  }

  .text:hover {
    text-shadow: 5px 5px 5px #fff;
  }
`;

export default Sidebar;
