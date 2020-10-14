import React from 'react';
import desk_img from '../../Resources/img/img_1.jpg'
import mobi_img from '../../Resources/img/img_.jpg'

const Header = ({ artist }) => {

    if (artist) return null

    return (<div className="header">
        <img className="img-fluid p-0 d-none d-sm-block" src={desk_img} alt="Logo" />
        <img className="img-fluid p-0 d-block d-sm-none" src={mobi_img} alt="Logo" />

        <div className="overlay">
            <h2>Welcome</h2>
            <p>Search for your favourite Artists and preview some of they songs</p>
        </div>
       
    </div>  );
}
 
export default Header;