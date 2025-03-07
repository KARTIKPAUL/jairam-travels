import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "RATNADEEP CHAKRABORTY",
    location: "Thiland",
    img: "assets/img/testimonial-2.jpg",
    text: "I had a fantastic experience with Jai Ram Travels in Meghalaya! Traveled with my family, including elderly members, and everything was well-managed. The driver, Uttam Babu, was extremely reliable, drove safely.",
  },
  {
    name: "Pratibhangshu Chakraborti",
    location: "India",
    img: "assets/img/testimonial-2.jpg",
    text: "The driver's behaviour is very amicable. Punctuality is also commendable. The journey was comfortable too. We had a trip in Shillong for five days from Guwahati airport to Shillong and back to Guwahati Airport.",
  },
  {
    name: "Satyajit Chaudhuri",
    location: "Inida",
    img: "assets/img/testimonial-3.jpg",
    text: "Travelling North East becomes more cheerful when you have Uttam da as your guide. Loved the service, Highly recommended.",
  },
  {
    name: "Aroohi Swamy",
    location: "India",
    img: "assets/img/testimonial-4.jpg",
    text: "Jai ram travels provides great service and we are very safely traveled and driver also very good we suggest you to travel we traveled Assam, Arunachal pradesh, Guwahati and Meghalya this all states",
  },
  {
    name: "nagenter tarun",
    location: "India",
    img: "assets/img/testimonial-3.jpg",
    text: "It was a nice experience and the driving is also very good.The places were also very good and experienced beautiful places. The service is also very good.Loved it",
  },
  {
    name: "Trishna Chakraborty",
    location: "India",
    img: "assets/img/testimonial-4.jpg",
    text: "Excellent place,all around greenery,very neat,no garbages around. Our driver was very friendly,cared for  our needs,helped us in all possible ways to make our trip a memorable one Thank you",
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