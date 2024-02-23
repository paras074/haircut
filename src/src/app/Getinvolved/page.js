import Image from "next/image";
import Header from "../Header/page";
import styles from "../Styles/Getinvoled.module.css"
export default function HairToken() {

  var cardData = [
    { "img": 'Videow_1.png', "title": 'HP Leaderboard', "discription": 'Contributors earn HP in exchange for work or data. Our leaderboard is updated in real-time on the HairDAO App.', "FUNDED": 'LAUNCH THE APP',"imgarrow" :'/rightvector.png'},
    { "img": 'Videow_2.png', "title": 'Daily Summaries', "discription": 'Stay up to date in with ongoing DAO activities and research updates in the Summaries channel of our Discord server.', "FUNDED": 'STAY UP TO DATE' , "imgarrow" :'/rightvector.png' },
    { "img": 'Videow_3.png', "title": 'Hair Cuts', "discription": 'Impactful research, pertinent discussions, and HAIR token distributions are documented quarterly in Hair Cuts.', "FUNDED": 'READ ALL EDITIONS' ,"imgarrow" :'rightvector.png' },
    
  ];
  var Daodata = [
    {"heading": 'Operational Efficiency' , "para": 'Traditional companies pay hundreds of thousands of dollars to incorporate their global corporation and incentivize their workforce with their native equity. A DAO can incorporate globally and issue its native token to its workforce at almost zero cost. Public blockchain technology enables us to scale and incentivize the HairForce much faster than the legacy system allows.'},

    {"heading": 'Realtime Transparency' , "para": 'Investors in a traditional company need to wait until a poorly-incentivized quarterly report is released, or hire a costly auditor, to verify both heir shares and the assets held by the company. Our members are able to verify their HAIR holdings and the DAO’s trail of funds in real-time and at zero cost. The entire hair loss community can always verify that the DAO is acting in their best interest.'},
    {"heading": 'Community Ownership' , "para": 'Traditional pharmaceutical companies are owned by outsiders, whose goal is to charge suffering patients as much as the healthcare system allows. Complete community ownership via the HAIR token ensures that hair loss patients directly determine which solutions are funded and how the DAO governs those assets, including the prices we charge our customers.'},
    
    
  ]

  return (
    <div className="container">
    <div className={`${styles.row_container_hero} ${styles.main_hero_banner}`}>
    <div className={styles.box_container_hero}>
    <h1 className={styles.First_heading_top}>Share your experience to help us beat hair loss</h1>
        <p className={styles.First_paragraph}>Help us advance hair loss research by telling us about your treatment experiences through the HairDAO App. Anonymously upload data, join community forum discussions, and get rewarded for your participation in our governance token, HAIR.</p>
        <div className={`${styles.d_flex} ${styles.gap_2}`}>
          <a href="#" className={`${styles.btn} ${styles.btn_light_cstm}`}>LAUNCH THE APP
         <img src="/white-icon.png" className={styles.white_icon_img} alt="icon" />
          </a>
        </div>
    </div>
    <div className={styles.box_container_hero}>
      <div className={styles.img_section}>
      <img src="/image_127.png" className={styles.side_img} alt="icon" />
      </div>
    </div>
  </div>

  <div className={styles.row_container}>
  <h1 className={styles.Main_heading}>Track our progress</h1>
  </div>

  <div className={styles.row_container_card}>
<div className={styles.card_container}>
{cardData.map((cardData, index) => (
        <div key={index} className={styles.card_main_1}>
          <a className={styles.a_sec} href="#">
            <div className={styles.card_main_1_image}>
              <img src={cardData.img} alt="card_main_1" />
            </div>
            <div className={styles.description}>
              <h2>{cardData.title}</h2>
              <p>{cardData.discription}</p>
              <p className={styles.card_link2}>{cardData.FUNDED}
              <img src={cardData.imgarrow} className={styles.icon_img_better} alt="true" /></p>
            </div>
          </a>
        </div>
      ))}
</div>
</div>

<div className={styles.row_container_after_img_text}>
  <div className={styles.box_container_after_img_text}>
    <div className={styles.table_str_all}>
      <div className={styles.empty}>
        <div className={styles.emrt}>
    <h2 className={styles.Last_heading}>Why a DAO?</h2>
    <p className={styles.emrt_p}>Hair loss is a global problem. Utilizing the DAO structure enables us to frictionlessly incentivize borderless participation from the most talented and dedicated contributors around the world. DAO tokenomics enable capital formation through HAIR, our native governance token. </p>
    </div>
    <div className={styles.globe_img}>
    <img src="/image_17.png" className={styles.globe_img_better} alt="true" />
    </div>
    </div>
   </div>

   </div>
  <div className={styles.box_container_after_img_text}>
  <div className={styles.table_str_all}>
  {Daodata.map((Daodata, index) => (
        <div key={index}  className={styles.ert}>
          <h2 className={styles.op_heading}>{Daodata.heading}</h2>
          <p>{Daodata.para}</p>
         </div>
      ))}
 </div>
  </div>
</div>



<div className={styles.row_container_btn}>
  <div className={`${styles.box_container_better} ${styles.First_child}`}>
  <h1 className={styles.First_heading}>Got skills?</h1>
      <p className={styles.First_paragraph}>Our uniquely talented and diverse community of contributors sets us apart. The HairDAO community includes researchers, doctors, engineers, content creators, designers, marketers, funders and more - all of whom contribute their expertise to help us solve hair loss. Contributors are categorised by 5 working groups, each dedicated to an essential function in the DAO:</p>
      
      <div className={styles.main_btn}>
      <div className={`${styles.b_flex} ${styles.gap_2}`}>
        <a href="#" className={`${styles.btn} ${styles.btn_dark_better1}`}> Research & Development</a>
        <a href="#" className={`${styles.btn} ${styles.btn_dark_better2}`}>Business Development</a>
        <a href="#" className={`${styles.btn} ${styles.btn_dark_better3}`}> Content</a>
        <a href="#" className={`${styles.btn} ${styles.btn_dark_better4}`}> Software Development</a>
        <a href="#" className={`${styles.btn} ${styles.btn_dark_better5}`}> Legal & Regulatory</a>
      </div>

      </div>
      <p className={styles.First_paragraph}>To join a working group and become a HairDAO contributor, head over to our Discord, introduce yourself and tell us how your skills can help us advance hair loss research.</p>
      <div className={`${styles.d_flex} ${styles.gap_2}`}>
        <a href="https://discord.com/invite/sNAm9QbfAz" className={`${styles.btn} ${styles.btn_dark_better}`}>
        <img src="/discord.png" className={styles.icon_img_discord} alt="true" />
        JOIN A WORKING GROUP
        </a>
      </div>
  </div>

  <div className={`${styles.box_container_better} ${styles.Second_child}`}>
    <div className={styles.img_section}>
    <img src="image_67.png" className={styles.img_fluid_think} alt="left_side_img" /> 
    </div>
  </div>

</div>



<div className={styles.row_container_better}>
<div className={styles.box_container_better}>
    <div className={styles.img_section}>
    <img src="image_13.png" className={styles.img_fluid_think} alt="left-side-img" /> 
    </div>
  </div>
  <div className={styles.box_container_better}>
  <h1 className={styles.First_heading}>Tell us about your research</h1>
      <p className={styles.First_paragraph}>A commitment to good science underpins everything we do. If you are a PI, researcher, doctor, or technician working on a groundbreaking project that could use our support, please get in touch with the community on Discord, or send us an email to say hi. We’d love to hear from you.</p>
      <div className={styles.c_flex}>
        <a href="https://discord.com/invite/sNAm9QbfAz" className={`${styles.btn} ${styles.btn_dark_better}`}>
        <img src="/discord.png" className={styles.icon_img_discord} alt="true" />
          CHAT ON DISCORD
        </a>
        <a href="mailto:privacy@hairdao.xyz" className={`${styles.btn} ${styles.btn_dark_email}`}>
          SEND US AN EMAIL
        </a>
      </div>
  </div>
</div>

<div className="container">
<div className={`${styles.row} ${styles.last_section}`}>
  <div className={`${styles.launch_app} ${styles.text_center}`}>
   <div className={styles.cta_img_section}>
  <img src="CTA_Image_3.png" className={styles.img_fluid} alt="Cta_Image" />
  </div>
  <div className={styles.last_sub}>
  <h1 className={styles.Last_heading}>Join us & make a difference</h1>
  <p className={styles.Last_paragraph}>Contribute to a an open-source global community working together to solve hair loss, and earn HAIR token as a reward.</p>
  <div className={styles.btn_app}>
    <a className={`${styles.btn} ${styles.btn_dark_launch_app}`}>LAUNCH THE APP <img src="white-icon.png" className={styles.white_icon_img} alt="true" />
    </a>
    </div>
    </div>
  </div>
  </div>
  </div>
  <div className={`${styles.row_container_after_img_text} ${styles.mat_bt}`}>
  <div className={styles.box_container_after_img_text}>
    <div className={styles.after_contain}>
    <div className={styles.distribution_all}>
    <h2>HAIR distribution</h2>
    <p className={styles.note_p}>* Unallocated HAIR is reserved for community members, future funders, or will burned. All HAIR supply is governed by HAIR hodlers. </p>
   </div>
   </div>
   </div>
</div>

  </div>
  );
}
