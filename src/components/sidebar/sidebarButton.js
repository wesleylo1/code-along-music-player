import React from "react"
import { IconContext } from "react-icons"
import { Link } from "react-router-dom"
import "./sidebarButton.css"

function sidebarButton(props) {
  return (
    <Link to={props.to}>
      <div className="btn-body">
        <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
          {props.icon}
          <p className="btn-title">{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  )
}

export default sidebarButton
