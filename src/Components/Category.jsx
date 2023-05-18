import React from 'react'

const Category = () => {
  return (
    <>
         <div className='container'>
            <h2 className='fw-bold mt-5 mb-4'>Popular Categories</h2> 
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-3 mb-3'>
                <div className="card shadow">
                    <img style={{height:'200px'}} src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1473159158_Christmas-card-for-this-wonderful-season.png" className="card-img-top" alt="greetings card"/>
                    <div className="card-body">
                        <h6 className="card-title fw-bold">Greetings Cards</h6>
                        <p style={{fontSize:'12px'}} className="card-text fw-bold text-secondary">STARTING AT <br /> <span className='fw-bold fs-5 text-black'>#17,250</span> per 50</p>
                        <a style={{backgroundColor:'rgb(215, 127, 129)', color:'white'}} href="#" className="btn fw-semibold">Browse Greetings Car... <i class="bi bi-arrow-right-short"></i> </a>
                    </div>
                </div>
                </div>
                <div className='col-12 col-md-3 mb-3'>
                <div className="card shadow">
                    <img style={{height:'200px'}} src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1473165427_stickers.png" alt='stickers'/>
                    <div className="card-body">
                        <h6 className="card-title fw-bold">Stickers</h6>
                        <p style={{fontSize:'12px'}} className="card-text fw-bold text-secondary">STARTING AT <br /> <span className='fw-bold fs-5 text-black'>#4,945</span> per 75</p>
                        <a style={{backgroundColor:'rgb(215, 127, 129)', color:'white'}} href="#" className="btn fw-semibold">Browse Stickers <i class="bi bi-arrow-right-short"></i></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Category