import React from "react";
import backgroundImage from "../assets/krafBangnaImage.jpg";

export default function Home() {
  const caption = {
    position: "absolute",
    left: "0",
    top: "50%",
    width: "100%",
    textAlign: "center",
    color: "#000"
  }

  const span = {
    backgroundColor:"#111",
    color:"#fff",
    padding:"18px",
    fontSize:"35px",
    letterSpacing:"10px"
  }



  return (
    <div
      style={{
        backgroundImage: "url(" + backgroundImage + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "800%",
      }}
    >
      <div style={caption}>
        <span style={span}>Thailand Living Essential</span>
      </div>
  </div>
  );
}

