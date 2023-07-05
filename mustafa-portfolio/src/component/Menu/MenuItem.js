import React from "react";
import "../../componentStyle/MenuItem.css";
import { useNavigate, useLocation } from "react-router-dom";
export default function MenuItem(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const linkTo = () => {
    if (location.pathname === props.path) {
      props.sendCloseAnimation();
      return;
    }
    props.sendCloseAnimation();
    props.exitsRouteAnimation();
    setTimeout(() => {
      navigate(props.path);
    }, 2000);
  };
  return (
    <div className="menu-item" onClick={linkTo}>
      <div
        className="menu-item-icon"
        style={{ backgroundImage: `url("${props.icon}")` }}
      ></div>

      <div className="menu-path-word">{props.pathName}</div>
    </div>
  );
}
