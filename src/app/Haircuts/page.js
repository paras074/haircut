import Image from "next/image"
export default function Haircut(){
    return(
        <>
         <main>
          <div className="Haircut_section container p-5">
            <div className="container">
                <div className="row">
                <div className="col-lg-6  ">
                <h3 className="text-start  fw-bold">
                Hair Cuts #5
                </h3>
                <h5 className="text-start mt-4 text-black fw-bold" >
                    September1 - December31,2023
                </h5>
                </div>
                
                <div className="col-lg-6 d-flex justify-content-center "> 
                
  
                <button className=" haircut_btn  btn  last-btn nav-links text-white bg-black">View PDF
                </button>
               
                </div>
                </div>
                </div>
                
                
            
                
               
             
            
              </div>
              
             
         </main>
        </>
    )
}
