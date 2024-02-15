import Image from "next/image";


export default function Section() {
  return (
    
    <main>
    <div className="container-xl">

      {/* Hero Section Start */}

    <div className="row p-5 align-items-center main-hero-banner rounded-3" >
    <div className="col-md-6 mb-3">
      <h1 className="First-heading">We need your help fixing hair loss for good</h1>
      <p className="First-paragraph">HairDAO is an open-source R&D network where patients and researchers collaborate to develop revolutionary new treatments for hair loss. Log your treatment experiences in our app, contribute to cutting-edge hair loss research, and earn HAIR token as a reward.</p>
      <div className="d-flex gap-2 ">
        <a href="#" className="btn btn-dark-cstm">LAUNCH THE APP
       <img src="/Icon.png" className="img-fluid icon-img mb-1" alt />
        </a>
      </div>
    </div>
    <div className="col-md-6 text-center ">
     <video  autoPlay muted loop playsinline className="img-fluid banner-img" id="banner_video" width="100" height="200">
         <source src="HairDAO.mp4" contr type="video/mp4" />
             Your browser does not support the video tag.
         </video> 
    </div>
  </div> 
{/* Hero Section End */}

  <div className="row  mt-5 mb-5 border-top border-bottom border-1 border-dark man-section">
   <div className="col-md-3 text-center border-cstm border-dark">
    <div className="m-all">
    <h2>8 in 10 men</h2>
    <p>and half of all women will experience hair loss in their lifetimes. </p>
    <img src="Illustration.png" className="img-fluid Illustration-img" alt="Illustration" />
   </div>
   </div>

   <div className="col-md-3 text-center border-cstm border-dark">
   <div className="m-all">
   <img src="Vector-grph.png" className="img-fluid Illustration-img" alt="Illustration" />
    <h2>66% of men</h2>
    <p>will experience noticeable hair loss before the age of 35.</p>
   </div>
   </div>

   <div className="col-md-3 text-center border-cstm border-dark">
   <div className="m-all">
    <h2>0 new treatments</h2>
    <p>have been brought to market since Finasteride in 1997.</p>
    <img src="New-T.png" className="img-fluid Illustration-img" alt="Illustration" />
   </div>
   </div>

   <div className="col-md-3 text-center">
   <div className="m-all">
   <img src="last-section.png" className="img-fluid Illustration-img" alt="Illustration" />
    <h2>0.004%</h2>
    <p>of all early stage R&D funding goes to hair loss research. That's only $5.4 million a year!</p>
   </div>
   </div>
    </div>


  <div className="row align-items-center mt-5 we-think-section">
    <div className="col-md-6  mt-5 mb-5">
    <img src="left-side-img.png" className="img-fluid" alt="left-side-img" />
    </div>
    <div className="col-md-6">
       <h1 className="First-heading">We think patients deserve better</h1>
       <p className="First-paragraph">HairDAO is an open-source R&D network where patients and researchers collaborate to develop revolutionary new treatments for hair loss. We believe in the power of a community to tackle big, hairy challenges and make hair loss a thing of the past.</p>
       <div className="d-flex gap-2">
        <a href className="btn btn-dark-involved">GET INVOLVED</a>
      </div>
    </div>
    </div>
    <div className="row align-items-center border-bottom border-1 border-dark top-right-img-section">
      <div className="right-img">
      <img src="strong-img.png" className="img-fluid strong-img" alt="strong-img-img" />
      </div>
      </div>
      <div className="align-items-center text-center seen-class">
           <h6>AS SEEN IN</h6>
       </div>
       <div className="row align-items-center mt-2 mb-2 pb-4 justify-content-between border-bottom border-1 border-dark">
       <img src="image 1.png" className="img-fluid  client-img" alt="strong-img-img" />
       <img src="image 2.png" className="img-fluid  client-img" alt="strong-img-img" />
       <img src="image 31.png" className="img-fluid client-img" alt="strong-img-img" />
       <img src="image 4.png" className="img-fluid  client-img" alt="strong-img-img" />
       <img src="image 19.png" className="img-fluid client-img" alt="strong-img-img" />
        </div>
        <div className="row align-items-center mt-5 mb-5 justify-content-between our-reserach">
          <div className="col-md-6">
          <h1 className="First-heading">Our research is developed, governed and owned by our community</h1>
          </div>
          <div className="col-md-6">
          <p className="First-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu orci placerat, placerat erat id, iaculis tellus. Maecenas in ipsum ut libero auctor euismod sit amet sit amet ex. Fusce et ultrices mauris, non mollis nulla. Nullam vulputate sem at erat lacinia convallis. Donec fringilla pellentesque orci, pretium laoreet mauris facilisis quis.</p>
          </div>
          </div>

  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 our-reserach">
  <div className="col card-col-main mb-3">
    <div className="card card-main border-bottom border-dark ">
      <img src="card_1.png" className="card-img-top img-fluid" alt="Image" />
      <div className="card-body">
        <h5 className="card-title">TRH</h5>
        <p className="card-text">Thyrotropin Releasing Hormone consectetur adipiscing elit. Pellentesque eu orci placerat, placerat erat id, iaculis tellus.</p>
        <a className="card-link">FUNDED</a>
      </div>
    </div>
  </div>
  {/* Card Item 2 */}
  <div className="col card-col-main">
    <div className="card card-main border-bottom border-dark ">
      <img src="card2.png" className="card-img-top img-fluid" alt="Image" />
      <div className="card-body">
        <h5 className="card-title">T3</h5>
        <p className="card-text">Liothyronine consectetur adipiscing elit. Pellentesque eu orci placerat, placerat erat id, iaculis tellus.</p>
        <a className="card-link2">PCT SUBMITTED</a>
      </div>
    </div>
  </div>
  {/* Card Item 3 */}
  <div className="col card-col-main">
    <div className="card card-main border-bottom border-dark">
      <img src="card3.png" className="card-img-top img-fluid" alt="Image" />
      <div className="card-body">
        <h5 className="card-title">T4</h5>
        <p className="card-text">Levothyroxine consectetur adipiscing elit. Pellentesque eu orci placerat. Pellentesque eu orci placerat, placerat erat id, iaculis tellus.</p>
        <a className="card-link3">PCT SUBMITTED</a>
      </div>
    </div>
  </div>
    {/* Card Item 4 */}
  <div className="col card-col-main">
    <div className="card card-main border-bottom border-dark">
      <img src="card4.png" className="card-img-top img-fluid" alt="Image" />
      <div className="card-body">
        <h5 className="card-title">Dutasteride</h5>
        <p className="card-text">Delivery Vehicle Study consectetur adipiscing elit. Pellentesque eu orci placerat, placerat erat id, iaculis tellus</p>
        <a className="card-link">FUNDED</a>
      </div>
    </div>
  </div>
    {/* Card Item 5 */}
  <div className="col card-col-main">
    <div className="card card-main border-bottom border-dark">
      <img src="card5.png" className="card-img-top img-fluid" alt="Image" />
      <div className="card-body">
        <h5 className="card-title">Twist-1 and 2i</h5>
        <p className="card-text">Twist Inhibitor Study consectetur adipiscing elit. Pellentesque eu orci placerat, placerat erat id, iaculis tellus. Consectetur adipiscing elit.</p>
        <a className="card-link5">FINALIZING</a>
      </div>
    </div>
  </div>
    {/* Card Item 6 */}
  <div className="col card-col-main">
    <div className="card card-main border-bottom border-dark">
      <img src="card6.png" className="card-img-top img-fluid" alt="Image" />
      <div className="card-body">
        <h5 className="card-title">YAP-1i</h5>
        <p className="card-text">YAP Inhibitor Study consectetur adipiscing elit. Pellentesque eu orci placerat, placerat erat id, iaculis tellus.</p>
        <a className="card-link">PCT Submitted</a>
      </div>
    </div>
  </div>


</div>
<div className="align-items-center text-center mt-5 seen-class">
           <h6>MEET OUR PARTNERS</h6>
</div>
</div>



<div className="container-fluid slider-main" >
  <div className="row align-items-center h-100">
 <div className="slider-one mt-5 mb-5">
  <div className="slide-track-one">
    <div className="slide-one">
      <img src="slide1.png" height={100} width={250} alt="Image"/>
    </div>
    <div className="slide-one">
      <img src="slide2.png" height={100} width={250} alt="Image"/>
    </div>
    <div className="slide-one">
      <img src="slide3.png" height={100} width={250} alt="Image"/>
    </div>
    <div className="slide-one">
      <img src="slide4.png" height={100} width={250} alt="Image"/>
    </div>
    <div className="slide-one">
      <img src="slide5.png" height={100} width={250} alt="Image"/>
    </div>
    <div className="slide-one">
      <img src="slide1.png" height={100} width={250} alt="Image"/>
    </div>
    <div className="slide-one">
      <img src="slide2.png" height={100} width={250} alt="Image"/>
    </div>
    <div className="slide-one">
      <img src="slide3.png" height={100} width={250} alt="Image"/>
    </div>
    <div className="slide-one">
      <img src="slide4.png" height={100} width={250} alt="Image"/>
    </div>
    <div className="slide-one">
      <img src="slide5.png" height={100} width={250} alt="Image"/>
    </div>
  </div>
</div>


<div className="slider-two">
  <div className="slide-track-two">
    <div className="slide-two">
      <img src="sliderimg1.png" height={100} width={250} alt="Image"/>
    </div>
    <div className="slide-two">
      <img src="sliderimg2.png" height={100} width={250} alt="Image"/>
    </div>
    <div className="slide-two">
      <img src="sliderimg3.png" height={100} width={250} alt="Image"/>
    </div>
    <div className="slide-two">
      <img src="sliderimg4.png" height={100} width={250} alt="Image"/>
    </div>
    <div className="slide-two">
      <img src="sliderimg5.png" height={100} width={250} alt="Image"/>
    </div>
    <div className="slide-two">
      <img src="sliderimg1.png" height={100} width={250} alt="Image"/>
    </div>
    <div className="slide-two">
      <img src="sliderimg2.png" height={100} width={250} alt="Image"/>
    </div>
    <div className="slide-two">
      <img src="sliderimg3.png" height={100} width={250} alt="Image"/>
    </div>
    <div className="slide-two">
      <img src="sliderimg4.png" height={100} width={250} alt="Image"/>
    </div>
    <div className="slide-two">
      <img src="sliderimg5.png" height={100} width={250} alt="Image"/>
    </div>
  </div>
  </div>


    </div>
  </div>




<div className="container-xl">
<div className="row align-items-center mt-5 text-center p-5 last-section">
  <div className="launch-app">
  <img src="CTA Image.png" className="cta-img img-fluid" alt="Cta-Image" />
  <h1 className="First-heading mt-4 mb-4">Ready to dive in?</h1>
  <p className="First-paragraph">Anonymously log your treatment progress, help us advance hair loss research, and earn<br />
 governance rights in the DAO.</p>
  <div className="btn-app mt-4 mb-4">
    <a className="btn btn-dark-launch-app">LAUNCH THE APP <img src="white-icon.png" className="img-fluid white-icon-img mb-1" alt />
    </a>
    </div>
  </div>
  </div>
</div>
    </main>
   
  );
}


