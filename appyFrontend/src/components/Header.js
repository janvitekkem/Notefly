import React from 'react';



const Header=({handleDark})=>{
    return( <div className="Header">
        <div class="row">
        <div className="together">
        <div class="col-xs-2"><a href="#"><img class="img-responsive thick-green-border" src="https://static.vecteezy.com/system/resources/previews/002/194/873/non_2x/butterfly-logo-design-templates-free-vector.jpg" alt="Notefly-Logo" ></img></a></div>
        
        <div class="col-xs-6"><h1 className="Head">Notefly</h1></div>

        <div class="col-xs-2"><button class="btn btn-block btn-primary" onClick={()=>handleDark((previous)=>!previous)} >Night</button></div>
        </div>
        </div>

    </div>
    );
}

export default Header;