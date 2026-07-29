import React, {useContext} from "react";
import {Fade} from "../../components/Fade/Fade";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import mahmoudPortrait from "../../assets/images/mahmoudPortrait.png";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {/* CV button temporarily hidden — PDF is available at greeting.resumeLink
                {greeting.resumeLink && (
                  <Button
                    text="Download CV"
                    href={greeting.resumeLink}
                    newTab={true}
                  />
                )}
                */}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <div className="greeting-portrait-frame">
              <img
                className="greeting-portrait"
                alt="Mahmoud Elhadry, Software Engineer"
                src={mahmoudPortrait}
                width="520"
                height="650"
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
