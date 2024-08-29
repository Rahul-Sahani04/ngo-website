import { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
const CustomCarousal = ({title, images }) => {
    const splideRef = useRef();

    const thumbsOptions = {
      type        : '',
      // rewind      : true,
      gap         : '1rem',
      pagination  : false,
      perPage     : 3,
      width: "85%",
      fixedWidth  : 250,
      fixedHeight : 200,
      // cover       : true,

    };

    const prev = () => {
        let index = splideRef.current.splide.index;
        splideRef.current.splide.go(index - 1);
      }
      
    const next = () => {
        let index = splideRef.current.splide.index;
        splideRef.current.splide.go(index + 1);
    }

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-4/6 flex flex-col  justify-center items-center gap-20 my-16">
        <div className="w-full flex justify-between items-center gap-6">
          <h2 className="text-2xl font-medium border-b-2 hover:border-black transition-all duration-150">{title ? title : "Our Gallery"}</h2>
          <span className="flex justify-between items-center gap-6 ">
            <ArrowLeftOutlined className="text-4xl hover:opacity-70 cursor-pointer" onClick={prev} />
            <ArrowRightOutlined className="text-4xl hover:opacity-70 cursor-pointer" onClick={next} />
          </span>
        </div>

        {/* Carousel */}
        <Splide aria-label="My Favorite Images" ref={splideRef}   options={thumbsOptions} >
          {images &&
            images.map((image, index) => (
              <SplideSlide key={index}>
                <img
                  src={image}
                  alt={"carousel" +index}
                  className="w-full h-full object-cover"
                />
              </SplideSlide>
            ))}
        </Splide>

        <div>
          <Button  className="text-lg !p-4" >
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomCarousal;
