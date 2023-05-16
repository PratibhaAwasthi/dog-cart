import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <h1> The Pet Pantry</h1>
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
              At The Pet Pantry, we understand that pets have unique dietary
              needs just like humans. That's why we offer a variety of premium
              pet food brands, as well as supplements and treats, to ensure that
              your furry friend is getting all the nutrients they need to
              thrive.
            </p>
            <NavLink>
              <Button>Shop</Button>
            </NavLink>
          </div>

          <div className="hero-section-image">
            <figure>
              <img
                src="images/HeroDesign.jpeg"
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

    .titleBackground {
      display: inline;
    }

    .intro-data {
      margin-bottom: 0;
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
