import Carousel from 'react-bootstrap/Carousel';
import * as React from 'react';

function Car() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block rounded mx-auto "
                    src="https://www.bing.com/th?id=OIP.kTvs-fiEdCw7rldk41rhKwHaEo&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="First slide"
                />
                <div className='text-center bg-gradient text-wrap'>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block rounded mx-auto"
                    src="https://th.bing.com/th/id/OIP.ESZIM-wUW9wP4l86TNDPmgHaE4?c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="Second slide"
                />
            </Carousel.Item>

        </Carousel>
    );
}

export default Car;