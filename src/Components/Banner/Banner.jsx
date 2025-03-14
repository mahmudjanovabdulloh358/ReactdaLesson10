import "./Banner.css";
// eslint-disable-next-line react/prop-types
const Banner = ({ bgImg, title, bgColor, titleColor }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "1060px",
        textAlign: "center",
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 style={{ color: titleColor }}>{title}</h1>
    </div>
  );
};

export default Banner;
