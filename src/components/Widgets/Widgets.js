import React from 'react'
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>APT.In Features</h2>
            <InfoIcon />
        </div>
        {newsArticle("Post ", "Make a post")}
        {newsArticle("Authentication ", "Login and Logout")}
        {newsArticle("API ", "Firebase backend")}
        {newsArticle("Stateful ", "Managed with Redux")}
        {newsArticle("Post Animation ", "React-Flip")}
        {newsArticle("Fully Responsive UI", "MaterialUI & Flexbox")}
    </div>
  )
}

export default Widgets