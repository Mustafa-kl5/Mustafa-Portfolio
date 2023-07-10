import React, { useEffect, useState } from "react";
import "../../componentStyle/NavigationMenu.css";
import "animate.css";
import MenuItem from "./MenuItem";
import homeIcon from "../../assets/home.png";
import techIcon from "../../assets/technology.png";
import projectsIcon from "../../assets/projects.png";
import contactIcon from "../../assets/contact.png";
import feedbackIcon from "../../assets/feedback.png";

export default function NavigationMenu(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [exitsAnimation, setExitsAnimation] = useState(false);
  const closeMenu = () => {
    setExitsAnimation(true);
    setTimeout(() => {
      setShowMenu(!showMenu);
    }, 1000);
  };
  useEffect(() => {
    setTimeout(() => {
      setExitsAnimation(false);
    }, 1000);
  }, [exitsAnimation]);

  const exitsRouteAnimation = () => {
    props.exitsRouteAnimation();
  };

  return (
    <>
      <div className="menu-holder ">
        <div className="toggle-button">
          <div
            className="burger"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
        </div>
      </div>

      {showMenu ? (
        <div
          className={`menuItem-Holder animate__animated ${
            exitsAnimation
              ? "  animate__slideOutLeft"
              : "  animate__slideInLeft"
          }`}
        >
          <div className="menuWord-closeMenu">
            <div className="menuWord">Menu</div>
            <div className="closeMenu" onClick={closeMenu} />
          </div>
          <MenuItem
            path={"/"}
            pathName="Home"
            icon={homeIcon}
            sendCloseAnimation={closeMenu}
            exitsRouteAnimation={exitsRouteAnimation}
          />
          <MenuItem
            path={"/projects"}
            pathName="Projects"
            icon={projectsIcon}
            sendCloseAnimation={closeMenu}
            exitsRouteAnimation={exitsRouteAnimation}
          />
          <MenuItem
            path={"/technology"}
            pathName="Technology"
            icon={techIcon}
            sendCloseAnimation={closeMenu}
            exitsRouteAnimation={exitsRouteAnimation}
          />
          <MenuItem
            path={"/feedback"}
            pathName="FeedBacks"
            icon={feedbackIcon}
            sendCloseAnimation={closeMenu}
            exitsRouteAnimation={exitsRouteAnimation}
          />
          <MenuItem
            path={"/contact"}
            pathName="Contact"
            icon={contactIcon}
            sendCloseAnimation={closeMenu}
            exitsRouteAnimation={exitsRouteAnimation}
          />
        </div>
      ) : null}
    </>
  );
}
