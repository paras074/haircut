import Image from "next/image"
import Link from "next/link"
export default function Header() {
  return (
    <>
    <div className="header_section">
    <div className="container">
      <nav>
        <input type="checkbox" id="nav-toggle"/>
        <div className="logo"><a className="image_logo"  href="/">
            <Image className="logo-img" width="233" height="63" src="/logo.png" alt="Logo1" />
          </a></div>
       <ul className="links">
           <li><Link href="/Hairtoken">HAIR TOKEN</Link></li>
           <li><Link href="/Getinvolved">GET INVOLVED</Link></li>
           <li><Link href="/#"><button className="Nav_btn">LAUNCH THE APP<img src="/Icon.png" classNames="header-btn-img" alt="image" />
                </button></Link></li>
              </ul>
       <label for="nav-toggle" className="icon-burger">
           <div className="line"></div>
           <div className="line"></div>
           <div className="line"></div>
       </label>
      </nav>
      </div> 
      </div>
    </>
  );
 }







