import Image from "next/image"
 import styles from "../Styles/Pages.module.css"

   export default function Study(){
      return(
          <>
          <div className="Study_section container">
            <div className={styles.container}>
              <div className={styles.row}>
                <div className={styles.col_md_7}>
                  <div className={styles.text_material}>
                 
                  <h3 className={styles.text_start}>
                  Dutasteride Delivery Vehicle Study
                  </h3>
                  <p className={styles.fw_bold}>
                  Principle Investigator: <span className={styles.fw_lighter}>Tais Gratieri</span>
                  </p>
                  <p className={styles.fw_bold}>
                  Partners: <span className={styles.fw_lighter}>University of Brasilia</span>
                  </p>
                  <div className={styles.img_responsive}>
                  <a className={styles.text_field } href="/">
                    <Image className={styles.img_fluid} width="500" height="500" src="/Studycard3.png" alt="Logo1" />
                  </a>
                  </div>
                  <p className={styles.fw_bold}>
                About: <span className={styles.fw_lighter}>Dutasteride is the most effective hair loss drug on the market today - over 80% of patients experience noticeable regrowth. However, dutasteride also carries with it the risk of extreme side effects, such as erectile dysfunction, infertility, gynecomastia, kidney dysfunction, liver damage, anxiety, and depression. In partnership with Dr. Tais Gratieri, one of the world’s most reputable cutaneous delivery vehicle researchers, HairDAO is developing at least three proprietary novel dutasteride delivery vehicles to selectively target human hair follicles, achieving the desired localized effect without systemic side effects.
                <br/><br/>

            HairDAO and University of Brasilia’s propietary vehicles will include a liposomal formulation, a nanoemulsion, and a PLGA or mesoporous silica nanoparticle. In the study, HairDAO’s proprietary vehicles will compete against third parties’ vehicles, such as Cage Bio’s ionic liquid,  Zylo Therapeutic’s Z-pod, and Xyon Health’s lipid nanoparticle formulation. The winner of the competition between HairDAO’s proprietary and third-party vehicles will become HairDAO’s official topical dutasteride solution.</span>
                  </p>
                  
                  <h3 className={styles.fw_bold}>
                Timeline:  <span className={styles.fw_lighter}>6-24 Months</span></h3>
                <h3 className={styles.fw_bold}>
                  3 Months: <span className={styles.fw_lighter}>Ongoing</span>
                  </h3>
                  <div className={styles.fw_lighter}>
                <ul className="">
                  <li>
                    <p>Complete literature review of all previously tested topical Dutasteride solutions.</p>
                    </li>
                    <li><p>Source all materials and begin initial mixing and preliminary testing.
                    </p>
                    </li>
                  </ul> 
                    </div>
                <p className={styles.fw_bold} >
                  6 Months: <span className={styles.fw_lighter}> Ongoing</span>
                  </p>
                  <div className={styles.fw_lighter}>
                <ul>
                  <li><p>Test initial proprietary and third party vehicles’ in porcine ear skin, evaluating penetration depth through high-performance liquid chromatography (HPLC) and skin permeation through stamp excision or similar methods.</p>
                    </li>
                    <li><p>Initial data report generated, for HairDAO community members and relevant third parties with confidential disclosure agreements (CDAs) in place.</p>
                    </li>
                    </ul>
                    
                <h3 className="text-start mt-4 text-black fw-bold" >
                  9 Months: <span className={styles.fw_lighter}> Ongoing</span>
                  </h3>
                  <div className="mt-4">
                <ul>
                  <li>
                <p>Test additional proprietary and third-party vehicles based on initial read-outs and learnings, with parameters adjusted at Dr. Gratieri’s and HairDAO’s joint discretion. .</p>
                </li>
                  
                  </ul>
                    </div>
                <h3 className="text-start mt-4 text-black fw-bold" >
                  12-24 Months: <span className={styles.fw_lighter}> Ongoing</span>
                  </h3>
                  <div className="mt-4">
                <ul>
                  <li>
                <p>Continue vehicle iteration and competition until have achieved a result deemed difficult to defeat at Dr. Gratieri’s and HairDAO’s joint discretion. 
                </p>
                </li>
                  
                  </ul>
                    </div>
                    </div>
                  
                    </div>
                </div>
                <div className={`${styles.col_md_4} ${styles.imgcol}`}>
              
                  <a className={styles.desktop_img } href="/">
                    <Image className={styles.img_fluid} width="500" height="500" src="/Studycard3.png" alt="Logo1" />
                  </a>
                  <div className={styles.img_text}>
                <h3 className={styles.text_center} >
                    YAP-1 IP
                  </h3>
                  <div className={styles.text_left}>
                  <p className={styles.fw_bold}>Funding:
                 <span className={styles.fw_lighter}>$275,904.00</span>
                  </p>
                  <p className={styles.fw_bold}>Initiated:
                 <span className={styles.fw_lighter}>1/1/24</span>
                  </p>
                  <p className={styles.fw_bold}>Ownership:
                 <span className={styles.fw_lighter}>80%</span>
                  </p>
                  <p className={styles.fw_bold}>Patent Status
                 <span className={styles.fw_lighter}> Not Filed</span>
                 
                  </p>
                    </div>
                  </div>
                </div>
            </div>
            </div>
            </div>
            
         </>
      )
  }




