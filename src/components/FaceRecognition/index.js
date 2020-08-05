import React from "react";
import "./style.scss";
const FaceRecognition = ({ imageUrl, faceBoxes, isLoading }) => {
  const drawBoxes = (faceBoxes) => {
    let style = {
      top: faceBoxes.topRow,
      right: faceBoxes.rightCol,
      bottom: faceBoxes.bottomRow,
      left: faceBoxes.leftCol,
    };
    if (isLoading) {
      style = { ...style, boxShadow: "none" };
    }
    return style;
  };
  return (
    <section id="face-recognition" className="FaceRecognition">
      {imageUrl.length > 0 ? (
        <>
          <figure className="image is-fullwidth">
            <img id="input-img" src={imageUrl} alt="recognized face(s)!" />
          </figure>
          {faceBoxes
            ? faceBoxes.map((faceBox, idx) => {
                return (
                  <div
                    key={idx}
                    style={drawBoxes(faceBox)}
                    className={
                      isLoading
                        ? "FaceRecognition__Box"
                        : "FaceRecognition__Box show"
                    }
                  />
                );
              })
            : null}
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default FaceRecognition;
