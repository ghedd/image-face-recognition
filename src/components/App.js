import React, { useState } from "react";

/* ---------------- styles --------------- */

import MyParticles from "./MyParticles";
import "./style.scss";
/* -------------- components ------------- */

import Navigation from "./Navigation";
import AppLogo from "./AppLogo";
import SignIn from "./SignIn";
import Register from "./Register";
import DetectionBox from "./DetectionBox";
import FaceRecognition from "./FaceRecognition";
import Rank from "./Rank";
import Footer from "./Footer";

/* -------------- api config ------------- */

import Clarifai from "clarifai";
import RegisterStat from "./RegisterStat";

const API_KEY = "9672c4a16fc147cd824244b656fa2aa1";
const app = new Clarifai.App({
  apiKey: API_KEY,
});

const App = () => {
  // main states
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [boxes, setBoxes] = useState([]);
  const [route, setRoute] = useState("signIn");
  const [registerStat, setRegisterStat] = useState(0);
  const [error, setError] = useState("");
  // loading status
  const [isloading, setIsLoading] = useState(false);
  // methods
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const handleRouteChange = (route) => {
    setRoute(route);
  };
  const handleSuccessfulRegistration = (route) => {
    setRoute(route);
    setRegisterStat(1);
    setTimeout(() => {
      setRegisterStat(0);
    }, 3200);
  };
  const calculateFaceLocation = (data) => {
    let face = data;
    let image = document.getElementById("input-img");
    let width = Number(image.width);
    let height = Number(image.height);
    let { top_row, left_col, bottom_row, right_col } = face;
    return {
      leftCol: left_col * width,
      topRow: top_row * height,
      rightCol: width - right_col * width,
      bottomRow: height - bottom_row * height,
    };
  };
  const handleDetection = async () => {
    try {
      setBoxes([]);
      setIsLoading(true);
      let resp = await app.models.predict(Clarifai.FACE_DETECT_MODEL, input);
      if (resp.status.code !== 10000) {
        throw new Error("Ouch! Hit by error");
      } else {
        let data = resp.outputs[0].data.regions.map(
          (region) => region.region_info.bounding_box
        );
        console.log(data);
        setBoxes(data.map((item) => calculateFaceLocation(item)));
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      setError(err);
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    setImageUrl(input);
    handleDetection();
  };

  return (
    <>
      <div className="Container">
        <MyParticles />
        <Navigation
          isLoggedIn={route === "home" ? true : false}
          onRouteChange={handleRouteChange}
          currentRoute={route}
        />
        <main>
          {registerStat === 1 ? <RegisterStat /> : null}
          <AppLogo />
          {route === "signIn" ? (
            <SignIn onRouteChange={handleRouteChange} />
          ) : route === "register" ? (
            <Register
              onRouteChange={handleRouteChange}
              onSuccessRegistration={handleSuccessfulRegistration}
            />
          ) : (
            <>
              <Rank />
              <DetectionBox
                onInputChange={handleInputChange}
                handleDetection={handleSubmit}
                isLoading={isloading}
              />
              <FaceRecognition
                imageUrl={imageUrl}
                faceBoxes={boxes}
                isLoading={isloading}
              />
            </>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
