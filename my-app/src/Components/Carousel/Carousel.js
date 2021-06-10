import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export const CarouselHome = () => {
    return (
          <Carousel style={{width: '90%', marginTop:'5rem'}} className='container' >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/delsurwines-ecommerce.appspot.com/o/3slide%20copy.jpg?alt=media&token=348f5adf-a68e-4da8-a9b1-6248a5801027"
                alt="vinos a un click"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/delsurwines-ecommerce.appspot.com/o/2slide%20copy.jpg?alt=media&token=58b43361-f32b-45e7-af11-31911a367060"
                alt="envios caba y gba"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/delsurwines-ecommerce.appspot.com/o/1slide%20copy.jpg?alt=media&token=68804b63-8015-411d-8158-e05114ba8243"
                alt="vinos a tu casa"
              />
            </Carousel.Item>
          </Carousel>
    )
}
