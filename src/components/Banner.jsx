import { Image } from "react-bootstrap";
import BannerImage from "../assets/banner.png";
import { FormattedMessage } from "react-intl";

const Banner = () => {
  return (
    <>
      <h1 className="text-center my-4">
        <FormattedMessage id="title" />
      </h1>
      <Image
        src={BannerImage}
        alt="RobotLovers banner"
        className="w-100"
      ></Image>
    </>
  );
};

export default Banner;
