import React from 'react'

const Product = () => {
  return (
    <>
        <div className='container'>
            <h2 className='fw-bold mt-5 mb-4'>Popular Products</h2>
           
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-3 mb-3'>
                <div className="card shadow">
                    <img style={{height:'250px'}} src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1440201227_two-sided-business-cards-by-printivo.png" className="card-img-top" alt="double-sided card"/>
                    <div className="card-body">
                        <h6 className="card-title fw-bold">Two-sided Business Cards</h6>
                        <p style={{fontSize:'12px'}} className="card-text fw-bold text-secondary">STARTING AT <br /> <span className='fw-bold fs-5 text-black'>#8,885</span> per 100</p>
                        <a style={{backgroundColor:'rgb(215, 127, 129)', color:'white'}} href="#" className="btn fw-semibold">Browse Two-sided Bu... <i class="bi bi-arrow-right-short"></i> </a>
                    </div>
                </div>
                </div>
                <div className='col-12 col-md-3 mb-3'>
                <div className="card shadow">
                    <img style={{height:'250px'}} src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1572522725_flyer-1sided.png" className="card-img-top" alt="A5 flyer"/>
                    <div className="card-body">
                        <h6 className="card-title fw-bold">A5 flyers (single-sided)</h6>
                        <p style={{fontSize:'12px'}} className="card-text fw-bold text-secondary">STARTING AT <br /> <span className='fw-bold fs-5 text-black'>#15,000</span> per 100</p>
                        <a style={{backgroundColor:'rgb(215, 127, 129)', color:'white'}} href="#" className="btn fw-semibold">Browse A5 flyers(S...) <i class="bi bi-arrow-right-short"></i></a>
                    </div>
                </div>
                </div>
                <div className='col-12 col-md-3 mb-3'>
                <div className="card shadow">
                    <img style={{height:'250px'}} src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1607424257_63f28e7a-da1d-4685-a297-964e186a2170.jpeg" className="card-img-top" alt="Courier bags"/>
                    <div className="card-body">
                        <h6 className="card-title fw-bold">A4 Courier Bags</h6>
                        <p style={{fontSize:'12px'}} className="card-text fw-bold text-secondary">STARTING AT <br /> <span className='fw-bold fs-5 text-black'>#16,000</span> per 100</p>
                        <a style={{backgroundColor:'rgb(215, 127, 129)', color:'white'}} href="#" className="btn fw-semibold">Browse A4 Courier B... <i class="bi bi-arrow-right-short"></i></a>
                    </div>
                </div>
                </div>
                <div className='col-12 col-md-3 mb-3'>
                <div className="card shadow">
                    <img style={{height:'250px'}} src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1485151940_White-tshirt.png" className="card-img-top" alt="Off white T-Shirts"/>
                    <div className="card-body">
                        <h6 className="card-title fw-bold">Off White T-Shirts</h6>
                        <p style={{fontSize:'12px'}} className="card-text fw-bold text-secondary">STARTING AT <br /> <span className='fw-bold fs-5 text-black'>#3,499</span> per 1</p>
                        <a style={{backgroundColor:'rgb(215, 127, 129)', color:'white'}} href="#" className="btn fw-semibold">Browse Off White T-... <i class="bi bi-arrow-right-short"></i></a>
                    </div>
                </div>
                </div> 
            </div>
        </div>
        
    
    </>
  )
}

export default Product