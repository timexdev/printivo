

const NavBar = () => {
  return (
    <>  
      <div className="d-none d-md-block" style={{backgroundColor:'rgb(247, 246, 244)'}}>
      <div style={{display:'flex'}} className='container py-3 fw-semibold'>
          <div style={{display:'flex', fontSize:'14px', color:'grey'}}>
            <a className='nav-link active me-5 d-none d-md-block' href="">Cooperate Pricing</a>
            <a className='nav-link active me-5 d-none d-md-block' href="">Discover Stores</a>
            <a className='nav-link active d-none d-md-block' href="">Track Orders</a>
            <span style={{marginLeft:'250px'}}>Need a help? call: <a className="text-decoration-none" href="tel:+2347067144956">+2347067144956</a></span>
          </div> 
          <div style={{marginTop:'-10px'}}>
            <a className='ms-5' href=""><i className="bi bi-whatsapp text-success fs-4"></i></a>
            <button style={{borderRadius:'20px'}} className="btn btn-outline-success ms-5">Nigeria</button>  
          </div> 
        </div>
      </div>

      <div className="d-block d-md-none ps-3 py-3" style={{backgroundColor:'rgb(247, 246, 244)'}}>
          <a className="text-decoration-none" href="tel:+2347067144956">+2347067144956</a>
          <a className='ms-5' href=""><i className="bi bi-whatsapp text-success fs-4 ps-5 pe-5"></i></a>
            <button style={{borderRadius:'20px'}} className="btn btn-outline-success ms-5 ms-5">Nigeria</button> 
      </div>

      
        

        <nav style={{backgroundColor:'rgb(236, 232, 217)'}} className="navbar navbar-expand-lg sticky-top">
            <div className="container">
                <a style={{marginRight:'250px'}} className="navbar-brand fw-bold fs-4" href="#">Printivo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active me-3 fw-semibold" aria-current="page" href="#">Home</a>
                    <a className="nav-link active me-3 fw-semibold" href="#">All Products</a>
                    <a className="nav-link active me-3 fw-semibold" href="">Become a Reseller</a>
                    <a className="nav-link active me-5 fw-semibold" href="">Cost Calculator</a>
                    <a style={{color:'#c94c4c'}} className="nav-link active fw-semibold" href="">Sign In</a>
                    <a className="nav-link active fw-semibold" href="">Create Account</a>
                    <a href=""><i className="bi bi-cart text-secondary fs-5 ms-4 fw-bold"></i></a>
                </div>
            </div>
        </div>
    </nav>

    </>
  )
}

export default NavBar