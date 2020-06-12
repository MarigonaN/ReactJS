import React from "react";
class Footer extends React.Component {
    render() {
       
        
        return (
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
         );
        };
};

export default Footer;