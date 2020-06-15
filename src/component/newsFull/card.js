import React from 'react'

// importing component from react bootstrap
import { Card } from 'react-bootstrap';

// importing pics
import NewsCard1 from '../../assets/img/news-card1.png';

// importing css
import './style-news-full.css';

function card() {
  return (
    <Card className="card-news">
      <Card.Img variant="top" src={NewsCard1} />
      <Card.Body className="card-body-wrapper">
        <Card.Title className="card-title">Literasi Baca Indonesia Rendah, 
          Akses Baca Diduga Jadi Penyebab</Card.Title>
        <div className="info-source-wrapper">
          <div className="info-source">Kompas.com</div>
          <div className="info-date align-right">Senin, 11 Mei 2020</div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default card;



