import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import dog4 from '../img/dog4.jpeg';
import { useNavigate } from 'react-router-dom';
import '../css/details.css';

const Dog4 = () =>{
    const navigate = useNavigate();

    return (
        <>
            <div className='view-container'>
                <h2 className="h2-text">A Blessing for Each</h2>
                <div className="card-container">
                    <Card style={{ width: '40rem' }}>
                        <Card.Img variant="top" src={dog4} />
                        <Card.Body>
                            <Card.Title className='card-title'>Bolt</Card.Title>
                            <Card.Text className='description'>
                                <p>Age : 6 Month Old</p>
                                <p>Breed : Bull Terrier</p>
                                <p>Gender : Male</p>
                                <p>Description : Bolt came to us in June 2024. While Bolt is generally
                                    friendly, he can be a bit shy around unfamiliar people, but with time
                                    and patience, he warms up and shows his true, affectionate side.
                                </p>
                                <p>
                                    Bolt thrives well in company of other dogs and would do well in a home
                                    with a canine companion to help him build more confidence and feel more secure.
                                </p>
                                <p>With the right family, Bolt will flourish into a loyal and loving companion. Could you
                                    offer him the forever home he deserves?
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
export default Dog4;