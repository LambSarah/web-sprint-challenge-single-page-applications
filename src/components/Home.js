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

// Styles for navbar
const NavbarDiv = styled.div({
  background: 'smoke',
  textAlign: 'center',
  fontSize: '18px',
  fontFamily: 'Sigmar One',
});

// Styles for Jumbotron
const JumboH1Div = styled.h1({
  textAlign: 'center',
  fontFamily: 'Sigmar One',
});

// Rendering the Home Page
const Home = () => {
  return (
    <>
      {/* Page Title*/}
      <NavbarDiv className='navbar'>
        <NavbarText>
          <h1> Lambda Eats </h1>
        </NavbarText>

        {/*Navigation*/}
        <div>
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

      {/* Jumbotron displaying pizza button*/}
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
              <Link name='pizzaButton' to='/pizza'>
                Pizza?
              </Link>
            </Button>
          </p>
        </Jumbotron>
      </div>

      {/* Cards for other restaurants to order from*/}
      <div className='RestaurantCardsDiv'>
        <h3>Food Delivery in Gotham City</h3>
        <CardGroup>
          <Card body className='text-center'>
            <CardImg
              top
              width='100%'
              src={require('./Assets/mcdonalds.jpg')}
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
            <CardImg
              top
              width='100%'
              src={require('./Assets/sweetgreen.png')}
              alt='sweetgreen logo'
            />
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
            <CardImg
              top
              width='100%'
              src={require('./Assets/starbucks.png')}
              alt='Starbucks logo'
            />
            <Card body className='text-center'>
              <CardTitle tag='h4'>Starbucks</CardTitle>
              <CardSubtitle tag='h5'>
                $ - Cafe - Coffee & Tea - Breakfast & Brunch
              </CardSubtitle>
              <CardText>
                <Button className='m-2'>10-20 Min</Button>
                <Button className='m-2'>
                  $3.99 Delivery{' '}
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
