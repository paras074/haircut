import Image from "next/image"
import styles from "../Styles/Footer.module.css"
export default function Footer() {
    return (
      <div className="container"> 
      <div className={styles.row_container_img_text}>
  <div className={`${styles.box_container_img_text} ${styles.First_child}`}>
    <div className={styles.m_all}>
    <img src="/logo.png" className={styles.Illustration_img} alt="Illustration" />
   </div>
   </div>
  <div className={`${styles.box_container_img_text} ${styles.Hidden_child}`}>
  
   <div className={styles.m_all}>
      
        <h5 className={styles.text_footer}>
          <a className={styles.footer_links} href="/Hairtoken">
          ABOUT HAIR
          </a>  
          </h5>
        <h5 className={styles.text_footer}>
          <a class={styles.footer_links} href="/Getinvolved">
          GET INVOLVED
          </a>  
          </h5>
        <h5 className={styles.text_footer}>
          <a class={styles.footer_links} href="/discord.gg/sNAm9QbfAz">
            JOIN OUR DISCORD
          </a>  
          </h5>
    </div>
  </div>
  <div className={`${styles.box_container_img_text} ${styles.Third_child}`}> 
  <div className={styles.m_all}>
          <h5 className={styles.text_footer}>
          <a className={styles.footer_links} href="/Hairtoken">
          LAUNCH THE APP
          </a>  
          </h5>
        <h5 className={styles.text_footer}>
          <a class={styles.footer_links} href="/Getinvolved">
          SIGN UP
          </a>  
          </h5>
        <h5 className={styles.text_footer}>
          <a class={styles.footer_links} href="/discord.gg/sNAm9QbfAz">
          LOG IN
          </a>  
          </h5>
   </div>
   </div>
  <div className={`${styles.box_container_img_text} ${styles.Fourth_child}`}>
  <div className={styles.m_all}>


  <h5 className={styles.text_footer}>
          <a className={styles.footer_links} href="/Hairtoken">
          TERMS & CONDITION
          </a>  
          </h5>
        <h5 className={styles.text_footer}>
          <a class={styles.footer_links} href="/Getinvolved">
          PRIVACY POLICY
          </a>  
          </h5>
        <h5 className={styles.text_footer}>
          <a class={styles.footer_links} href="https://discord.com/invite/sNAm9QbfAz">
          COOKIE PREFERENCE
          </a>  
          </h5>
              
   </div>
  </div>

  <div className={`${styles.box_container_img_text} ${styles.Last_child}`}>
  <div className={styles.m_all}>
  <div className={styles.Icons_social}>
              <a className={styles.navbar_brand} href="/">
             <Image  width="20" className={styles.img_fluid} height="20" src="/Icon (2).png" alt="Logo1"></Image>
            </a>
              <a className={styles.navbar_brand} href="/">
             <Image  width="20" className={styles.img_fluid} height="20" src="/Insta.png" alt="Logo1"></Image>
            </a>
              <a className={styles.navbar_brand} href="/">
             <Image  width="20" className={styles.img_fluid} height="20" src="/logo 2.png" alt="Logo1"></Image>
            </a>
              <a className={styles.navbar_brand} href="/">
             <Image  width="20" className={styles.img_fluid} height="20" src="/Group 930.png" alt="Logo1"></Image>
            </a>
              <a className={styles.navbar_brand} href="/">
             <Image  width="20" className={styles.img_fluid} height="20" src="/Vector (2).png" alt="Logo1"></Image>
            </a>
              <a className={styles.navbar_brand} href="/">
             <Image  width="20" className={styles.img_fluid} height="20" src="/Vector.png" alt="Logo1"></Image>
            </a>
            </div>
   </div>
  </div>


</div>
      </div>
    );
  }
  