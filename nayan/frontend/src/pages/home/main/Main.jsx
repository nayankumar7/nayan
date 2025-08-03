import React, { useRef } from "react";
import './Main.css'
import videoFile from './images/video.mp4';
const Main = () => {
  const scrollRef = useRef(null);
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  // Function to scroll left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -355, behavior: "smooth" });
  };
  const scrollLeft1 = () => {
    scrollRef1.current.scrollBy({ left: -355, behavior: "smooth" });
  };
  const scrollLeft2 = () => {
    scrollRef2.current.scrollBy({ left: -355, behavior: "smooth" });
  };

  // Function to scroll right
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 355, behavior: "smooth" });
  };
  const scrollRight2 = () => {
    scrollRef2.current.scrollBy({ left: 355, behavior: "smooth" });
  };

 
  const scrollRight1 = () => {
    scrollRef1.current.scrollBy({ left: 355, behavior: "smooth" });
  };
  return (
    <div>
        <div className="main">
          <div className="welcome-page">
          <div className="welcome photos">
            <h2>Welcome to,</h2>
            <h2> Nayan's Profile</h2>
          </div>
          <div className="welcome videos">
          <video className="video" autoPlay controls muted loop>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>


          </div>
          
          </div>
          
            <div className="updates">
                <p className="new-update" >
                    Latest Updates
                </p>
            </div>
            <div className="notices">
            <div className="scroll-wrapper">
      <button className="scroll-btn left" onClick={scrollLeft}>
        &#8592;
      </button>
      <div className="scroll-container" ref={scrollRef}>
        {[...Array(10)].map((_, index) => (
          <div key={index} className="box">
            Box {index + 1}
          </div>
        ))}
      </div>
      <button className="scroll-btn right" onClick={scrollRight}>
        &#8594;
      </button>
    </div>
            </div>
            <div className="contests">
            <p className="new-update" >
                    Latest donner
                </p>
            <div className="scroll-wrapper">
      <button className="scroll-btn left" onClick={scrollLeft1}>
        &#8592;
      </button>
      <div className="scroll-container" ref={scrollRef1}>
        {[...Array(10)].map((_, index) => (
          <div key={index} className="box">
            Box {index + 1}
          </div>
        ))}
      </div>
      <button className="scroll-btn right" onClick={scrollRight1}>
        &#8594;
      </button>
    </div>
            </div>
            <div className="contests">
            <p className="new-update" >
                    Latest Public Requests
                </p>
            <div className="scroll-wrapper">
      <button className="scroll-btn left" onClick={scrollLeft1}>
        &#8592;
      </button>
      <div className="scroll-container" ref={scrollRef1}>
        {[...Array(10)].map((_, index) => (
          <div key={index} className="box">
            Box {index + 1}
          </div>
        ))}
      </div>
      <button className="scroll-btn right" onClick={scrollRight1}>
        &#8594;
      </button>
    </div>
            </div>
            <div className="contests">
            <p className="new-update" >
                    Latest Contests
                </p>
            <div className="scroll-wrapper">
      <button className="scroll-btn left" onClick={scrollLeft1}>
        &#8592;
      </button>
      <div className="scroll-container" ref={scrollRef1}>
        {[...Array(10)].map((_, index) => (
          <div key={index} className="box">
            Box {index + 1}
          </div>
        ))}
      </div>
      <button className="scroll-btn right" onClick={scrollRight1}>
        &#8594;
      </button>
    </div>
            </div>
            <div className="posts">
            <p className="new-update" >
                    Social Media Track New Post
            </p>
            <div className="scroll-wrapper">
      <button className="scroll-btn left" onClick={scrollLeft2}>
        &#8592;
      </button>
      <div className="scroll-container" ref={scrollRef2}>
        {[...Array(10)].map((_, index) => (
          <div key={index} className="box">
            Box {index + 1}
          </div>
        ))}
      </div>
      <button className="scroll-btn right" onClick={scrollRight2}>
        &#8594;
      </button>
    </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Main