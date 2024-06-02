import React, { useState } from "react";
import styled from "styled-components";
import HeroImage from "../assets/hero2.png";
import Button from "./Button";
export default function Home() {
  const [value, setValue] = useState("$500 - $10,000");
  return (
    <Section>
      <div className="background">
        <img src={HeroImage} alt="Hero" />
      </div>
      <div className="content">
        <div className="info">
        <h1 className="headline">Welcome to Nomad Nest – Travel Beyond Boundaries</h1>
        <h2 className="subheadline">
      At Nomad Nest, we believe that travel is more than just a journey; it's a gateway to new experiences, cultures, and adventures that push the boundaries of the ordinary. Our mission is to inspire and empower every traveler to explore the world with curiosity, confidence, and an open heart.
    </h2>

          {/* <Button text="Plan Your Trip" /> */}
        </div>
        <div className="search-bar">
    <input type="text" placeholder="Search..." />
    <button type="submit">Search</button>
  </div>
        {/* <div className="planner">
          <form>
            <div className="row">
              <label>Destinations</label>
              <select>
                <option>Arab Egypt</option>
                <option>Udaipur India</option>
              </select>
            </div>
            <div className="row">
              <label>Check In</label>
              <input type="date" />
            </div>
            <div className="row">
              <label>Price Range</label>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="row">
              <Button text="Discover More" />
            </div>
          </form>
        </div> */}
      </div>
    </Section>
  );
}

const Section = styled.section`
/* Import a Google Font for better typography */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
}

.content {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center; /* Center-align content */
}

.headline {
  font-size: 2.5em;
  font-weight: 700;
  color: #D2691E; /* Brown color for the headline */
  margin-bottom: 20px;
  text-align: center;
}

.subheadline {
  font-size: 1.5em;
  font-weight: 400;
  color: #8B4513; /* Orange color for the subheadline */
  line-height: 1.6;
  margin: 10px 0;
  text-align: justify;
}

.info {
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateX(-550px);

}

.search-bar {
  margin-top: 20px;
  text-align: center;
  transform: translateY(-800px);

}

.search-bar input[type="text"] {
  width: 70%;
  padding: 10px;
  border: 2px solid #D2691E; /* Brown border */
  border-radius: 4px;
  font-size: 1em;
}

.search-bar button {
  padding: 10px 20px;
  background-color: #8B4513; /* Orange background */
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1em;
  cursor: pointer;
  margin-left: 10px;
}

.search-bar button:hover {
  background-color: #D2691E; /* Darker brown on hover */
}

  margin-top: 2rem;
  position: relative;
  .background {
    img {
      height: 90vh;
      width: 100%;
    }
  }
  .content {
    .info {
      position: absolute;
      top: 5rem;
      margin-left: 8rem;
      h1 {
        font-size: 5rem;
        margin-bottom: 2rem;
      }
    }
    .planner {
      position: absolute;
      bottom: -2rem;
      right: 0;
      background-color: white;
      padding: 2rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      form {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 3rem;
        .row {
          display: flex;
          flex-direction: column;
          text-align: start;
          label {
            font-size: 0.7rem;
            color: var(--secondary-text);
          }
          input[type="date"]::-webkit-calendar-picker-indicator {
            cursor: pointer;
            filter: invert(58%) sepia(69%) saturate(2588%) hue-rotate(325deg)
              brightness(105%) contrast(101%);
          }
          input:focus {
            outline: none;
          }
          input,
          select {
            border: none;
            width: 100%;
            color: var(--primary-color);
            margin-top: 0.5rem;
            background-color: white;
            font-size: 1.1rem;
            border-bottom: 1px solid #f5ebe9;
            padding-bottom: 0.3rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      img {
        height: 50vh;
      }
    }
    .content {
      .info {
        margin-left: 2rem;
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
      }
      .planner {
        position: initial;
        margin: 2rem;
        form {
          align-items: flex-start;
          flex-direction: column;
        }
      }
    }
  }
`;
