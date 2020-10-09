import React from 'react';
import logo from './logo.jpg';
import '../static/css/app.css';
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id="footer" className="container-fluid">
  <hr/>
                <div id="footer-detail">
                  
                    <img src={logo} alt="Logo" id="flogo" height="60" width="60" />
                    <small>&copy; Copyright 2020, Soal</small>
                    <div style={{ float: "right" ,color:"white"}}>
                        <a href="">Location Map</a> <br/>
                        <a href="">Term and use</a> <br/>
                        <a href="">Help & Contact Us</a>
                        
                    </div>

                </div>


            </div>


        );
    }
}

export default Footer;