import HikeForm from "./HikeForm";
import "./stylesheets/HikeTrailsPage.css";
import img from "../image/nature.jpg";

const HikeTrailsPage = () => {
  document.body.style.backgroundImage = `url(${img})`;
  return (
    <div className="hike_page">
      <img src="../image/nature" alt="bg_image" />
      <HikeForm />
    </div>
  );
};

export default HikeTrailsPage;
