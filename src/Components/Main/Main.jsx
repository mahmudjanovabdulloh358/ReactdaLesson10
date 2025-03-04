import "./Main.css";

// eslint-disable-next-line react/prop-types
const Main = ({ bgImg, title, items }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        paddingTop: "20px",
        fontSize: "30px",
        color: "white",
      }}
    >
      <h1>{title}</h1>
      <nav>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none",
            gap: "40px",
            padding: "20px",
          }}
        >
          {items.map((textItem, textIndex) => (
            <li key={textIndex}>
              <a
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
                href="#"
              >
                {textItem}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Main;
