const SliderHome = ()=>{
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div
                        className="d-block w-100"
                        style={{
                            height: '45rem',
                            backgroundImage: `url("${process.env.PUBLIC_URL}/assets/img/banner-opacidad.jpg")`,
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                        }}>
                    </div>
                </div>
                <div className="carousel-item">
                <div
                        className="d-block w-100"
                        style={{
                            height: '45rem',
                            backgroundImage: `url("${process.env.PUBLIC_URL}/assets/img/banner-opacidad-3.jpg")`,
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                        }}>
                    </div>
                </div>
                <div className="carousel-item">
                <div
                        className="d-block w-100"
                        style={{
                            height: '45rem',
                            backgroundImage: `url("${process.env.PUBLIC_URL}/assets/img/banner-opacidad-2.jpg")`,
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                        }}>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default SliderHome;
