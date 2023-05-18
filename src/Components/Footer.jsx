import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor:'rgb(56, 74, 98)'}}>
        <div className='container'>
            <div className='row py-5'>
                <div className='col-12 col-md-3'>
                    <h5 className='text-white pt-3'>Prinvito</h5>
                    <a className='text-decoration-none text-white' href="">About</a> <br />
                    <a className='text-decoration-none text-white' href="">Contact</a> <br />
                    <a className='text-decoration-none text-white' href="">Track Order</a> <br />
                    <a  className='text-decoration-none text-white'href="">Career</a>
                </div>
                <div className='col-12 col-md-3'>
                    <h5 className='text-white pt-3'>Help and Information</h5>
                    <a className='text-decoration-none text-white' href="">Paper Quality</a> <br />
                    <a className='text-decoration-none text-white' href="">Privacy policy</a> <br />
                    <a className='text-decoration-none text-white' href="">Terms and Conditions</a> <br />
                    <a className='text-decoration-none text-white' href="">Shipping and Deliver</a>
                </div>
                <div className='col-12 col-md-3'>
                    <h5 className='text-white pt-3'>Make Money</h5>
                    <a className='text-decoration-none text-white' href="">Refer a friend & earn N1,000</a> <br />
                    <a className='text-decoration-none text-white' href="">Become a Reseller</a> <br />
                    <a className='text-decoration-none text-white' href="">Sell your design</a> <br />
                    <a className='text-decoration-none text-white' href="">Merch Store</a>
                </div>
                <div className='col-12 col-md-3'>
                    <h5 className='text-white pt-3'>Follow Us</h5>
                    <p><i class="bi bi-facebook text-white fs-3 me-3"></i> <i class="bi bi-twitter text-white fs-3 me-3"></i> <i class="bi bi-instagram text-white fs-3 me-3"></i> <i class="bi bi-linkedin text-white fs-3"></i></p>
                </div>
            </div>
        </div>

        <div style={{backgroundColor:'rgb(203, 202, 200)'}}>
            <p className='text-center pt-4 pb-3'>Copyright © 2021 Printivo. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer