import React from "react";
import styled from "styled-components";
import lighthouse from "../assets/lighthouse.jpg";
import lighthouse2 from "../assets/lighthouse2.jpg";
import lighthouse3 from "../assets/lighthouse3.jpg";
import lighthouse4 from "../assets/lighthouse4.jpg";
import { BiWorld } from "react-icons/bi";
import { BsCash, BsGeo, BsHeadphones, BsLaptop, BsLaptopFill, BsPerson } from "react-icons/bs";

export default function Offer() {
  const data = [
    {
      text: "Tailored Travel Guides",
      subtext: "Dive into our extensive collection of travel guides crafted by seasoned adventurers. Whether you're seeking cultural immersion, outdoor thrills, or culinary delights, our guides are designed to cater to every type of traveler",
      icon: <BsPerson />,
      color: "red",
    },
    {
      text: "Exclusive Experiences",
      subtext: "Unlock access to exclusive tours, workshops, and events that showcase the authentic essence of each location. From cooking classes with local chefs to off-the-grid hiking trails, Nomad Nest brings you closer to the heart of your destination.",
      icon: <BiWorld />,
      color: "green",
    },
    {
      text: "Community and Connection",
      subtext: "Join our vibrant community of like-minded travelers and digital nomads. Share stories, tips, and experiences, and make lasting connections with fellow adventurers from around the globe.",
      icon: <BsGeo />,
      color: "yellow",
    },
    {
      text: "Global Network of Workspaces",
      subtext: "From bustling urban hubs to serene beachside retreats, our curated network of coworking spaces and serviced offices spans across major cities and remote destinations. Find your perfect workspace wherever your journey takes you",
      icon: <BsLaptopFill/>,
      color: "yellow",
    },
    {
      text: "Flexible Membership Plans",
      subtext: "Our membership plans are designed to suit the needs of every remote professional. Whether you need a daily drop-in pass or a long-term office solution, Nomad Nest offers flexible options that fit your lifestyle.",
      icon: <BsCash />,
      color: "yellow",
    },
  ];

  return (
    <Section id="offer">
      <div className="image-grid">
        <div className="image">
          <img src={lighthouse} alt="lighthouse" />
        </div>
        <div className="image">
          <img src={lighthouse2} alt="lighthouse" />
        </div>
        <div className="image">
          <img src={lighthouse3} alt="lighthouse" />
        </div>
        <div className="image">
          <img src={lighthouse4} alt="lighthouse" />
        </div>
      </div>
      <div className="content">
        <div className="title">
          <h1>Discover the <span>Nomad Nest</span> Advantage</h1>
        </div>
        <ul className="list">
          {data.map(({ text, subtext, icon, color }) => (
            <li key={text}>
              <div className={`icon ${color}`}>{icon}</div>
              <div className="text">
                <h3>{text}</h3>
                <h2>{subtext}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 8rem 0;
  display: flex;
  gap: 5rem;

  .image-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    .image {
      img {
        width: 100%;
        height: 200%;
        object-fit: cover; /* Ensure images cover the fixed dimensions */
      }
      width: 200px; /* Set fixed width */
      height: 200px; /* Set fixed height */
    }
  }

  .content {
    .title {
      margin: 2rem 0;
      h1 {
        font-size: 3rem;
          span {
            color: var(--primary-color);
          }
      }
    }
    .list {
      list-style-type: none;
      li {
        display: flex;
        align-items: center;
        gap: 4rem;
        margin: 4rem 0;
        .icon {
          padding: 0.5rem;
          border-radius: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
        }
        .red {
          background-color: #ff3010aa;
          color: white;
        }
        .green {
          background-color: #65ce5455;
          color: #65ce54;
        }
        .yellow {
          background-color: #ffc01e55;
          color: #ffc01e;
        }
        .text {
          h3 {
            font-size: 1.5rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 5rem 1rem;
    gap: 2rem;

    .image-grid {
      grid-template-columns: 1fr; /* Adjust grid for smaller screens */
    }

    .content {
      .title {
        h1 {
          font-size: 2rem;
          text-align: center;
          span {
            color: var(--primary-color);
          }
        }
      }
      .list {
        li {
          gap: 1rem;
          margin: 2rem 0;
          .text {
            h3 {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
`;
