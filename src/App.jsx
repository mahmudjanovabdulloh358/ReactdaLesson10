import "./App.css";
import Header from "./Components/Navbar/Navbar";
// import Banner from "./Components/Banner/Banner";
import Main from "./Components/Main/Main";

// const data = [
//   {
//     bgImg:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenEyHgATwNmrRnamm6gkOSwoWrMiM9eQn9A&s",
//     bgColor: "red",
//     title: "Banner",
//     titleColor: "dodgerblue",
//   },
//   {
//     bgImg:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenEyHgATwNmrRnamm6gkOSwoWrMiM9eQn9A&s",
//     bgColor: "blue",
//     title: "About",
//     titleColor: "dodgerblue",
//   },
//   {
//     bgImg:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenEyHgATwNmrRnamm6gkOSwoWrMiM9eQn9A&s",
//     bgColor: "green",
//     title: "Blog",
//     titleColor: "dodgerblue",
//   },
// ];

const dataMain = [
  {
    bgImg:
      "https://images.samsung.com/is/image/samsung/assets/us/home/07112024/SDSAC-7742_S24U_ETI_HP-LOB-FullBleed-DT-1440x810.jpg?$1440_810_JPG$",
    title: "Mobile & Computing",
    items: ["Galaxy S24 Ultra", "Galaxy Z Fold6", "Galaxy Tab S10 Ultra"],
  },
  {
    bgImg:
      "https://images.samsung.com/is/image/samsung/assets/us/home/01102025/W34_LoB1_D_1440x810-1x.jpeg?$1440_810_JPG$",
    title: "TV & Audio",
    items: ["Neo QLED 4K QN85D", "Crystal UHD DU9000 98", " Q910D Soundbar"],
  },
];

function App() {
  return (
    <div>
      <Header />
      {/* {data.map((item, index) => {
        return (
          <div key={index}>
            <Banner {...item} />
          </div>
        );
      })} */}
      {dataMain.map((item, index) => {
        return (
          <div key={index}>
            <Main {...item} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
