"use client";
import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

const MainVisual = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const images = ["/main1.webp", "/main2.webp", "/main3.webp"];
  return (
    <Box>
      <Slider {...settings}>
        {images.map((src, index) => (
          <Image key={index} src={src} alt="" mt="80px" />
        ))}
      </Slider>
    </Box>
  );
};

export default MainVisual;
