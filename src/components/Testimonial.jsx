import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
import avatar from "../assets/avatar.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const testimonials = [
    {
      image: testimonial1,
      avatar: avatar,
      name: "Alice Johnson",
      position: "Marketing Specialist",
      description:
        "Nomads Nest is the best travel agency I have ever used. They helped me find the perfect coworking space in Bali. The local support and seamless booking process made my work trip stress-free and productive. Highly recommend!",
    },
    {
      image: testimonial2,
      avatar: avatar,
      name: "Michael Brown",
      position: "Freelance Writer",
      description:
        "I had an amazing experience with Nomads Nest. They found a beautiful workspace for me in Karachi with stunning views and great amenities. Their team was very helpful and responsive throughout the entire process.",
    },
    {
      image: testimonial1,
      avatar: avatar,
      name: "Emily Davis",
      position: "Graphic Designer",
      description:
        "Nomads Nest provided excellent service during my stay in Tokyo. The coworking space they recommended was fantastic and well-equipped. It was a pleasure working with their friendly and professional team.",
    },
    {
      image: testimonial2,
      avatar: avatar,
      name: "David Lee",
      position: "Software Developer",
      description:
        "I've used several coworking space finders before, but Nomads Nest stands out. They not only found a great spot for me in Amsterdam but also ensured that all my requirements were met. Their attention to detail is commendable.",
    },
    {
      image: testimonial1,
      avatar: avatar,
      name: "Sophia Martinez",
      position: "Entrepreneur",
      description:
        "Nomads Nest helped me find the perfect coworking space in Lahore. The location was convenient, and the amenities were top-notch. Their service is a game-changer for digital nomads like me.",
    },
    {
      image: testimonial2,
      avatar: avatar,
      name: "James Wilson",
      position: "Digital Marketing Consultant",
      description:
        "I highly recommend Nested Nomads for their exceptional service. They assisted me in finding a fantastic coworking space in Lisbon. The environment was perfect for productivity, and their support was outstanding.",
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Section id="testimonial">
      <div className="title">
        <h1>What our Users Are Saying About Us</h1>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <div className="testimonial-content">
              <div className="testimonial-image">
                <img src={testimonial.image} alt="testimonial" />
              </div>
              <div className="testimonial-text">
                <div className="title">
                  <div className="image">
                    <img src={testimonial.avatar} alt="avatar" />
                  </div>
                  <div className="info">
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.position}</span>
                  </div>
                </div>
                <p className="description">{testimonial.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Section>
  );
}

const Section = styled.section`
  .title {
    display: flex;
    justify-content: center;
    h1 {
      text-align: center;
      font-size: 2rem;
      width: 30%;
    }
  }
  .slick-slider {
    .slick-dots {
      bottom: -30px;
    }
  }
  .testimonial {
    display: flex !important;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    .testimonial-content {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .testimonial-image img {
      width: 300px;
      height: 300px;
      object-fit: cover;
    }

    .testimonial-text {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .title {
        display: flex;
        gap: 1rem;
        align-items: center;

        .image img {
          height: 3rem;
        }

        .info {
          h3 {
            margin: 0;
          }

          span {
            color: var(--primary-color);
          }
        }
      }

      .description {
        font-size: 1.1rem;
        line-height: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .title h1 {
      font-size: 1.5rem;
      width: 80%;
    }

    .testimonial-content {
      flex-direction: column;
      align-items: center;

      .testimonial-image img {
        width: 100%;
        height: auto;
      }
    }
  }
`;
