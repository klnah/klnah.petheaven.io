import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import dog3 from '../img/dog3.jpg';
import { useNavigate } from 'react-router-dom';
import '../css/details.css';

const Dog3 = () =>{
    const navigate = useNavigate();

    return (
        <>
            <div className='view-container'>
                <h2 className="h2-text">A Blessing for Each</h2>
                <div className="card-container">
                    <Card style={{ width: '40rem' }}>
                        <Card.Img variant="top" src={dog3} />
                        <Card.Body>
                            <Card.Title className='card-title'>Leo</Card.Title>
                            <Card.Text className='description'>
                                <p>Age : 2 Year Old</p>
                                <p>Breed : Chihuahua</p>
                                <p>Gender : Male</p>
                                <p>Description : Little Leo is a delightful little fellow who loves his humans dearly.
                                    Initially shy around strangers, once Leo warms up to you, he becomes the
                                    most affectionate companion, eager to cuddle in your lap after some play time fun.
                                </p>
                                <p>
                                    Leo is comfortable riding in cars, walking on a leash, and even enjoys kayaking--anything
                                    to be close to his people. His cheerful demeanor and compatibility with other dogs,
                                    regardless of size, make him an exceptional pet who could easily become your most cherished companion.
                                </p>
                                <p>Please come down to visit Leo to get to know him more!</p>

                            </Card.Text>
                            <Button onClick={() => navigate("/adoptform")} className='btn-adopt' variant="primary">Adopt Me</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            
        </>
    );

    
}
export default Dog3;