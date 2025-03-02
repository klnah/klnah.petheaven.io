import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import cat4 from '../img/cat4.png';
import { useNavigate } from 'react-router-dom';
import '../css/details.css';

const Cat4 = () =>{
    const navigate = useNavigate();

    return (
        <>
            <div className='view-container'>
                <h2 className="h2-text">A Blessing for Each</h2>
                <div className="card-container">
                    <Card style={{ width: '40rem' }}>
                        <Card.Img variant="top" src={cat4} />
                        <Card.Body>
                            <Card.Title className='card-title'>Angel</Card.Title>
                            <Card.Text className='description'>
                                <p>Age : 6 Month Old</p>
                                <p>Breed : Munchkin</p>
                                <p>Gender : Female</p>
                                <p>Description : Angel is an exceptionally cute and precious female kitten,
                                    about 6 months old. A loving and happy little girl, always interested
                                    in the world around her. She is starting to eat solid food.
                                </p>
                                <p>
                                    If you can open your heart to this little cat, willing to kitten-proof the home
                                    and provide mixture of good quality soft and dry food, please come and see Angel.
                                </p>
                                <p></p>

                            </Card.Text>
                            <Button onClick={() => navigate("/adoptform")} className='btn-adopt' variant="primary">Adopt Me</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            
        </>
    );

    
}



export default Cat4;