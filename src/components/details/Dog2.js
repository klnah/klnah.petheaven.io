import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import dog2 from '../img/dog2.jpg';
import { useNavigate } from 'react-router-dom';
import '../css/details.css';

const Dog2 = () =>{
    const navigate = useNavigate();

    return (
        <>
            <div className='view-container'>
                <h2 className="h2-text">A Blessing for Each</h2>
                <div className="card-container">
                    <Card style={{ width: '40rem' }}>
                        <Card.Img variant="top" src={dog2} />
                        <Card.Body>
                            <Card.Title className='card-title'>Tuktuk</Card.Title>
                            <Card.Text className='description'>
                                <p>Age : 4 Year Old</p>
                                <p>Breed : Shiba Inu</p>
                                <p>Gender : Female</p>
                                <p>Description : Tuktuk ccam to us in July 2024 with an injured paw, and
                                    though she's a bit wary of strangers at first, she's made incredible progress.
                                    With Patience and a gentle approach, Tuktuk thrives on consent-based training
                                    and will need a calm, understanding home where she can build trust at her own pace.
                                </p>
                                <p>
                                    She's looking for an experienced owner who will respect her boundaries and
                                    give her the time she needs to feel comfortable. In return, Tuktuk will offer unwavering 
                                    loyalty and love to those who earn her trust.
                                </p>
                                <p>If you think you could be the perfect match for Tuktuk, she'd love to meet you!</p>

                            </Card.Text>
                            <Button onClick={() => navigate("/adoptform")} className='btn-adopt' variant="primary">Adopt Me</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            
        </>
    );

    
}


export default Dog2;