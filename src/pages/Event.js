import Navbar from "../components/Navbar";
import CustomCarousal from "../components/Carousal";

const Event = () => {
  const CarousalData = [
    "https://www.efficientindia.com/img/other/ngo.png",
    "https://rajivgandhingo.wordpress.com/wp-content/uploads/2017/12/about-us-bal-utsav-bangalore-india.jpg",
    "https://assets.codepen.io/32795/poster.png",
    "https://rajivgandhingo.wordpress.com/wp-content/uploads/2017/12/about-us-bal-utsav-bangalore-india.jpg",
    "https://assets.codepen.io/32795/poster.png",
    "https://www.efficientindia.com/img/other/ngo.png",
  ];

  return (
    <div>
      <Navbar />

      <div id="recent-events relative" className="flex flex-col items-center">
        <h1 className="absolute z-20 text-[var(--primary-color)]   m-2 text-9xl font-bold"
        style={{ borderBottomWidth: '4px' }} // Custom border height
        >
          Recent Events
        </h1>
        <img
          src="https://media.ahmedabadmirror.com/am/uploads/mediaGallery/image/1677318699846.jpg-org"
          className="w-full"
        />
        <p className="text-3xl m-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.
          Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non
          elit dui.
        </p>
      </div>

      <CustomCarousal title={"Our Events"} images={CarousalData} />
    </div>
  );
};

export default Event;
