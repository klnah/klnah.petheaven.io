import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import cat1 from './img/cat1.jpg';
import cat2 from './img/cat2.jpg';
import cat3 from './img/cat3.jpg';
import cat4 from './img/cat4.png';
import dog1 from './img/dog1.jpg';
import dog2 from './img/dog2.jpg';
import dog3 from './img/dog3.jpg';
import dog4 from './img/dog4.jpeg';
// import Cat1 from '../components/details/Cat1';
import './css/view.css';
import { useNavigate } from 'react-router-dom';

const ViewPet = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='view-container'>
        <h2 className="h2-text">A Blessing for Each</h2>
        <div className='card-container'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cat1} />
            <Card.Body>
              <Card.Title className='card-title'>Princess</Card.Title>
              <Card.Text>
                <p>3 Year Old, Persian</p>
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/Cat1")}>Find Out More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cat2} />
            <Card.Body>
              <Card.Title className='card-title'>Simba</Card.Title>
              <Card.Text>
                <p>2 Year Old, Calico</p>
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/Cat2")}>Find Out More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cat3} />
            <Card.Body>
              <Card.Title className='card-title'>Neko</Card.Title>
              <Card.Text>
                <p>3 Year Old, Scottish Fold</p>
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/Cat3")}>Find Out More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cat4} />
            <Card.Body>
              <Card.Title className='card-title'>Angel</Card.Title>
              <Card.Text>
                <p>6 Month Old, Munchkin</p>
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/Cat4")}>Find Out More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className='card-container'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={dog1} />
            <Card.Body>
              <Card.Title className='card-title'>Max</Card.Title>
              <Card.Text>
                <p>2 Year Old, Labrador Retriever</p>
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/Dog1")}>Find Out More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={dog2} />
            <Card.Body>
              <Card.Title className='card-title'>Tuktuk</Card.Title>
              <Card.Text>
                4 Year Old, Shiba Inu
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/Dog2")}>Find Out More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={dog3} />
            <Card.Body>
              <Card.Title className='card-title'>Leo</Card.Title>
              <Card.Text>
                2 Year Old, Chihuahua
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/Dog3")}>Find Out More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={dog4} />
            <Card.Body>
              <Card.Title className='card-title'>Bolt</Card.Title>
              <Card.Text>
                <p>6 Month Old, Bull Terrier</p>
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/Dog4")}>Find Out More</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

    </>

  );


}

export default ViewPet;