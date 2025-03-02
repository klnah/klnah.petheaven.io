import React  from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import cat3 from '../img/cat3.jpg';
import { useNavigate } from 'react-router-dom';
import '../css/details.css';

const Cat3 = () =>{
    const navigate = useNavigate();

    return (
        <>
            <div className='view-container'>
                <h2 className="h2-text">A Blessing for Each</h2>
                <div className="card-container">
                    <Card style={{ width: '40rem' }}>
                        <Card.Img variant="top" src={cat3} />
                        <Card.Body>
                            <Card.Title className='card-title'>Neko</Card.Title>
                            <Card.Text className='description'>
                                <p>Age : 3 Year Old</p>
                                <p>Breed : Scottish Fold</p>
                                <p>Gender : Female</p>
                                <p>Description : Introducing Neko, a very sweet dear, about 3 years old sterilized.
                                    She has nice bright eyes, a lovely coat and not mention a beautiful face.
                                    She is a laid back and a quiet cat. She is independent but gets
                                    along with other cats. She would do wonderfully in a home as an only
                                    cat, or with one other gentle cat as a companion.
                                </p>
                                <p>
                                    Neko was heartlessly abandoned on the street one late night.
                                </p>
                                <p>
                                    If you can open your heart to this sweetheart, willing to cat-proof the home
                                    and provide a mixture of good quality soft and dry food, come and vist Neko.
                                </p>

                            </Card.Text>
                            <Button onClick={() => navigate("/adoptform")} className='btn-adopt' variant="primary">Adopt Me</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            
        </>
    );

    
}





export default Cat3;