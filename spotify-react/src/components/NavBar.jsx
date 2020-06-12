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
          const mystyle1 = {
            backgroundColor: "black",
            color: "whitesmoke", 
            border: "1px solid white", 
            fontWeight: "500",
            
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
                    <div class="col d-flex flex-column w-100">
                <ul class="nav flex-column justify-content-center align-items-center w-100 mt-auto pb-5">
                  <li class="nav-item w-100 mb-3">
                      <button type="button" class="btn btn-light  w-100 rounded-pill" style={{fontWeight:"500", marginTop: "350px"}}>SIGN UP</button>
                  </li>
                  <li class="nav-item w-100 mb-2">
                     <button type="button" onclick="goToLogin()" class="btn btn-secondary w-100 rounded-pill" style={mystyle1}>LOGIN</button>
                  </li>
                  <li class="nav-item">
                    <small class="mr-2">Cookie</small>|<small class="ml-2">Privacy Policy</small>
                  </li>
                 
                </ul>
         </div>
    </div>
    
    </Navbar>
</div>
</nav>
<div class="col-sm-9 col-md-9 col-lg-10 pb-sm-4" >
              <nav class="navbar navbar-expand-lg navbar-light   pt-3 mb-3">
                 
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                
                 <div class="d-flex align-items-center m-auto">
                      <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto ">
                          <li class="nav-item active mr-3">
                            <a class="nav-link bolder" href="#">Trending <span class="sr-only">(current)</span></a>
                          </li>
                          <li class="nav-item mr-3">
                            <a class="nav-link bolder" href="#">Podcast</a>
                          </li>
                         
                          <li class="nav-item mr-3">
                            <a class="nav-link bolder" href="#" >Moods and genres</a>
                          </li>
                          <li class="nav-item mr-3">
                              <a class="nav-link bolder" href="#" >New Releases</a>
                            </li>
                            <li class="nav-item mr-3">
                              <a class="nav-link bolder" href="#" >Discover</a>
                            </li>
                        </ul>
                       
                      </div>
                 </div>
                </nav>
                </div>



</div>
</div>
 );
        };
};
export default NavBar;