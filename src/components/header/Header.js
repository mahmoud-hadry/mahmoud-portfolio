import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;

  return (
    <Headroom>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="#greeting" className="logo" aria-label="Mahmoud Elhadry, home">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          aria-label="Toggle navigation menu"
        />
        <label className="menu-icon" htmlFor="menu-btn" aria-hidden="true">
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <nav aria-label="Primary navigation">
          <ul className={isDark ? "dark-menu menu" : "menu"}>
            {viewSkills && (
              <li>
                <a href="#skills">Skills</a>
              </li>
            )}
            {viewExperience && (
              <li>
                <a href="#experience">Work Experiences</a>
              </li>
            )}
            {viewOpenSource && (
              <li>
                <a href="#opensource">Open Source</a>
              </li>
            )}
            {viewOpenSource && (
              <li>
                <a href="#projects">Selected Projects</a>
              </li>
            )}
            {viewAchievement && (
              <li>
                <a href="#achievements">Achievements</a>
              </li>
            )}
            {viewBlog && (
              <li>
                <a href="#blogs">Writing</a>
              </li>
            )}
            {/* {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">Resume</a>
            </li>
          )} */}
            <li>
              <a href="#contact">Contact Me</a>
            </li>
            <li>
              <ToggleSwitch />
            </li>
          </ul>
        </nav>
      </header>
    </Headroom>
  );
}
export default Header;
