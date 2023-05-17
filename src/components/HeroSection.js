import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1>
              <span className="logoText">ReNew</span>Electronics
            </h1>
            <span>
              {/* <span>
                <img
                  src="images/heartlogo.png"
                  alt="image not supported"
                  className="titleBackground"
                />
              </span> */}
            </span>
            <p>
              At ReNewElectronics, we believe in the power of sustainability and
              the importance of extending the lifespan of electronics. Our
              mission is to reduce electronic waste by providing a platform
              where individuals can buy and sell pre-owned electronics with
              confidence.
            </p>
            <NavLink to="/products">
              <Button>Shop</Button>
            </NavLink>
          </div>

          <div className="hero-section-image">
            <figure>
              <img
                src="https://w0.peakpx.com/wallpaper/194/292/HD-wallpaper-samsung-galaxy-a50-modern-smartphone-modern-technology-smartphone-on-a-white-background-samsung.jpg"
                alt="Image not supported"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .logoText {
      color: ${({ theme }) => theme.colors.helper};
    }

    .titleBackground {
      display: inline;
    }

    .intro-data {
      margin-bottom: 0;
      color: ${({ theme }) => theme.colors.helper2};
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: ${({ theme }) => theme.colors.helper};
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: ${({ theme }) => theme.colors.helper};
    }
  }
`;

export default HeroSection;
