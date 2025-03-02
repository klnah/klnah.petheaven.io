import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import dog1 from '../img/dog1.jpg';
import { useNavigate } from 'react-router-dom';
import '../css/details.css';

const Dog1 = () =>{
    const navigate = useNavigate();

    return (
        <>
            <div className='view-container'>
                <h2 className="h2-text">A Blessing for Each</h2>
                <div className="card-container">
                    <Card style={{ width: '40rem' }}>
                        <Card.Img variant="top" src={dog1} />
                        <Card.Body>
                            <Card.Title className='card-title'>Max</Card.Title>
                            <Card.Text className='description'>
                                <p>Age : 2 Year Old</p>
                                <p>Breed : Labrador Retriever</p>
                                <p>Gender : Male</p>
                                <p>Description : Max's personality can be summed up as 'affectionately cheeky'.
                                    Initially a timid and fearful puppy, Max has transformed over the years
                                    into a lovable and easy dog, thanks to the efforts of his caregivers prior to 
                                    his arrival at our kennels.
                                </p>
                                <p>He loves his treats and attention. He will make a perfect companion for someone looking to 
                                    share their home with an affectionate and clingy boy
                                </p>
                                <p>
                                    Max is suitable for first time adopters and will be your best boy with a little
                                    bonding and traing. Come and see Max, He would certainly love to see you.
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




export default Dog1;