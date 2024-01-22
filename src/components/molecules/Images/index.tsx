import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Images = ({ data }: any) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
  };

  return (
    <Slider {...settings}>
      
        {data.map((item: any) => (
          <img src={item?.src} />
        ))}
      
    </Slider>
  );
};

export default Images;
