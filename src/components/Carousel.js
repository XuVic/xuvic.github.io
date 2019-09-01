import React from 'react';

class Carousel extends React.Component{


  render() {
    return (
      <div id='carouselControls' className='carousel slide' data-ride='carousel'>
        <div className="carousel-inner">
          <div class="carousel-item active">
            <img src={this.props.images[0]} />
          </div>
          {
            this.props.images.slice(1).map(image => 
              <div className='carousel-item'>
                <img src={image} />
              </div>
            )
          }
        </div>
        <a class="carousel-control-prev" href='#carouselControls' role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href='#carouselControls' role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    )
  }
}

export default Carousel;