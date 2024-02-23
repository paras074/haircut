import Image from "next/image";
import Header from "../Header/page";
import styles from "../Styles/Hairtoken.module.css"


var cardData = [
  { "img": 'Video_1.png', "title": 'Launch the HairDAO app', "discription": 'The HairDAO app is where members upload treatment data and access the findings that others have shared in exchange for HAIR. Our members come from all countries and backgrounds.', "FUNDED": 'SIGN UP',"imgarrow" :'rightvector.png' },
  { "img": 'Video_2.png', "title": 'Upload your treatment data', "discription": 'Share your treatment progress privately or publicly, get feedback from our community, explore promising treatments and pertinent discussions, and gain access to proprietary hair loss research data from our researchers', "FUNDED": 'UPLOAD DATA',"imgarrow" :'rightvector.png' },
  { "img": 'Video_3.png', "title": 'Earn HAIR as reward', "discription": 'Participation in the HairDAO App accumulates HP. Every quarter, HP is converted into HAIR, and earnings are announced in Hair Cuts. You can claim your HAIR in the HairDAO app, and use your HAIR to govern the DAO.', "FUNDED": 'EARN HAIR',"imgarrow" :'rightvector.png' },
  
];


export default function HairToken() {
  return (
    <div className="container">
    <div className={`${styles.row_container_hero} ${styles.main_hero_banner}`}>
    <div className={styles.box_container_hero}>
    <h1 className={styles.First_heading_top}>Grow your HAIR</h1>
        <p className={styles.First_paragraph}>The HAIR token allows you to vote on the funding and governance of hair loss research and any resulting IP. Holding HAIR gives you provenance of the technologies that we develop and patent. Earn HAIR by contributing work or data, or safely buy HAIR using the link below.</p>
        <div className={`${styles.d_flex} ${styles.gap_2}`}>
          <a href="#" className={`${styles.btn} ${styles.btn_dark_cstm}`}>Earn Hair</a>
          <a href="#" className={`${styles.btn} ${styles.btn_light_cstm}`}>Buy Hair
         <img src="/white-icon.png" className={styles.white_icon_img} alt="icon" />
          </a>
        </div>
    </div>
    <div className={styles.box_container_hero}>
      <div className={styles.img_section}>
      <img src="/side_img_1.png" className={styles.side_img} alt="icon" />
      </div>
    </div>
  </div>

  <div className={styles.row_container}>
  <h1 className={styles.Main_heading}>Three steps to earn HAIR</h1>
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

<div className={styles.row_container_hair}>
  <h1 className={styles.Main_heading}>Use your HAIR</h1>
  </div>


  <div className={styles.row_container_img_text}>
  <div className={styles.box_container_img_text}>
    <div className={styles.m_all}>
    <img src="Image_1.png" className={styles.Illustration_img} alt="Illustration" />
    <h2>Govern to Cure</h2>
    <p>HAIR holders have governance rights over our treasury, and are asked to decide what research we fund, and how our IP portfolio is managed.</p>
    <p className={styles.card_link2}>GOVERNANCE FORUM
        <img src="/right-vector.png" className={styles.icon_img_better} alt="true" />
        </p>
   </div>
   </div>
  <div className={styles.box_container_img_text}>
  <div className={styles.m_all}>
   <img src="Image_2.png" className={styles.Illustration_img} alt="Illustration" />
    <h2>Stake for Alpha</h2>
    <p>HAIR holders can use their tokens to receive confidential information, including early-access to our research data. Alpha enables HAIR holders to earn more HAIR.</p>
    <p className={styles.card_link2}>STAKE YOUR HAIR
        <img src="/right-vector.png" className={styles.icon_img_better} alt="true" />
        </p>
   </div>
  </div>
  <div className={`${styles.box_container_img_text} ${styles.last_child}`}>
   <div className={styles.m_all}>
  <img src="Image_3.png" className={styles.Illustration_img} alt="Illustration" />
    <h2>Purchase with Discounts</h2>
    <p>HAIR holders receive a 25% discount on all HairDAO products, including our patented treatments and trademarked software.</p>
    <p className={styles.card_link3}>STORE COMING SOON
        <img src="/right-vector.png" className={styles.icon_img_better} alt="true" />
        </p>
   </div>
   </div>
</div>

<div className={styles.row_container_after_img_text}>
  <div className={styles.box_container_after_img_text}>
    <div className={styles.st_all}>
    <h2>1,533,338</h2>
    <p>Total HAIR supply</p>
   </div>
   </div>
  <div className={styles.box_container_after_img_text}>
  <div className={styles.st_all}>
    <h2>658,448</h2>
    <p>HAIR in circulation</p>
   </div>
  </div>
</div>

<div className={styles.row_container_after_img_text}>
  <div className={styles.box_container_after_img_text}>
    <div className={styles.st_all}>
    <h2>358</h2>
    <p>HAIR Holders</p>
   </div>
   </div>
  <div className={styles.box_container_after_img_text}>
  <div className={styles.st_all}>
    <h2>53,530</h2>
    <p>HAIR issued to community</p>
   </div>
  </div>
</div>

<div className={styles.row_container_after_img_text}>
  <div className={styles.box_container_after_img_text}>
    <div className={styles.after_contain}>
    <div className={styles.distribution_all}>
    <h2>HAIR distribution</h2>
    <h2>1,533,338 HAIR<br/><p>total supply</p></h2>
   </div>
   <img src="/Group_1.png" className={styles.group_img} alt="icon" />
   <table className={styles.strip_table}>
  <tbody>
    <tr>
      <td>
        <div className={styles.strip_img_class}>
      <img src="/Ellipse_62.png" className={styles.strip_img} alt="icon" />
        <p>HAIR Core (Unlocks 2026)</p>
        </div>
      </td>
      <td>20.5%</td>
    </tr>
    <tr>
    <td>
    <div className={styles.strip_img_class}>
      <img src="/Ellipse_63.png" className={styles.strip_img} alt="icon" />
        <p>Fair Launch Auction</p>
</div>
        </td>
      <td>10.7%</td>
    </tr>
    <tr>
    <td>
    <div className={styles.strip_img_class}>
      <img src="/Ellipse_64.png" className={styles.strip_img} alt="icon" />
        <p>OTC Purchasers</p>
</div>
        </td>
      <td>20.1%</td>
    </tr>
    <tr>
    <td>
    <div className={styles.strip_img_class}>
      <img src="/Ellipse_65.png" className={styles.strip_img} alt="icon" />
        <p>Hair Cuts</p>
</div>
        </td>
      <td>3.0%</td>
    </tr>
    <tr>
    <td>
    <div className={styles.strip_img_class}>
      <img src="/Ellipse_66.png" className={styles.strip_img} alt="icon" />
        <p>Open Market</p>
        </div>
        </td>
      <td>4.6%</td>
    </tr>
    <tr>
    <td>
    <div className={styles.strip_img_class}>
      <img src="/Ellipse_67.png" className={styles.strip_img} alt="icon" />
        <p>Strategic Partners</p>
        </div>
        </td>
      <td>1.0%</td>
    </tr>
    <tr>
    <td>
    <div className={styles.strip_img_class}>
      <img src="/Ellipse_68.png" className={styles.strip_img} alt="icon" />
        <p>Unallocated</p>
        </div>
        </td>
      <td>40.1%</td>
    </tr>
  </tbody>
  </table>
  <p className={styles.note_p}>* Unallocated HAIR is reserved for community members, future funders, or will burned. All HAIR supply is governed by HAIR hodlers. </p>
   </div>
   </div>
</div>

<div className={styles.row_container_after_img_text}>
  <div className={styles.box_container_after_img_text}>
    <div className={styles.table_str_all}>
      <div className={styles.empty}>
        <div className={styles.emrt}>
    <h2>Treasury</h2>
    <p>The value of our patents, trademarks, and infrastructure is not included in the treasury calculations Below.</p>
    </div>
    <img src="/Pie_Chart.png" className={styles.se_img} alt="icon" />
    </div>
    <h2>$27,840,255.74</h2>
    <table className={styles.strip_table}>
  <tbody>
    <tr>
      <td>
        <div className={styles.strip_txt_class}>
        <p>HAIR</p>
        </div>
      </td>
      <td>83.1%</td>
    </tr>
    <tr>
    <td>
    <div className={styles.strip_txt_class}>
        <p>ETH</p>
</div>
        </td>
      <td>10.8%</td>
    </tr>
    <tr>
    <td>
    <div className={styles.strip_txt_class}>
        <p>Uniswap Liquidity Pool</p>
</div>
        </td>
      <td>2.6%</td>
    </tr>

    <tr>
    <td>
    <div className={styles.strip_txt_class}>
        <p>USDC</p>
</div>
        </td>
      <td>2.6%</td>
    </tr>
  </tbody>
  </table>
   </div>

   </div>
  <div className={styles.box_container_after_img_text}>
  <div className={styles.table_str_all}>
      <div className={styles.empty}>
        <div className={styles.emrt}>
    <h2>Treasury</h2>
    </div>
    <h2>$27,840,255.74</h2>
    </div>
    <img src="/Frame_32.png" className={styles.smart_img} alt="icon" />
    <table className={styles.strip_table}>
  <tbody>
    <tr>
      <td>
        <div className={styles.strip_img_class}>
      <img src="/Ellipse_62.png" className={styles.strip_img} alt="icon" />
        <p>Treatment Research & Development</p>
        </div>
      </td>
      <td>76.73%</td>
    </tr>
    <tr>
    <td>
    <div className={styles.strip_img_class}>
    <img src="/Ellipse_65.png" className={styles.strip_img} alt="icon" />
        <p>Software Development</p>
        </div>
        </td>
      <td>10.87</td>
    </tr>
    <tr>
    <td>
    <div className={styles.strip_img_class}>
    <img src="/Ellipse_64.png" className={styles.strip_img} alt="icon" />
        <p>Legal & Regulatory Consulting</p>
       </div>
        </td>
      <td>7.05%</td>
    </tr>
    <tr>
    <td>
    <div className={styles.strip_img_class}>
    <img src="/Ellipse_66.png" className={styles.strip_img} alt="icon" />
        <p>Content Creation & Marketing</p>
</div>
        </td>
      <td>1.68%</td>
    </tr>
    <tr>
    <td>
    <div className={styles.strip_img_class}>
    <img src="/Ellipse_67.png" className={styles.strip_img} alt="icon" />
        <p>Miscellaneous Operating Costs</p>
        </div>
        </td>
      <td>3.68%</td>
    </tr>
    
    
  </tbody>
  </table>
   </div>
  </div>
</div>
<div className="container">
<div className={`${styles.row} ${styles.last_section}`}>
  <div className={`${styles.launch_app} ${styles.text_center}`}>
    <div className={styles.cta_img_section}>
  <img src="CTA_Image_2.png" className={styles.img_fluid} alt="Cta_Image" />
  </div>
  <div className={styles.last_sub}>
  <h1 className={styles.Last_heading}>Become a HairDAO citizen scientist and earn HAIR as a reward</h1>
  <p className={styles.Last_paragraph}>Anonymously log your treatment progress, help us advance hair loss research, and earn governance rights in the DAO.</p>
  <div className={styles.btn_app}>
    <a className={`${styles.btn} ${styles.btn_dark_launch_app}`}>LAUNCH THE APP <img src="white-icon.png" className={styles.white_icon_img} alt="true" />
    </a>
    </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  );
}










{useyourHair.map((useyourHair, index) => (
  <div key={index} className={styles.m_all}>
   <img src={useyourHair.imghair} className={styles.Illustration_img} alt="card_main_1" />
        <h2>{useyourHair.titleHair}</h2>
        <p>{useyourHair.discriptionHair}</p>
        <p className={styles.card_link2}>{useyourHair.FUNDEDHAIR}
  <img src="/rightvector.png" className={styles.icon_img_better} alt="true" />
  </p>
  </div>
))}