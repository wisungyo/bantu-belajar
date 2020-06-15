import React from 'react';

import { Pagination } from 'react-bootstrap';

// importing css
import './style-news-full.css';

// importing card component
import Card from './card';

function index() {
  return (
    <div className="news-main-wrapper">
      <h1>Berita</h1>
      <div className="news-full-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination className="pagination-wrapper">
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        
        <Pagination.Ellipsis />
        
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </div>
  )
}

export default index
