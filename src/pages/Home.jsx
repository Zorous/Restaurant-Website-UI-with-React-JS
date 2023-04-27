import React from 'react'
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
    <Hero 
    title="Profitez de notre délicieux repas"
    about="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
    diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
    lorem sit clita duo justo magna dolore erat amet"
    image={"img/hero.png"} />

    
    <div className="container-xxl py-5">
    <div className="container">
        <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item rounded pt-3">
                    <div className="p-4">
                        <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                        <h5>Master Chefs</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item rounded pt-3">
                    <div className="p-4">
                        <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                        <h5>Quality Food</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item rounded pt-3">
                    <div className="p-4">
                        <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                        <h5>Online Order</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="service-item rounded pt-3">
                    <div className="p-4">
                        <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                        <h5>24/7 Service</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="container-xxl py-5">
    <div className="container">
        <div className="row g-5 align-items-center">
            <div className="col-lg-6">
                <div className="row g-3">
                    <div className="col-6 text-start">
                        <img className="img-fluid rounded w-100 wow zoomIn" alt="maison oriental" data-wow-delay="0.1s" src="img/about-1.jpg"/>
                    </div>
                    <div className="col-6 text-start">
                        <img className="img-fluid rounded w-75 wow zoomIn" alt="maison oriental" data-wow-delay="0.3s" src="img/about-2.jpg" style={{marginTop:"25%"}} />
                    </div>
                    <div className="col-6 text-end">
                        <img className="img-fluid rounded w-75 wow zoomIn" alt="maison oriental" data-wow-delay="0.5s" src="img/about-3.jpg"/>
                    </div>
                    <div className="col-6 text-end">
                        <img className="img-fluid rounded w-100 wow zoomIn" alt="maison oriental" data-wow-delay="0.7s" src="img/about-4.jpg"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                <h1 className="mb-4">Bienvenue à <i className="fa fa-utensils text-primary me-2"></i>
                <span className="logo-style"> Maison Orientale </span>

</h1>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <div className="row g-4 mb-4">
                    <div className="col-sm-6">
                        <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                            <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">10</h1>
                            <div className="ps-4">
                                <p className="mb-0">Years of</p>
                                <h6 className="text-uppercase mb-0">Experience</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                            <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>
                            <div className="ps-4">
                                <p className="mb-0">Popular</p>
                                <h6 className="text-uppercase mb-0">Master Chefs</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="btn btn-primary py-3 px-5 mt-2" href="more">Read More</a>
            </div>
        </div>
    </div>
</div>


<div className="container-xxl py-5">
    <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
            <h1 className="mb-5">Most Popular Items</h1>
        </div>
        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li className="nav-item">
                    <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                        <i className="fa fa-coffee fa-2x text-primary"></i>
                        <div className="ps-3">
                            <small className="text-body">Popular</small>
                            <h6 className="mt-n1 mb-0">Breakfast</h6>
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                        <i className="fa fa-hamburger fa-2x text-primary"></i>
                        <div className="ps-3">
                            <small className="text-body">Special</small>
                            <h6 className="mt-n1 mb-0">Launch</h6>
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                        <i className="fa fa-utensils fa-2x text-primary"></i>
                        <div className="ps-3">
                            <small className="text-body">Lovely</small>
                            <h6 className="mt-n1 mb-0">Dinner</h6>
                        </div>
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-2.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-3.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-4.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-5.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-6.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-7.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-2.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-3.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-4.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-5.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-6.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-7.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-2.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-3.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-4.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-5.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-6.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-7.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style={{width:"80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger</span>
                                        <span className="text-primary">$115</span>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
    <div className="row g-0">
        <div className="col-md-12">
            <div className="video">
                <button type="button" className="btn-play" data-bs-toggle="modal" data-bs-target="#videoModal">
                    <span></span>
                </button>
            </div>
        </div>
    </div>
</div>

<div className="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content rounded-0">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Video</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="ratio ratio-16x9">
                    <iframe title='video' src="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fweb.facebook.com%2FMaison Orientalekebab%2Fvideos%2F803267387485573%2F&show_text=false&width=560&t=0" width="560" height="317"
                     style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" 
                    allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>     
    </div>
  )
}

export default Home
