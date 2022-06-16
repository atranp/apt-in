import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const Sidebar = () => {

  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://media.istockphoto.com/photos/blue-watercolor-background-texture-in-light-color-picture-id1154566604?k=20&m=1154566604&s=170667a&w=0&h=suR_khNOhu9QcDDHaCkcQpnZyHT79PxZfllm6ptabDw=" alt=""></img>
        <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">2,543</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">2,488</p>
          </div>
        </div>
      <div className="sidebar__bottom">
        <p>Technologies Used</p>
        {recentItem('reactjs')}
        {recentItem('Material UI')}
        {recentItem('Redux')}
        {recentItem('Firebase')}
      </div>
    </div>
  );
};

export default Sidebar;
