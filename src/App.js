import logo from "./logo.svg";
import "./App.css";
import RexBrandAnimation from "./comp/BrandAnimation/RexBrandAnimation";

function App() {
  const borderOptions = {
    border: "4px solid black",
    width: `90%`,
    maxWidth: `1536px`,
    marginInline: "auto",
    height: `100px`,
    alignItems: "center",
  };
  const itemOptions = {
    border: "2px solid black",
    borderRadius: "4px",
  };
  return (
    <div className="App">
      <RexBrandAnimation
        animationTime={"20s"}
        borderOptions={borderOptions}
        itemWidth={"100px"}
        itemHeight={"50px"}
        itemOptions={itemOptions}
      >
        {Array(8)
          .fill(0)
          .map(() => {
            return <div className=""></div>;
          })}
      </RexBrandAnimation>
    </div>
  );
}

export default App;
