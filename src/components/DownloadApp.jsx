import React, { useState } from "react";
import styled from "styled-components";
import googlePlay from "../assets/googlePlay.png";
import appStore from "../assets/appleStore.png";
import screens from "../assets/screens.png";
import FormModal from "./FormModal";

export default function DownloadApp() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Section>
      <div className="info">
        <h1>Book a Trip or Co-Working Space Now!</h1>
        <div className="downloads">
          <img src={googlePlay} alt="google Play" />
          <img src={appStore} alt="apple store" />
        </div>
      </div>
      <button className="open-modal-button" onClick={handleOpenModal}>
        Book a Trip or Coworking Space
      </button>
      <img src={screens} alt="screens" className="screens" />
      {isModalOpen && <FormModal handleClose={handleCloseModal} />}
    </Section>
  );
}

const Section = styled.section`
  height: 25rem;
  width: 100%;
  margin: 5rem 0;
  background: linear-gradient(to right, #a6f2f2, #ddf181);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  position: relative;
  overflow: hidden;

  .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1 {
      font-size: 3rem;
      width: 60%;
      text-align: left;
    }
    .downloads {
      display: flex;
      gap: 1rem;
      img {
        height: 3rem;
        cursor: pointer;
      }
    }
  }

  .open-modal-button {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0.75rem 1.5rem;
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #333;
    }
  }

  .screens {
    height: 22rem;
    position: absolute;
    bottom: -2rem;
    right: 1rem;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    gap: 4rem;
    padding: 2rem;
    .info {
      h1 {
        font-size: 2rem;
        width: 100%;
        text-align: center;
      }
    }
    .screens {
      position: initial;
      height: 15rem;
    }
    .open-modal-button {
      position: static;
      transform: none;
      margin-top: 1rem;
    }
  }
`;
