import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
export default function Services() {
  const data = [
    {
      image: service1,
      title: "Explore Nomad Nest",
      description: "Our website contains state of the art features such as AIChatBot, Pakistan Trip Booking and much more",
    },
    {
      image: service2,
      title: "Find Your Co-Working Space",
      description: "Coming to Pakistan and unable to find a quite and peaceful working space? Explore our options near your residence",
    },
    {
      image: service3,
      title: "Ready For An Adventure?",
      description: "Planning a trip this summer? Well we got you covered with a fun filled itinerary. Hover on the images below!",
    },
    {
      image: service4,
      title: "Bootcamps,Events,Meet-ups?",
      description: "Wanna socialize and engage in deep conversations with liekly minded people? Signup for our newsletter to learn more about upcoming events.",
    },
  ];
  return (
    <Section id="services">
      <div className="services">
        {data.map(({ image, title, description }) => {
          return (
            <div className="service" key={title}>
              <img src={image} alt="service" />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 8rem 4rem;
  .services {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    .service {
      padding: 1.5rem 2rem;
      text-align: center;
      background-color: var(--card-grey);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      h3 {
        color: var(--primary-text);
      }
      p {
        color: var(--secondary-text);
      }
      img {
        height: 128px;
        width: 128px;
      }
      transition: var(--default-transition);
      &:hover {
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 3rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
