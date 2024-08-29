import Navbar from "../components/Navbar";
import CustomCarousal from "../components/Carousal";

const About = () => {
  const CarousalData = [
    "https://www.efficientindia.com/img/other/ngo.png",
    "https://rajivgandhingo.wordpress.com/wp-content/uploads/2017/12/about-us-bal-utsav-bangalore-india.jpg",
    "https://assets.codepen.io/32795/poster.png",
  ];

  return (
    <div>
      <Navbar />

      <div id="about-us" className="flex flex-col items-center">
        <h1 className="text-[var(--primary-color)] border-b-2 m-2 text-9xl font-bold"
        style={{ borderBottomWidth: '4px' }} // Custom border height
        >
          About Us
        </h1>
        <img
          src="https://example.com/your-about-us-image.jpg"
          className="w-full"
          alt="About Us"
        />
        <p className="text-3xl m-14 text-center">
          Welcome to [Your Organization Name], where our mission is to make a
          difference in the world. Our journey began with a vision to impact
          lives through dedication, hard work, and a passion for helping those
          in need. From humble beginnings, we have grown into a community-driven
          organization that thrives on the support of individuals like you.
        </p>
        <p className="text-3xl m-14 text-center">
          Our initiatives span across education, healthcare, and environmental
          conservation, with a focus on sustainable development and inclusive
          growth. We believe in the power of collective effort and are committed
          to creating opportunities for all, regardless of background or
          circumstance.
        </p>
        <p className="text-3xl m-14 text-center">
          Join us in our mission to create a better future, one step at a time.
          Together, we can make a lasting impact on the world around us.
        </p>
      </div>

      <CustomCarousal title={"Our Journey"} images={CarousalData} />
    </div>
  );
};

export default About;
