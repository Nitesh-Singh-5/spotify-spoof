import React from "react";
import "./controls.css";

export default function Controls({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
}) {
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="col-4 offset-lg-4 playerControls mt-1 d-flex justify-content-around">
        <a>
          <img src="/playerbuttons/Shuffle.png" alt="shuffle" />
        </a>
        <a onClick={handlePrev}>
          <img src="/playerbuttons/Previous.png" alt="shuffle" />
        </a>

        <a onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQdbKc6xxtq2gXOlFVf83t_7KzB-dVJG4K9YPFIBp5KXYoNtvrm"
              alt="shuffle"
            />
          ) : (
            <img src="/playerbuttons/Play.png" alt="shuffle" />
          )}
        </a>
        <a conClick={handleNext}>
          <img src="/playerbuttons/Next.png" alt="shuffle" />
        </a>
        <a>
          <img src="/playerbuttons/Repeat.png" alt="shuffle" />
        </a>
      </div>
    </div>
  );
}
