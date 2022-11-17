import React from "react"
import "./sidebar.css"
import SidebarButton from "./sidebarButton"

function Sidebar() {
  return (
    <div className="sidebar-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
        alt="profile"
        className="profile-img"
      />
      <div>
        {/* title="" to="" icon={} */}
        <SidebarButton />
        <SidebarButton />
        <SidebarButton />
        <SidebarButton />
        <SidebarButton />
      </div>
      <SidebarButton />
    </div>
  )
}

export default Sidebar
