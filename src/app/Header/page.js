import Image from "next/image"
import Link from "next/link"



export default  function Header(){

    return(
      <>
        <div className="container-xl">
        <nav className="navbar navbar-expand-lg">
        
        <a className="navbar-brand text-white " href="/">
        <Image className="logo_img" width="233" height="63" src="/logo.png" alt="Logo1"  ></Image>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end cstm-nav" id="navbarNav">
          <ul className="navbar-nav">
           
            <li className="nav-item  me-3 ">
              <Link  href='/Hairtoken' className="nav-links">HAIR TOKEN</Link>
            </li>
            <li className="nav-item me-3">
              <Link  href="/Getinvolved" className="nav-links">GET INVOLVED</Link>
            </li>
            <li className="nav-item ">
            <button className="btn btn-square last-btn nav-links ">LAUNCH THE APP&nbsp;&nbsp;
            <img src="/Icon.png" className="img-fluid icon-img mb-1" alt="image" />
           </button>
            </li>  
          </ul>
        </div>
        </nav>
        </div>
        </>
    );
}






