import styled from "styled-components";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import { GlobalStyle } from "./GlobalStyle";
import Form from "./components/ProductManagement/Form";
import Home from "./pages/Home";
import { UserProvider } from "./contexts/UserContext";
import { ProductProvider } from "./contexts/ProductContext";
import { OrderProvider } from "./contexts/OrderContext";

function App() {
  const [isExpanded, setExpanded] = useState("false");

  return (
    <>
      <UserProvider>
        <ProductProvider>
          <OrderProvider>
            <BrowserRouter>
              <GlobalStyle />
              <Wrapper>
                <div
                  className={
                    isExpanded ? "container expanded" : "container collapse"
                  }
                >
                  <div
                    className={
                      isExpanded ? "header expanded" : "header collapse"
                    }
                  >
                    <Sidebar
                      isExpanded={isExpanded}
                      setExpanded={setExpanded}
                    />
                  </div>
                  <div className="main">
                    <Container />
                    {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/form" element={<Container />} />
              </Routes> */}
                  </div>
                </div>
              </Wrapper>
            </BrowserRouter>
          </OrderProvider>
        </ProductProvider>
      </UserProvider>
    </>
  );
}

const Wrapper = styled.section`
  /* border-radius: 1rem; */
  overflow-x: hidden;

  .container {
    display: grid;
  }
  .expanded {
    grid-template-columns: 1fr 4fr;
  }
  .collapse {
    grid-template-columns: 1fr 15fr;
  }
  .header {
    min-height: 100vh;
  }
  .header.expanded {
    background-color: #1f1e1e;
    color: #fff;
  }

  .header.collapse {
    background-color: #1f1e1e;
    color: #fff;
  }

  .main {
    /* background: linear-gradient(#f5f7fa, #c3cfe2); */
    background: #fff;
    height: 100vh;
    /* overflow-y: scroll; */

    /* for scrollbar  customazation start */
    scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
    section::-webkit-scrollbar {
      width: 1.5rem;
    }

    section::-webkit-scrollbar-track {
      background-color: rgb(24 24 29);
    }

    section::-webkit-scrollbar-thumb {
      background: #fff;
      border: 5px solid transparent;
      border-radius: 9px;
      background-clip: content-box;
    }
    */

    /* scrollbar customzation end 
  }

  @media (max-width: 768px) {
    /* .expanded {
      grid-template-columns: 1fr 3fr;
    } */
    .collapse {
      grid-template-columns: 1fr 7fr;
    }
  }
  @media (max-width: 959px) {
    .collapse {
      grid-template-columns: 1fr 7fr;
    }
  }
`;

export default App;
