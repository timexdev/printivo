import React from 'react'

const Testimonial = () => {
  return (
    <div style={{backgroundColor:'rgb(237, 246, 253)', marginTop:'80px'}}>
        <div className='container'>
            <h2 className='fw-bold pt-5 mb-4'>What Customers Say About Us</h2>
        </div>

        <div className='container pb-5'>
            <div className='row'>
                <div className='col-12 col-md-4 mb-3'>
                <div style={{height:'180px'}} class="card ps-5 shadow">
                    <div class="card-body">
                        <h6 className='pb-3'>Amina Ebele <a href="">@DeliciousAmina</a></h6>
                        <p>I am now the unofficial <a href="">@Printivo</a> ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!</p>
                    </div>
                </div>
                </div>
                <div className='col-12 col-md-4 mb-3'>
                <div style={{height:'180px'}} class="card ps-5 shadow">
                    <div class="card-body">
                        <h6 className='pb-3'>Oluwatosin <a href="">@tosingirlfx</a></h6>
                        <p><a href="">@Printivo</a> delivered my mugs in 24hrs. Thank you so much! It's nice doing business with you. More to come.</p>
                    </div>
                </div>
                </div>
                <div className='col-12 col-md-4 mb-3'>
                <div style={{height:'180px'}} class="card ps-5 shadow">
                    <div class="card-body">
                        <h6 className='pb-3'>Oluwatosin <a href="">@olgablark</a></h6>
                        <p>These guys <a href="">@Printivo</a> are really awesome and affordable. Excellent customer service and delivery too. Thank you.</p>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Testimonial