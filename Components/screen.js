import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../img/crt.jpg';
import img2 from '../img/Presentation1.jpg';
import img3 from '../img/prj.jpg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Screen() {

     

  return (
    <>
        

<div class="grand_parent">
        <h1> My protfolio</h1>
        <div class="parents">
            <div class="child">
           < div class="card" >
            
<img class="card-img-top" src={img2} alt="Card image cap"/>


<button type="button" class="btn btn-light" > <Link to="/I">Internships & Experiance</Link>
</button>


</div>
            </div>
            <div class="child">
           < div class="card" >
<img class="card-img-top" src={img1} alt="Card image cap" />

<button type="button" class="btn btn-light"><Link to="/c">certificate</Link></button>

</div>
            </div>
            <div class="child" >
           < div class="card"  >
<img class="card-img-top" src={img3} alt="Card image cap" />



<button type="button" class="btn btn-light"  ><Link to="/p" >Projects</Link></button>



</div>
            </div>
        </div>
    </div>
        </>
  );
}

export default Screen;
