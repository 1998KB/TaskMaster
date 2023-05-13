import "./StdLandingPage.css";
import Man from "../../images/oldman.png";
import { ContinueWithGoogle } from "../ContinueWithGoogle/ContinueWithGoogle";
import { useEffect, useState } from "react";

export const StdLandingPage = () => {
  const [currentScroll, setCurrentScroll] = useState(0);

  useEffect(() => {
    setCurrentScroll(window.scrollY);
    document.addEventListener("scroll", () => setCurrentScroll(window.scrollY));
  }, []);

  return (
    <div className="std-landingPage-container">
      <div
        className="std-landingPage-grid"
        style={{
          transform: `translateY(${currentScroll * 0.1}px) translateX(${
            currentScroll * -0.1
          }px)`,
        }}
      >
        <div
          className="std-landingPage-column std-landingPage-c1"
          style={{
            transform: `translateY(${currentScroll * 0.1}px) scale(${
              1 + currentScroll * -0.0003
            })`,
          }}
        >
          <h1 className="std-landingPage-c1-h1">TaskMaster</h1>
          <h2 className="std-landingPage-c1-h2">
            Boosting Project Success <br /> Revolutionary Collaborative AI
          </h2>
          {/* <p className="std-landingPage-c1-h2">
            Collaborate with friends and use all the power of AI trained
            specifically for your project.
          </p> */}
          <ContinueWithGoogle />
        </div>
        <div className="std-landingPage-column std-landingPage-c2">
          <img src={Man} className="std-landingPage-image" />
        </div>
      </div>
      <div className="std-landingPage-wave">
        <svg
          className="wave"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f7f7f7"
            fill-opacity="1"
            d="M0,256L48,240C96,224,192,192,288,176C384,160,480,160,576,170.7C672,181,768,203,864,224C960,245,1056,267,1152,266.7C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};
