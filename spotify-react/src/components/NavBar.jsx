import React from "react";
import {Navbar} from 'react-bootstrap';


  class NavBar extends React.Component {
    render() {
        const mystyle = {
            position: "sticky",
            top: "0",
            height: "95vh",
           
            alignContent: "space-between",
          };
        
        return (
<div class="conatiner-fluid home-content">
      <div class="row w-100 ml-0 mr-0">
        <nav class="col-sm-3 col-md-3 col-lg-2 d-none d-md-block  sidebar">
          <div class="sidebar-sticky d-flex   flex-column justify-content-between" style={ mystyle}>
            
    <Navbar  expand="lg" id="Navbar">
    <div className="col" >
                <ul className="nav flex-column justify-content-center  mb-3  mb-auto">
                    <li className="nav-item mt-2  w-100 justify-content-center align-items-center">
                    <i className="fa fa-spotify" style={{fontSize: "35px"}}>Spotify</i>
                    </li>
                    <li className="mt-3  nav-item active"><a href="/"><i className="fa fa-home mr-3"></i>Home</a></li>
                    <li className="mt-3  nav-item"><a href="/"><i className="fa fa-search mr-3"></i>Search</a></li>
                    <li className="mt-3  nav-item"><a href="/"><i className="fa fa-book  mr-3"></i>Your Library</a></li>
                    </ul>
    </div>
    
    </Navbar>
</div>
</nav>
</div>
</div>
 );
        };
};
export default NavBar;