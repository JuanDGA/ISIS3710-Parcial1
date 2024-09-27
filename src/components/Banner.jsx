import { Image } from "react-bootstrap";
import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <>
      <h1 className="text-center my-4">Adopta un robot con RobotLovers!</h1>
      <Image
        src={BannerImage}
        alt="RobotLovers banner"
        className="w-100"
      ></Image>
    </>
  );
};

export default Banner;
