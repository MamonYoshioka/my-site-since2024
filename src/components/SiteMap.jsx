// import React from 'react';
// import { Link } from 'react-router-dom'; // React Routerを使用する場合
import './css/SiteMap.css';

const SiteMap = () => {
  return (
    <div className="sitemap">
      <h2>Site Map</h2>
      <ul className="sitemap-list">
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Contact</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default SiteMap;
