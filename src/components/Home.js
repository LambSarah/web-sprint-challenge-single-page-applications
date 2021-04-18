import React from 'react';
import styled from 'styled-components';
import OrderPizzaForm from './OrderPizzaForm.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  NavbarText,
  Jumbotron,
  Button,
  CardGroup,
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap';

const NavbarDiv = styled.div({
  background: 'smoke',
  textAlign: 'center',
  fontSize: '18px',
  fontFamily: 'Sigmar One',
});

const JumboH1Div = styled.h1({
  textAlign: 'center',
  fontFamily: 'Sigmar One',
});

const Home = () => {
  return (
    <>
      <NavbarDiv className='navbar'>
        <NavbarText>
          <h1> Lambda Eats </h1>
        </NavbarText>

        <div className='Home'>
          <Navbar className='ml-auto' color='dark' dark expand='md'>
            <Router>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <Link to='/'>Home</Link>
                </NavItem>

                <NavItem>Help</NavItem>
              </Nav>
            </Router>
          </Navbar>
        </div>
      </NavbarDiv>
      <div>
        <Jumbotron fluid>
          <JumboH1Div className='display-3'>
            Your favorite food, delivered while coding{' '}
          </JumboH1Div>

          <p className='lead'>
            <Button
              className='col-sm-12 col-md-6 offset-md-3'
              color='danger'
              size='lg'>
              <Link to='/pizza'>Pizza?</Link>
            </Button>
          </p>
        </Jumbotron>
      </div>

      <div className='RestaurantCardsDiv'>
        <h3>Food Delivery in Gotham City</h3>
        <CardGroup>
          <Card body className='text-center'>
            <CardImg
              top
              width='100%'
              src='./Assets/mcdonalds.svg'
              alt='McDonalds logo'
            />
            <Card body className='text-center'>
              <CardTitle tag='h4'>McDonald's</CardTitle>
              <CardSubtitle tag='h5' className='mb-2 text-muted'>
                $ - American - Fast Food - Burgers
              </CardSubtitle>
              <CardText>
                <Button className='m-2'>20-30 Min</Button>
                <Button className='m-2'>$5.99 Delivery Fee</Button>
              </CardText>
            </Card>
          </Card>
          <Card body className='text-center'>
            <CardImg top width='100%' src='#' alt='sweetgreen logo' />
            <Card body className='text-center'>
              <CardTitle tag='h4'>sweetgreen</CardTitle>
              <CardSubtitle tag='h5'>$ - Healthy - Salads</CardSubtitle>
              <CardText>
                <Button className='m-2'>30-45 Min</Button>
                <Button className='m-2'>$4.99 Delivery Fee</Button>
              </CardText>
            </Card>
          </Card>
          <Card body className='text-center'>
            <CardImg top width='100%' src='#' alt='sweetgreen logo' />
            <Card body className='text-center'>
              <CardTitle tag='h4'>sweetgreen</CardTitle>
              <CardSubtitle tag='h5'>$ - Healthy - Salads</CardSubtitle>
              <CardText>
                <Button className='m-2'>30-45 Min</Button>
                <Button className='m-2'>
                  $4.99 Delivery{' '}
                  <Route path='/pizza' component={OrderPizzaForm} />
                </Button>
              </CardText>
            </Card>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};
export default Home;
