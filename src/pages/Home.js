import Navbar from "../components/Navbar";
import { Button, Carousel } from "antd";

import { useEffect } from "react";

import "@splidejs/react-splide/css";

import "../styles/Home.css";
import CustomCarousal from "../components/Carousal";
import MidContent from "../components/MidContent";
import Footer from "../components/Footer";

const Home = () => {
  const cardData = [
    {
      title: "Child Education",
      description: "We provide free education to children",
      bgColor: "bg-red-500/75",
      bgImage: "https://www.efficientindia.com/img/other/ngo.png",
    },
    {
      title: "Refugee Support",
      description: "We provide food and shelter to refugees",
      bgColor: "bg-blue-500/75",
      bgImage:
        "https://www.dailypioneer.com/uploads/2017/story/images/big/191286_1.jpg",
    },
    {
      title: "Food Distribution",
      description: "We provide food to the homeless",
      bgColor: "bg-green-500/75",
      bgImage:
        "https://t4.ftcdn.net/jpg/08/34/57/13/360_F_834571348_LQUKI6sFfMrU1WYhoABOnoF9NOK819wK.jpg",
    },
  ];

  const buttonColors = [
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-gray-500",
  ];

  // Animate text to move from right to left and loop and stop on hover
  const marquee = () => {
    let text = document.querySelector(".movableText");
    let textWidth = text.offsetWidth;
    let containerWidth = text.parentElement.offsetWidth;
    let start = containerWidth - 1300;
    let end = -textWidth;
    let duration = (textWidth + containerWidth) * 10;
    text.animate(
      [
        { transform: `translateX(${start}px)` },
        { transform: `translateX(${end}px)` },
      ],
      {
        duration: duration,
        iterations: Infinity,
        easing: "linear",
      }
    );
    text.addEventListener("mouseenter", () => {
      text.style.animationPlayState = "paused";
    });
    text.addEventListener("mouseleave", () => {
      console.log("mouse left");
      text.style.animation = "none";
      text.style.animationPlayState = "running";
    });
  };

  useEffect(() => {
    marquee();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/870402320/photo/a-social-worker-meeting-with-a-group-of-villagers.jpg?s=612x612&w=0&k=20&c=2JlS1vqg4pU5lCp8oiFXjVgMPlHbhrmH4wmtRJdq384=")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full flex flex-col justify-center items-center h-[80vh] relative mb-44"
      >
        <div>
          <h1 className="text-4xl backdrop-blur-sm font-extrabold text-white text-center -mt-12 rounded-sm p-2">
            Welcome to our NGO
          </h1>
          <h3 className="text-2xl backdrop-blur-sm font-bold text-white text-center my-12 p-2">
            We are here to help you
          </h3>
        </div>
        <Button
          style={{
            fontSize: "20px",
            fontWeight: "600",
          }}
          className="!px-8 !py-6"
          type="primary"
          size="large"
          shape="round"
        >
          Donate Now
        </Button>
        <div className="absolute flex justify-around -bottom-32 z-20">
          {cardData.map((card, index) => (
            <div
              className={`w-[250px] h-[250px] text-white relative ${card.bgColor} flex flex-col justify-center items-center p-4 gap-2
              hover:bg-transparent transition-all duration-300 ease-in-out
              `}
              key={card.title}
            >
              <div
                className="w-full p-0 m-0 bg-gray-100 absolute -z-20"
                style={{
                  backgroundImage: `url("${card.bgImage}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100%",
                }}
              />
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <p className="text-lg text-center p-2">{card.description}</p>
              <span className="bg-yellow-500 "></span>
              <span className="bg-purple-500 "></span>
              <span className="bg-pink-500 "></span>
              <Button
                style={{
                  fontSize: "20px",
                  fontWeight: "300",
                }}
                className={`!px-4 !py-4 hover:!text-white  hover:!backdrop-blur-sm hover:!${buttonColors[index]}`}
                ghost
                shape="round"
              >
                Donate Now
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full overflow-hidden  my-12 flex flex-col justify-center items-center gap-6">
        <h1 className="text-6xl  w-[200%] flex movableText">
          Over 1 billion people in the world are living in poverty. You can be
          the change in their lives. Donate now.
        </h1>
        <h3 className="text-3xl text-center text-[var(--text-color)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
        </h3>
      </div>

      <div
        className={`w-full  text-white relative bg-stone-800/80 flex flex-col justify-evenly items-center p-4 gap-2
               transition-all duration-300 ease-in-out
              `}
        style={{
          height: "calc(60vh - 120px)",
        }}
      >
        <div
          className="w-full p-0 m-0 bg-gray-100 absolute -z-20 "
          style={{
            backgroundImage: `url("https://rajivgandhingo.wordpress.com/wp-content/uploads/2017/12/about-us-bal-utsav-bangalore-india.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
          }}
        />
        <div>
          <h2 className="text-4xl font-bold text-center">
            Join the Helpers Group
          </h2>
          <p className="text-lg text-center mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <Button
          style={{
            fontSize: "20px",
            fontWeight: "300",
          }}
          className={`!px-4 !py-4`}
          // type="primary"
          size="large"
          shape="round"
        >
          Donate Now
        </Button>
      </div>

      <div className="w-full flex  justify-center items-center gap-6 my-16">
        <div className="w-1/3 relative">
          <span className="videoBehind"></span>
          <video
            className="videoElement "
            id="video"
            controls="controls"
            preload="none"
            width="600"
            poster="https://assets.codepen.io/32795/poster.png"
          >
            <source
              id="mp4"
              src="http://media.w3.org/2010/05/sintel/trailer.mp4"
              type="video/mp4"
            />
            <span>Your browser does not support the video tag.</span>
          </video>
        </div>
        <div className="text-left w-1/3">
          <h1 className=" text-6xl">Watch our video</h1>
          <h3 className="text-3xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
          </p>
          <Button
            style={{
              fontSize: "20px",
              fontWeight: "300",
            }}
            className={`!px-4 !py-4`}
            ghost
            size="large"
            shape="round"
          >
            Read More
          </Button>
        </div>
      </div>

      <div
        className={`w-full  text-white relative bg-stone-800/80 flex flex-col justify-evenly items-center p-4 gap-2
               transition-all duration-300 ease-in-out
              `}
        style={{
          height: "calc(60vh - 120px)",
        }}
      >
        <div
          className="w-full p-0 m-0 bg-gray-100 absolute -z-20 "
          style={{
            backgroundImage: `url("https://rajivgandhingo.wordpress.com/wp-content/uploads/2017/12/about-us-bal-utsav-bangalore-india.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
          }}
        />
        <h1 className="text-4xl font-bold text-center">Latest News</h1>
        <div className="flex flex-row justify-evenly items-center gap-6 mx-32">
          <div>
            <h2 className="text-2xl font-bold text-left">
              Join the Helpers Group
            </h2>
            <p className=" text-left mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-left">
              Join the Helpers Group
            </h2>
            <p className=" text-left mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-left">
              Join the Helpers Group
            </h2>
            <p className=" text-left mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row justify-center items-center gap-20 my-16">
        <img
          src="https://www.shutterstock.com/image-vector/ngo-organization-black-glyph-icon-260nw-1795132267.jpg"
          className="w-1/4 border-2 border-black"
        />
        <div className="flex flex-col justify-center items-center gap-6 w-1/3">
          <div className="">
            <h3 className="text-xl font-medium">
              Lorem ipsum dolor sit amet nec.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam nec.
            </p>
          </div>
          <div className="">
            <h3 className="text-xl font-medium">
              Lorem ipsum dolor sit amet nec.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam nec.
            </p>
          </div>
          <div className="">
            <h3 className="text-xl font-medium">Lorem ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam nec.
            </p>
          </div>
        </div>
      </div>

      <MidContent data={cardData} />

      <CustomCarousal
        images={[
          "https://www.efficientindia.com/img/other/ngo.png",
          "https://rajivgandhingo.wordpress.com/wp-content/uploads/2017/12/about-us-bal-utsav-bangalore-india.jpg",
          "https://assets.codepen.io/32795/poster.png",
          "https://rajivgandhingo.wordpress.com/wp-content/uploads/2017/12/about-us-bal-utsav-bangalore-india.jpg",
          "https://assets.codepen.io/32795/poster.png",
          "https://www.efficientindia.com/img/other/ngo.png",
        ]}
      />

      <div className="w-full flex flex-col justify-center items-center gap-6 my-16 relative p-4">
        <div
          style={{
            backgroundImage: `url("https://media.istockphoto.com/id/1439764294/photo/paint-brush-stroke-blue-on-white-background.jpg?s=612x612&w=0&k=20&c=MUinl2YlJiYFcX05EJ05tDWvqJMC5WKuO6aicxX2_F4=")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "grayscale(1) brightness(1.5)",
            width: "100%",
            height: "100%",
          }}
          className="absolute -z-10 "
        />
        <h1 className="text-4xl font-bold text-[var(--text-color)]">
          Anyone can be a volunteer
        </h1>
        <h1 className="text-2xl font-bold">Join us now</h1>
        <p className="text-lg text-center w-1/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
        </p>
        <Button
          style={{
            fontSize: "20px",
            fontWeight: "300",
          }}
          className={`!px-4 !py-4`}
          size="large"
          shape="round"
        >
          Join Now
        </Button>
      </div>

      <div className="flex flex-row justify-evenly items-center gap-6 mx-32 my-16 text-center" >
        <div className="w-2/3">
          <h1 className="text-4xl font-bold"><span className="text-[var(--primary-color)]">Our</span> donners</h1>
          <p className="flex justify-center items-center px-16 my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
          </p>
          <div className="flex flex-row justify-evenly items-center gap-6 ">
            <img
              src="https://www.efficientindia.com/img/other/ngo.png"
              className="w-1/3 aspect-square border-2 border-black"
            />
            <img
              src="https://www.efficientindia.com/img/other/ngo.png"
              className="w-1/3 aspect-square border-2 border-black"
            />
          </div>
        </div>
        <div className="w-2/3">
          <h1 className="text-4xl font-bold">
          <span className="text-[var(--primary-color)]">Our</span> donners</h1>
          <p className="flex justify-center items-center px-16 my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
          </p>
          <div className="flex flex-row justify-evenly items-center gap-6 ">
            <img
              src="https://www.efficientindia.com/img/other/ngo.png"
              className="w-1/3 aspect-square border-2 border-black"
            />

          </div>
        </div>
      </div>

      <Footer />  
    </div>
  );
};

export default Home;
