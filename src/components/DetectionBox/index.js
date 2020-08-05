import React from "react";
import "./style.scss";
const DetectionBox = ({ onInputChange, handleDetection, isLoading }) => {
  const detectBtnStyle = () => {
    let classList = "DetectionBox__DetectBtn button is-uppercase is-primary has-text-weight-semibold".split(
      " "
    );
    let className = "";
    if (isLoading) {
      classList.push("is-loading");
    }
    className = classList.join(" ");
    return className;
  };

  return (
    <section id="detection-box" className="DetectionBox card">
      <div className="card-content">
        <div className="field">
          <label className="DetectionBox__Label is-uppercase label has-text-centered ">
            Image link
          </label>
          <div className="control">
            <input
              className="DetectionBox__Input input is-primary is-size-6-mobile"
              type="text"
              placeholder="Your image link goes here..."
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="field">
          <p className="control has-text-centered">
            <button
              className={detectBtnStyle()}
              
              onClick={handleDetection}
            >
              Detect
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetectionBox;
