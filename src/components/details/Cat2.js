import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import cat2 from '../img/cat2.jpg';
import { useNavigate } from 'react-router-dom';
import '../css/details.css';

const Cat2 = () =>{
    const navigate = useNavigate();

    return (
        <>
            <div className='view-container'>
                <h2 className="h2-text">A Blessing for Each</h2>
                <div className="card-container">
                    <Card style={{ width: '40rem' }}>
                        <Card.Img variant="top" src={cat2} />
                        <Card.Body>
                            <Card.Title className='card-title'>Simba</Card.Title>
                            <Card.Text className='description'>
                                <p>Age : 2 Year Old</p>
                                <p>Breed : Calico</p>
                                <p>Gender : Male</p>
                                <p>Description : 2 Year Old Simba was born and rescured from the street.
                                    He is thriving in a home enviroment. 
                                </p>
                                <p>Simba is very friendly and affectionate. He will greet his caregiver
                                    whenever he sees her. Also, he is very calm and easygoing. Hence he wil be perfect
                                    for your cat or first time owners. He will be a good playmate and companionship.
                                </p>
                                <p>
                                    He has been sterilized, vaccinated and tested negative for felv and fiv.
                                    If you are a genuine adopter, please come visit Simba to get to know him More.
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


export default Cat2;