import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Carousel.css'
let data = [
    {
        src: "https://images.pexels.com/photos/1082343/pexels-photo-1082343.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "ριzzα тσ∂αу, ѕαℓα∂ тσмσяяσω",
    },
    {
        src: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "𝓟𝓲𝔃𝔃𝓪 𝓶𝓮𝓪𝓷𝓼 𝓗𝓪𝓹𝓹𝓲𝓷𝓮𝓼𝓼",
    },
    {
        src: "https://images.pexels.com/photos/842519/pexels-photo-842519.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "𝔜𝔬𝔲’𝔯𝔢 𝔫𝔢𝔳𝔢𝔯 𝔣𝔲𝔩𝔩 𝔬𝔣 𝔓𝔦𝔷𝔷𝔞",
    },
    {
        src: "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "ᕼᗩᑭᑭY ᖴᗩᑕEᔕ ᑕOᗰE ᖴᖇOᗰ TᕼE ᑭIᘔᘔᗩ"
    },
    {
        src: "https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "𝙽𝚘 𝚘𝚗𝚎 𝚒𝚜 𝚙𝚎𝚛𝚏𝚎𝚌𝚝, 𝚎𝚡𝚌𝚎𝚙𝚝 𝙿𝚒𝚣𝚣𝚊"
    }
]
function Car() {
    return (
        <div className="background">
            <Carousel variant="dark" bg="dark">
                <Carousel.Item>
                    <Row className="align-items-center">
                        <Col md="auto">
                            <img
                                className="d-block rounded "
                                src={data[0].src}
                                alt="First slide"
                            />
                        </Col>
                        <Col>
                            <h1 className=''>{data[0].caption}</h1>
                        </Col>
                    </Row>

                </Carousel.Item>
                <Carousel.Item>
                    <Row className="align-items-center">
                        <Col md="auto">
                            <img
                                className="d-block rounded "
                                src={data[1].src}
                                alt="First slide"
                            />
                        </Col>
                        <Col>
                            <h1 className=''>{data[1].caption}</h1>
                        </Col>
                    </Row>

                </Carousel.Item>
                <Carousel.Item>
                    <Row className="align-items-center">
                        <Col md="auto">
                            <img
                                className="d-block rounded "
                                src={data[2].src}
                                alt="First slide"
                            />
                        </Col>
                        <Col>
                            <h1 className=''>{data[2].caption}</h1>
                        </Col>
                    </Row>

                </Carousel.Item>
                <Carousel.Item>
                    <Row className="align-items-center">
                        <Col md="auto">
                            <img
                                className="d-block rounded "
                                src={data[3].src}
                                alt="First slide"
                            />
                        </Col>
                        <Col>
                            <h1 className=''>{data[3].caption}</h1>
                        </Col>
                    </Row>

                </Carousel.Item>
                <Carousel.Item>
                    <Row className="align-items-center">
                        <Col md="auto">
                            <img
                                className="d-block rounded "
                                src={data[4].src}
                                alt="First slide"
                            />
                        </Col>
                        <Col>
                            <h1 className=''>{data[4].caption}</h1>
                        </Col>
                    </Row>

                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Car;