import Image from "next/image";
import styles from "../Styles/Haircut.module.css";

export default function Haircut() {
  return (
    <>
    {/* <hero Section> */}
      <div className={styles.container}>
        <div className={styles.Headingrow}>
          <div className={styles.col_sec}>
            <h1 className={styles.colsech1}>Hair Cuts #3</h1>
            <h5 className={styles.fwbold}>may17 - August31,2023</h5>
          </div>
        
        <div className={styles.btnrow}>
          <div className={`${styles.d_flex} ${styles.justify_content_end}`} >
          <a href="https://e.issuu.com/embed.html?d=hair_cuts_3&u=hairdao" target="blank">
            <button className={styles.btn}>View PDF</button>
            </a>
          </div>
        </div>
        </div>
    {/* <hero section end> */}

    {/* <video section> */}
        <div className="hair_video">
          <video width="1000" height="500" controls className={styles.videosection}>
            <source src="" type="video/mp4" />
          </video>
        </div>
        {/* <video section ends> */}

        {/* <hyperLinks Section> */}
        <div className={styles.hyper_links}>
          <div className={styles.heading}>
            <h1>Find More</h1>
          </div>
          <div className={styles.top_mnt}>
          <div className={styles.haircut_img}>
            <div class={styles.image_container}>
                <a href="/Haircut4">
              <img
                src="/Haircutimg.png"
                className={styles.hair_img}
                alt="strong-img-img"
              /></a>
            <h4 className={`${styles.fw_bold} ${styles.mt-2}`}>Hair Cuts 4</h4>
            </div>
            <div class={styles.image_container}>
            <a href="/Haircut3">
                <img
                src="/Haircutimg.png"
                className={styles.hair_img}
                alt="strong-img-img"
              />
            </a>
              <h4 className={`${styles.fw_bold} ${styles.mt-2}`}>Hair Cuts 2</h4>
            </div>
            <div class={styles.image_container}>
                <a href="/Haircut2">
              <img
                src="/Haircutimg.png"
                className={styles.hair_img}
                alt="strong-img-img"
              /></a>
              <h4 className={`${styles.fw_bold} ${styles.mt-2}`}>Hair Cuts 1</h4>
            </div>
          </div>
          </div>
        </div>
        {/* hyperlinks section ends */}
      </div>
    </>
  );
}