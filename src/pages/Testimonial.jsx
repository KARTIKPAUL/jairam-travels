import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Dharmendra Singh",
    location: "Thiland",
    img: "assets/img/testimonial-2.jpg",
    text: "We had a great and memorable trip of Assam and Meghalay through Lalita Tour and Travels. Uma Prasad helped us plan the itinerary and provided a good car with a very skillful, helpful and cooperative driver and guide, Kishor Burman",
  },
  {
    name: "Kuldeep Srivastava",
    location: "India",
    img: "assets/img/testimonial-2.jpg",
    text: "It was a very good experience travelling with Lalita tour and travels Guwahati. The overall tour management for Assam,Meghalaya and arunachal was beyond comparison. Good food nice hotel stay and covering all important  points of  sight",
  },
  {
    name: "Sayan Maiti",
    location: "Inida",
    img: "assets/img/testimonial-3.jpg",
    text: "Booked a traveller from Uma Prasad(Operator) for Meghalaya Trip at a very cheap price. The driver Shiba is also good and skilled. The vehicle is brand new. So the sound system and hand rest is not available now.",
  },
  {
    name: "ashwini jena",
    location: "India",
    img: "assets/img/testimonial-4.jpg",
    text: "Recently we have travelled to Assam and Meghalaya through Lalita Tour and travels.such a good arrangement by Uma Da and driver munna bhaiya is also nice humble person.Thank u so much Lalita and travels team.",
  },
  {
    name: "Ashim Maity",
    location: "India",
    img: "assets/img/testimonial-3.jpg",
    text: "Mr.Uma Prasad a real gentleman very well organised the tour and in terms of car services excellent. Will recommend all to choose their car rental and consider them as your travel partner.",
  },
  {
    name: "KEKA ASH",
    location: "India",
    img: "assets/img/testimonial-4.jpg",
    text: "Excellent place,all around greenery,very neat,no garbages around. Our driver Justin Govinda was very friendly,cared for  our needs,helped us in all possible ways to make our trip a memorable one Thank you",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">Our Clients Say!!!</h1>
        </div>
        <Slider {...settings} className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src={testimonial.img}
                alt={testimonial.name}
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">{testimonial.name}</h5>
              <p>{testimonial.location}</p>
              <p className="mb-0">{testimonial.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;