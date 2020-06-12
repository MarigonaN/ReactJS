import React from "react";
import {Navbar} from 'react-bootstrap';


  class HomePage extends React.Component {
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

                <div class="row">
              <div class="col-10"></div>
            </div>
            <div class="row ml-5">
              <div class="col-10">
                <div id="rock">
                  <h2>Eminem</h2>
                  <div
                    class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="Eminem"
                  ></div>
                </div>
              </div>
            </div>
            <div class="row ml-5">
              <div class="col-10">
                <div id="rock">
                  <h2>Metallica</h2>
                  <div
                    class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="Metallica"
                  ></div>
                </div>
              </div>
            </div>
            <div class="row ml-5">
              <div class="col-10">
                <div id="rock">
                  <h2>Behemoth</h2>
                  <div
                    class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="Behemoth"
                  ></div>
                </div>
              </div>
            </div>



                </div>
                <div class="navbar fixed-bottom navbar-expand-sm w-100 d-flex justify-content-center ">
        <div class="row row-cols-1 row-cols-md-1 row-cols-lg-3 w-100 py-1">
            <div class="col"></div>
            <div class="col d-flex flex-column justify-content-center align-items-center">
            
               <div class="d-flex  justify-content-center align-items-center mb-1">
                  <a href="#" class="mr-4" ><i class="fa fa-random"></i></a>
                  <a href="#" class="mr-4"><i class="fa fa-fast-backward"></i></a>
                  <a href="#" class="mr-4"><i style={{fontSize: "2rem"}}  class="fa fa-play-circle"></i></a>
                  <a href="#" class="mr-4"><i class="fa fa-fast-forward"></i></a>
                  <a href="#" class="mr-4"><i class="fa fa-repeat"></i></a>
               </div>
               <div class="w-100 d-flex align-items-baseline">
                 <small class="mr-2">0.00</small>
                 <div class="progress w-100 mb-2" style={{height: "0.3rem"}}>
                  <div class="progress-bar w-75"  style={{backgroundColor: "#93A0B0"}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                 </div>
                 <small class="ml-2">45.00</small>
               </div>
               <div class="nav-bottom d-flex justify-content-between w-100 d-lg-none d-md-none border-top border-dark pt-2 mt-2">
                 <a href="albums.html" class="d-flex flex-column text-center"><i class="fa  fa-home " style={{fontSize: "1.5rem"}}></i>Home</a>
                 <a href="#"class="d-flex flex-column text-center"><i class="fa  fa-search " style={{fontSize: "1.5rem"}}></i>Search</a>
                 <a href="#" class="d-flex flex-column text-center"><i class="fa   fa-book  " style={{fontSize: "1.5rem"}}></i>Library</a>
                 <a href="#" class="d-flex flex-column text-center"><i class="fab   fa-spotify" style={{fontSize: "1.5rem"}}></i>Premium</a>
              </div>
            </div>
           
            <div class="col d-flex justify-content-end align-items-center mt-2 ">
              <a href="#" class="pr-3"><i class=" fa fa-volume-up"></i></a>
              <div class="progress w-50" style={{height: "0.3rem"}}>
                <div class="progress-bar w-75"  style={{backgroundColor: "#93A0B0"}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>          
            </div>
        </div>
        
       </div>



</div>
</div>
 );
        };
};
export default HomePage;