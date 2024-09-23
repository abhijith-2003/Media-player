import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>

      <Navbar className="bg-info">
        <Container>

          <Navbar.Brand className='fw-bolder'>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'orangered' }}>
              <i class="fa-solid fa-headphones-simple"></i> Media Player</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}