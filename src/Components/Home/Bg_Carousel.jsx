"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { ImagesSlider } from "../ui/images-slider";

// Importing local images
import Image1 from "../../assets/Image_slider/building.Jpeg";
import Image2 from "..//../assets/Image_slider/Auditorium.jpeg";
import Image3 from "../../assets/Image_slider/Guest.jpeg";
import Image4 from "../../assets/Image_slider/staffs.jpeg"
import Image5 from "../../assets/Image_slider/lab.jpeg"
import Image6 from "../../assets/Image_slider/read.jpeg"
import Image7 from "../../assets/Image_slider/sports.jpeg"
import Image8 from "../../assets/Image_slider/library.jpeg"
import Hero from "./Hero";

export function ImagesSliderDemo() {
  const [images, setImages] = useState([Image1,Image2, Image3, Image4,Image5, Image6, Image7,Image8]);

  const replaceImages = () => {
   
  };

  return (
    <div>
      <ImagesSlider className="h-[50rem] sticky inset-0 bg-gradient-to-t from-blue-900 via-blue-500 to-blue-300 opacity-75" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          
          <Hero/>


        </motion.div>
      </ImagesSlider>
    </div>
  );
}
