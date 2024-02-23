




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
                  Twist-1 and 2 Inhibition Study
                  </h3>
                  <p className={styles.fw_bold}>
                  Principle Investigator: <span className={styles.fw_lighter}>Claire Higgins</span>
                  </p>
                  <p className={styles.fw_bold}>
                  Partners: <span className={styles.fw_lighter}>Imperial College of London</span>
                  </p>
                  <div className={styles.img_responsive}>
                  <a className={styles.text_field } href="/">
                    <Image className={styles.img_fluid} width="500" height="500" src="/Studypage2img.png" alt="Logo1" />
                  </a>
                  </div>
                  <p className={styles.fw_bold}>
                About: <span className={styles.fw_lighter}>Twist-1 downregulation manifests as HairDAO’s most sought after protein target, due to extensive literature review of all existing hair and biology research. A BLHL transcription factor, Twist-1 interacts with a plethora of relevant proteins through its mono, homo, and heterodimers. However, the flexible, often moving nature of Twist-1’s structure renders it very difficult to inhibit directly. The cancer field has tried for several years, due to Twist-1’s prominent role in cancer development. <br/> <br/>
             
             In turn, HairDAO, in collaboration with the Imperial College of London, has selected 11 Twist-1 inhibition strategies, consisting of both proprietary small molecules and siRNAs. Under Dr. Higgins’ direction, inhibitors will first be tested on dermal papilla cells in vitro, accompanied with morphological and transcriptome read-outs to optimize dosing. After dosages are confirmed, the molecules will be tested on occipital human hair follicles in vitro, again accompanied with morphological and transcriptome read-outs to gauge efficacy. The most effective Twist-1 inhibitors will be subject to further testing and optimization, after which a path to market will be decided.</span>
                  </p>
                  
                  <h3 className={styles.fw_bold}>
                Timeline:12 Months</h3>
                <h3 className={styles.fw_bold}>
                6 Months: <span className={styles.fw_lighter}> Ongoing</span>
                  </h3>
                  <div className={styles.fw_lighter}>
                <ul className="">
                  <li>
                    <p>Isolate patient matched frontal and occipital dermal papilla cells. </p>
                    </li>
                    <li><p>Culture frontal and occipital dermal papilla cells with Twist inhibitors for 24/48hrs (timeframe tbc).  Isolate RNA, convert to cDNA, and perform PCR for Twist 1 and Twist 2.</p>
                    </li>
                    
                  </ul> 
                    </div>
                <p className={styles.fw_bold} >
                  9 Months: <span className={styles.fw_lighter}> Ongoing</span>
                  </p>
                  <div className={styles.fw_lighter}>
                <ul>
                  <li><p>Perform Philpott assay with 5 occipital follicles, 5 occipital follicles with twist inhibitors, 5 occipital follicles with testosterone (DHT mimic), and 5 occipital follicles with testosterone plus 10 different twist inhibitors (1 biological replicate per inhibitor).  </p>
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
                <p>Perform Philpott model in matched frontal and occipital follicles (we can get 15 follicles per site/per patient) with 3 Twist inhibitors (3 biological replicates per inhibitor).</p>
                </li>
                  <li>
                <p>Culture follicles for 3 days and collect samples to perform a microarray. </p>
                </li>
                  <li>
                <p>Culture follicles for 10 days to measure growth rate/catagen entry.
                 </p>
                </li>
                  
                  </ul>
                    </div>
                    </div>
                  
                    </div>
                </div>
                <div className={`${styles.col_md_4} ${styles.imgcol}`}>
              
                  <a className={styles.desktop_img } href="/">
                    <Image className={styles.img_fluid} width="500" height="500" src="/Studypage2img.png" alt="Logo1" />
                  </a>
                  <div className={styles.img_text}>
                <h3 className={styles.text_center} >
                Twist-1 and 2 IP
                  </h3>
                  <div className={styles.text_left}>
                  <p className={styles.fw_bold}>Funding:
                 <span className={styles.fw_lighter}> $205,204.00</span>
                  </p>
                  <p className={styles.fw_bold}>Initiated:
                 <span className={styles.fw_lighter}>Finalizing</span>
                  </p>
                  <p className={styles.fw_bold}>Ownership:
                 <span className={styles.fw_lighter}>100%</span>
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