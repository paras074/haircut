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
                  Thyrotropin-Releasing Hormone Study
                  </h3>
                  <p className={styles.fw_bold}>
                  Principle Investigator: <span className={styles.fw_lighter}>Ralf Paus</span>
                  </p>
                  <p className={styles.fw_bold}>
                  Partners: <span className={styles.fw_lighter}>Cutaneon & University of Miami</span>
                  </p>
                  <div className={styles.img_responsive}>
                  <a className={styles.text_field } href="/">
                    <Image className={styles.img_fluid} width="500" height="500" src="/Studycard5.png" alt="Logo1" />
                  </a>
                  </div>
                  <p className={styles.fw_bold}>
                About: <span className={styles.fw_lighter}> In prior research using in vitro isolated hair follicles, Professor Ralf Paus has found that topically applied TRH can prolong the anagen growth phase, upregulate melanin synthesis (reverse hair graying), and improve mitochondrial functioning. Additionally, Ralf discovered that TRH is listed in CosIng as a cosmetic agent, which could dramatically simplify our regulatory path towards treating patients.     <br/> <br/>
             
                While TRH is also part of the hypothalamic-pituitary-thyroid axis, along with Thyroid Hormones T3 and T4 (patent filed), it acts on the hair follicle through a different mechanism of action, with TRH-receptors found only on the inner root sheath, one of the only hair cell groups without thyroid receptors.  </span>
                  </p>
                  
                  <h3 className={styles.fw_bold}>
                Timeline:12 Months</h3>
                <h3 className={styles.fw_bold}>
                6 Months: <span className={styles.fw_lighter}>Completed</span>
                  </h3>
                  <div className={styles.fw_lighter}>
                <ul className="">
                  <li>
                    <p>Identify a basic HF-targeting vehicle that delivers a sufficient amount of TRH to human anagen scalp HFs and only contains FDA-approved and/or cosmetically approved ingredients </p>
                    </li>
                    <li><p>Provide first pilot data using the human scalp skin organ culture model, evaluating the effects of TRH on hair growth using 4 different concentrations.</p>
                    </li>
                    
                  </ul> 
                    </div>
                <p className={styles.fw_bold} >
                  9 Months: <span className={styles.fw_lighter}> Ongoing</span>
                  </p>
                  <div className={styles.fw_lighter}>
                <ul>
                  <li><p>Clarify if/and up to which dose that TRH can be used as a cosmetic agent or if it must be developed as a medicinal product. </p>
                    </li>
                    <li><p>Collect 2 follicles at 3 days to perform immunohistochemistry – Ki67, Twist1, Twist 2.</p>
                    </li>
                    <li><p>Culture 3 follicles for 10 days and measure growth rate/catagen entry.</p>
                    </li>
                    </ul>
                    
                <h3 className="text-start mt-4 text-black fw-bold" >
                  12 Months: <span className={styles.fw_lighter}> Ongoing</span>
                  </h3>
                  <div className="mt-4">
                <ul>
                  <li>
                <p>Refine the composition of the HF-targeting vehicle so as to enhance its patentability and efficacy. </p>
                </li>
                  <li>
                <p>Elucidate the minimally effective topical application does of TRH (once daily) using the human scalp skin organ culture model.   </p>
                </li>
                  
                  
                  </ul>
                    </div>
                    </div>
                  
                    </div>
                </div>
                <div className={`${styles.col_md_4} ${styles.imgcol}`}>
              
                  <a className={styles.desktop_img } href="/">
                    <Image className={styles.img_fluid} width="500" height="500" src="/Studycard5.png" alt="Logo1" />
                  </a>
                  <div className={styles.img_text}>
                <h3 className={styles.text_center} >
                Twist-1 and 2 IP
                  </h3>
                  <div className={styles.text_left}>
                  <p className={styles.fw_bold}>Funding:
                 <span className={styles.fw_lighter}> $297,000</span>
                  </p>
                  <p className={styles.fw_bold}>Initiated:
                 <span className={styles.fw_lighter}> 1/1/24</span>
                  </p>
                  <p className={styles.fw_bold}>Ownership:
                 <span className={styles.fw_lighter}>95%</span>
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