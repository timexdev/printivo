import React from 'react'

const Header = () => {

  return (
    <>
        <header >
            <div className='row header-content'>
                <div className='col-12 col-md 8'>
                    <h1>Quality Prints</h1>
                    <h4>Shipped to your doorstep</h4>
                    <p>What would you like to print today?</p>
                    <input className="form-control me-2" type="search" placeholder="Search for Business Cards, T-Shirts, Mugs etc." aria-label="Search"></input>
                </div>
                <div className='col-12 col-md 4 d-none d-md-block'>
                    <img className='header-img' style={{width:'450px'}} src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1623764552/printivo/Card3_n9kqin.png" alt="printivo-header-image" />
                </div>
            </div>
            <div className='d-none d-md-block'>
                <p style={{backgroundColor:'rgb(165, 213, 213)', fontWeight:'bolder', padding:'25px 0', textAlign:'center', fontSize:'17px'}}>Need banners for your next event? Get 10% off all banners ordered this week <a className='text-black fw-light fs-5' href=""> Shop now</a></p>
            </div>
            <div className='d-block d-md-none'>
                <p style={{backgroundColor:'rgb(243, 177, 205)', fontWeight:'bolder', padding:'25px 0', textAlign:'center', fontSize:'16px'}}>Need banners for your next event? Get 10% off all banners ordered this week <a className='text-black fw-light fs-5' href=""> Shop now</a></p>
            </div>
        
        </header>
        
    </>
  )
}

export default Header