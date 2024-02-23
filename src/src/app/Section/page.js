import Image from "next/image";
import styles from "../Styles/section.module.css"
import Link from "next/link";
export default function Section() {

 
    var cardData = [
      { "img": 'card_1.png', "title": 'TRH', "discription": 'Thyrotropin Releasing Hormone consectetur adipiscing elit. Pellentesque eu orci placerat, placerat erat id, iaculis tellus.', "FUNDED": 'FUNDED', "link":'/study5' },
      { "img": 'card2.png', "title": 'T3', "discription": 'Levothyroxine consectetur adipiscing elit. Pellentesque eu orci placerat. Pellentesque eu orci placerat, placerat erat id, iaculis tellus.', "FUNDED": 'PCT SUBMITTED' , "link":'/Study4'  },
      { "img": 'card3.png', "title": 'T4', "discription": 'Levothyroxine consectetur adipiscing elit. Pellentesque eu orci placerat. Pellentesque eu orci placerat, placerat erat id, iaculis tellus.', "FUNDED": 'PCT SUBMITTED' , "link":'/Study4'  },
      { "img": 'card4.png', "title": 'Dutasteride', "discription": 'Delivery Vehicle Study consectetur adipiscing elit. Pellentesque eu orci placerat, placerat erat id, iaculis tellus', "FUNDED": 'FUNDED' , "link":'/Study3'  },
      { "img": 'card5.png', "title": 'Twist-1 and 2i', "discription": 'Twist Inhibitor Study consectetur adipiscing elit. Pellentesque eu orci placerat, placerat erat id, iaculis tellus. Consectetur adipiscing elit.', "FUNDED": 'FINALIZING' , "link":'/Study2' },
      { "img": 'card6.png', "title": 'YAP-1i', "discription": 'YAP Inhibitor Study consectetur adipiscing elit. Pellentesque eu orci placerat, placerat erat id, iaculis tellus.', "FUNDED": 'FUNDED' , "link":'/Study1'  },
    ];




    const data = [
      { title: '8 in 10 men', text: 'and half of all women will experience hair loss in their lifetimes.', img: 'Illustration.png' },
      { title: '66% of men', text: 'will experience noticeable hair loss before the age of 35.', img: 'Vector-grph.png' },
      { title: '0 new treatments', text: 'have been brought to market since Finasteride in 1997.', img: 'New-T.png' },
      { title: '0.004%', text: "of all early stage R&D funding goes to hair loss research. That's only $5.4 million a year!", img: 'last-section.png' },
    ];



  return (
    <main>
<div className="container">
<div className={`${styles.row_container_hero} ${styles.main_hero_banner}`}>
  <div className={styles.box_container_hero}>
  <h1 className={styles.First_heading_top}>We need your help fixing hair loss for good</h1>
      <p className={styles.First_paragraph}>HairDAO is an open-source R&D network where patients and researchers collaborate to develop revolutionary new treatments for hair loss. Log your treatment experiences in our app, contribute to cutting-edge hair loss research, and earn HAIR token as a reward.</p>
      <div className={styles.d_flex}>
        <a href="#" className={`${styles.btn} ${styles.btn_dark_cstm}`}>LAUNCH THE APP
       <img src="/Icon.png" className={styles.icon_img} alt="iocn" />
        </a>
      </div>
  </div>
  <div className={styles.box_container_hero}>
    <div className={styles.img_section}>
    <video  autoPlay muted loop playsinline className={styles.banner_img} id="banner_video" width="100" height="200">
         <source src="HairDAO.mp4" contr type="video/mp4" />
             Your browser does not support the video tag.
         </video> 
    </div>
  </div>
</div>
{/* Hero Section End */}

{/* Second Section */}


<div className={styles.row_container_img_text}>
      {data.map((item, index) => (
        <div key={index} className={`${styles.box_container_img_text} ${index % 2 === 0 ? styles.imageTop : ''}`}>
          <div className={styles.m_all}>
            {index % 2 === 0 && <img src={item.img} className={styles.Illustration_img} alt="Illustration" />}
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            {index % 2 === 1 && <img src={item.img} className={styles.Illustration_img} alt="Illustration" />}
          </div>
        </div>
      ))}
    </div>

 
 
  {/* <div className={`${styles.box_container_img_text} ${styles.last_child}`}>
  <div className={styles.m_all}>
   <img src="last-section.png" className={styles.Illustration_img} alt="Illustration" />
    <h2>0.004%</h2>
    <p>of all early stage R&D funding goes to hair loss research. That's only $5.4 million a year!</p>
   </div>
  </div> */}


{/* Second Section End */}

{/* Third Section */}


<div className={styles.row_container_better}>
<div className={styles.box_container_better}>
    <div className="img-section">
    <img src="left-side-img.png" className={styles.img_fluid_think} alt="left-side-img" /> 
    </div>
  </div>
  <div className={styles.box_container_better}>
  <h1 className={styles.First_heading}>We think patients deserve better</h1>
      <p className={styles.First_paragraph}>HairDAO is an open-source R&D network where patients and researchers collaborate to develop revolutionary new treatments for hair loss. We believe in the power of a community to tackle big, hairy challenges and make hair loss a thing of the past.</p>
      <div className="d-flex gap-2 ">
        <a href="#" className= {`${styles.btn} ${styles.btn_dark_better}`}>GET INVOLVED
       <img src="/right-vector.png" className={styles.icon_img_better} alt />
        </a>
      </div>
  </div>

</div>
<div className={styles.float_class}>
  <img src="strong-img.png" className={styles.strong_img} alt="strong_img"/>
</div>


{/* Third Section End */}

{/* fourth Section */}
  <div className= {`${styles.text_center} ${styles.seen_class}`}>
      <h6>AS SEEN IN</h6>
   </div>

       <div className={styles.logo_row}>
       <img src="image 1.png" className={`${styles.img_fluid} ${styles.client_img}`} alt="strong-img-img"/>
       <img src="image 2.png" className={`${styles.img_fluid} ${styles.client_img}`} alt="strong-img-img"/>
       <img src="image 31.png" className={`${styles.img_fluid} ${styles.client_img}`} alt="strong-img-img"/>
       <img src="image 4.png"className={`${styles.img_fluid} ${styles.client_img}`} alt="strong-img-img"/>
       <img src="image 19.png" className={`${styles.img_fluid} ${styles.client_img}`} alt="strong-img-img"/>
        </div>
{/* fourth Section End */}


{/* fifth Section */}
  <div className={styles.row_container_text}>
  <div className={styles.box_container_text}>
  <h1 className={styles.First_heading}>Our research is developed, governed and owned by our community</h1>
  </div>
  <div className={styles.box_container_text}>
  <p className={styles.First_paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu orci placerat, placerat erat id, iaculis tellus. Maecenas in ipsum ut libero auctor euismod sit amet sit amet ex. Fusce et ultrices mauris, non mollis nulla. Nullam vulputate sem at erat lacinia convallis. Donec fringilla pellentesque orci, pretium laoreet mauris facilisis quis.</p>
  </div>
</div>
{/* fifth Section End */}

{/* sixth Section*/}

    <div className={styles.row_container_card}>
    <div className={styles.card_container}>
      {cardData.map((cardData, index) => (
        <div key={index} className={styles.card_main_1}>
          <a className={styles.a_sec} href="#"> 
            <div className={styles.card_main_1_image}>
              <Link href={cardData.link}>
              <img src={cardData.img} alt="card_main_1" />
              </Link>
            </div>
            <div className={styles.description}>
              <h2>{cardData.title}</h2>
              <p>{cardData.discription}</p>
              <p className={`${styles.card_link} ${cardData.FUNDED === 'FINALIZING' ? styles.card_link3 : ''} ${cardData.FUNDED === 'PCT SUBMITTED' ? styles.card_link2 : ''}`}>
  {cardData.FUNDED}
</p>

          
            </div>
          </a>
        </div>
      ))}
    </div>
    </div>

{/* sixth Section End*/}

    

{/* seven Section */}

    <div className={`${styles.text_center} ${styles.seen_class}`}>
           <h6>MEET OUR PARTNERS</h6>
</div>
</div>


<div className={`${styles.container} ${styles.slider_main}`} >
 <div className={styles.slider_one}>
  <div className={styles.slide_track_one}>
    <div className={styles.slide_one}>
      <img src="slide1.png" height={100} width={250} alt="Image"/>
    </div>
    <div className={styles.slide_one}>
      <img src="slide2.png" height={100} width={250} alt="Image"/>
    </div>
    <div className={styles.slide_one}>
      <img src="slide3.png" height={100} width={250} alt="Image"/>
    </div>
    <div className={styles.slide_one}>
      <img src="slide4.png" height={100} width={250} alt="Image"/>
    </div>
    <div className={styles.slide_one}>
      <img src="slide5.png" height={100} width={250} alt="Image"/>
    </div>
    <div className={styles.slide_one}>
      <img src="slide1.png" height={100} width={250} alt="Image"/>
    </div>
    <div className={styles.slide_one}>
      <img src="slide2.png" height={100} width={250} alt="Image"/>
    </div>
    <div className={styles.slide_one}>
      <img src="slide3.png" height={100} width={250} alt="Image"/>
    </div>
    <div className={styles.slide_one}>
      <img src="slide4.png" height={100} width={250} alt="Image"/>
    </div>
    <div className={styles.slide_one}>
      <img src="slide5.png" height={100} width={250} alt="Image"/>
    </div>
  </div>
</div>


<div className={styles.slider_two}>
  <div className={styles.slide_track_two}>
    <div className={styles.slide_two}>
      <img src="sliderimg1.png" height={100} width={250} alt="Image"/>
    </div>
    <div className={styles.slide_two}>
      <img src="sliderimg2.png" height={100} width={250} alt="Image"/>
    </div>
    <div className={styles.slide_two}>
      <img src="sliderimg3.png" height={100} width={250} alt="Image"/>
    </div>
    <div className={styles.slide_two}>
      <img src="sliderimg4.png" height={100} width={250} alt="Image"/>
    </div>
    <div className={styles.slide_two}>
      <img src="sliderimg5.png" height={100} width={250} alt="Image"/>
    </div>
    <div className={styles.slide_two}>
      <img src="sliderimg1.png" height={100} width={250} alt="Image"/>
    </div>
    <div className={styles.slide_two}>
      <img src="sliderimg2.png" height={100} width={250} alt="Image"/>
    </div>
    <div className={styles.slide_two}>
      <img src="sliderimg3.png" height={100} width={250} alt="Image"/>
    </div>
    <div className={styles.slide_two}>
      <img src="sliderimg4.png" height={100} width={250} alt="Image"/>
    </div>
    <div className={styles.slide_two}>
      <img src="sliderimg5.png" height={100} width={250} alt="Image"/>
    </div>
  </div>
  </div>
</div>
  


  {/* seven Section End*/}

  {/* eight Section */}
  <div className={styles.container}>
<div className={`${styles.row} ${styles.last_section}`}>
<div className={`${styles.launch_app} ${styles.text_center}`}>
  <img src="CTA Image.png" className={`${styles.cta_img} ${styles.img_fluid}`} alt="Cta-Image" />
  <div className={styles.last_sub}>
  <h1 className={styles.First_heading}>Ready to dive in?</h1>
  <p className={styles.First_paragraph}>Anonymously log your treatment progress, help us advance hair loss research, and earn<br />
 governance rights in the DAO.</p>
  <div className={styles.btn_app}>
    <a className={`${styles.btn} ${styles. btn_dark_launch_app}`}>LAUNCH THE APP <img src="white-icon.png" className={styles.white_icon_img} alt />
    </a>
    </div>
    </div>
  </div>
  </div>
</div>

{/* eight Section */}
    </main>
  );
}


