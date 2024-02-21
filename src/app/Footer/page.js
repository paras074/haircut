import Image from "next/image"
export default function Footer() {
    return (
      <> 
      
         <div className="footer_section  mx-auto border-top py-4 border-dark mb-5">
          <div className="container">
           <div className="row footer-row">
             <div className="footer_img col-md-2">
             <a className="navbar-brand text-white" href="/">
             <Image  width="200" height="80" className="footer-img" src="/logo.png" alt="Logo1"></Image>
            </a>
               <p></p>
             </div>
             <div className="Contact_section col-md-2 text-black">
               <h5 className="text_footer">ABOUT HAIR</h5>
               <h5 className="text_footer">GET ENVOLVED</h5>
               <h5 className="text_footer">OIN OUR DISCORD</h5>
              </div>
             <div className="Signup_section col-md-2 text-black">
               <h5 className="text_footer">LAUNCH THE APP</h5>
               <h5 className="text_footer">SIGN UP</h5>
               <h5 className="text_footer">LOG IN</h5>
              </div>
             <div className="Condition_section col-md-2 text-black">
               <h5 className="text_footer">TERMS & CONDITION</h5>
               <h5 className="text_footer">PRIVACY POLICY</h5>
               <h5 className="text_footer">COOKIE PREFERENCE</h5>
              </div>
              <div className="Icons_Section col-md-3">
                <div className="Icons_social">
              <a className="navbar-brand text-white me-2" href="/">
             <Image  width="20" height="20" src="/Icon (2).png" alt="Logo1"></Image>
            </a>
              <a className="navbar-brand text-white me-2" href="/">
             <Image  width="20" height="20" src="/Insta.png" alt="Logo1"></Image>
            </a>
              <a className="navbar-brand text-white me-2 " href="/">
             <Image  width="20" height="20" src="/logo 2.png" alt="Logo1"></Image>
            </a>
              <a className="navbar-brand text-white me-3" href="/">
             <Image  width="20" height="20" src="/Group 930.png" alt="Logo1"></Image>
            </a>
              <a className="navbar-brand text-white me-2" href="/">
             <Image  width="20" height="20" src="/Vector (2).png" alt="Logo1"></Image>
            </a>
              <a className="navbar-brand text-white " href="/">
             <Image  width="20" height="20" src="/Vector.png" alt="Logo1"></Image>
            </a>
            </div>
            </div>
          </div>
          </div>
         </div>
   
      </>
    );
  }
  