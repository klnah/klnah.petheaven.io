import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import cat1 from '../img/cat1.jpg';
import { useNavigate } from 'react-router-dom';
import '../css/details.css';



const Cat1 = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='view-container'>
                <h2 className="h2-text">A Blessing for Each</h2>
                <div className="card-container">
                    <Card style={{ width: '40rem' }}>
                        <Card.Img variant="top" src={cat1} />
                        <Card.Body>
                            <Card.Title className='card-title'>Princess</Card.Title>
                            <Card.Text className='description'>
                                <p>Age : 3 Year Old</p>
                                <p>Breed : Persian</p>
                                <p>Gender : Female</p>
                                <p>Description : Meet Princess. She's a sweet female persian, about 3 years old sterilized.
                                    Easy-going with a good all-round nature. She likes to explore the surroundings.
                                    As much as she likes her adventures, she is always up for a chill time.
                                    Great for first time cat owners.
                                </p>
                                <p>Princess was one of the cats rescued on the side of an abandoned park.</p>
                                <p>If you would like to meet and get to know this sweetie, willing to cat-proof your Home
                                    and provide a mixture of good quality soft and dry food, please click the button below.
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


            export default Cat1;