import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  Navbar,
  Nav,
  NavItem,
  NavbarText,
} from 'reactstrap';
import styled from 'styled-components';
import * as Yup from 'yup';
import axios from 'axios';

const NavItemDiv = styled.p({
  padding: '5px',
  margin: '10px',
});

const NavbarDiv = styled.div({
  background: 'smoke',
  textAlign: 'center',
  fontSize: '18px',
  fontFamily: 'Sigmar One',
  margin: '20px',
  padding: '20px',
});

const OrderPizzaForm = () => {
  const firstRender = useRef(true);

  const [disabled, setDisabled] = useState(true);

  const [pizzaForm, setPizzaForm] = useState({
    nameInput: '',
    size: '',
    sauce: '',
    pepperoni: false,
    beef: false,
    canadianBacon: false,
    italianSausage: false,
    grilledChicken: false,
    extraCheese: false,
    onions: false,
    bellpeppers: false,
    blackOlives: false,
    pineapple: false,
    specRequests: '',
    quantity: '',
  });

  const formSchema = Yup.object().shape({
    nameInput: Yup.string()
      .required('Must include Name for order.')
      .min(2, 'Name must be at least 2 letters long.'),
    size: Yup.string()
      .oneOf(['small', 'medium', 'large', 'ex-large'])
      .required('Please select a size.'),
    sauce: Yup.string()
      .oneOf(['marinara', 'alfredo', 'bbq', 'ranch'])
      .required('Must choose a sauce.'),
  });

  const [errors, setErrors] = useState({
    name: '',
    size: '',
  });

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (formSchema.isValid(pizzaForm)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formSchema, pizzaForm]);

  const handleChange = (event) => {
    // eslint-disable-next-line no-unused-vars
    const { name, type, value, checked } = event.target;
    const updatedInfo = type === 'checkbox' ? checked : value;
    setPizzaForm({ ...pizzaForm, [name]: updatedInfo });
    Yup.reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setErrors({
          ...errors,
          [name]: '',
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
    setPizzaForm({
      ...pizzaForm,
      [name]: value,
    });
  };

  const [postOrder, setPostOrder] = useState('');

  const submitOrder = (e) => {
    e.preventDefault();
    console.log('submitted!');
    axios
      .post('https://reqers.in/api/users', pizzaForm)
      .then((res) => {
        setPostOrder(res.data);
        console.log('success', res);
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <>
      <NavbarDiv className='navbar'>
        <NavbarText>
          <h1> Lambda Eats </h1>
        </NavbarText>

        <div>
          <Navbar className='ml-auto' color='dark' expand='md'>
            <Router>
              <Nav className='ml-auto' navbar>
                <NavItemDiv>
                  <NavItem>
                    <Link to='/'>Home</Link>
                  </NavItem>
                </NavItemDiv>
                <NavItemDiv>
                  <NavItem>Help</NavItem>
                </NavItemDiv>
              </Nav>
            </Router>
          </Navbar>
        </div>
      </NavbarDiv>

      <div className='formWrapper'>
        <Form name='pizzaForm'>
          <h2>Build Your Own Pizza</h2>

          <FormGroup>
            <Label>
              <Input
                value={pizzaForm.nameInput}
                type='text'
                name='nameInput'
                placeholder='Name'
                onChange={handleChange}></Input>
            </Label>
          </FormGroup>
          <FormGroup row>
            <Col sm={1}></Col>
            <Label for='size' sm={2}>
              Choose Size:
            </Label>
            <Col sm={8}>
              <Input
                type='select'
                name='size'
                id='size'
                onChange={handleChange}>
                <option>Select</option>
                <option value='small'>Small-8" (6 slices)</option>
                <option value='medium'>Medium-12" (8 slices)</option>
                <option value='large'>Large-14" (10 slices)</option>
                <option value='ex-large'>Extra Large-18" (12 slices)</option>
              </Input>
            </Col>
          </FormGroup>
          <hr />
          <FormGroup tag='fieldset' row>
            <Col sm={1}></Col>
            <label className='col-form-label col-sm-2'>
              Choose Your Sauce:
            </label>
            <Col lg={8}>
              <FormGroup check>
                <Label check>
                  <Input
                    type='radio'
                    name='sauce'
                    value='marinara'
                    checked={pizzaForm.sauce === 'marinara'}
                    onChange={handleChange}
                  />{' '}
                  Marinara
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type='radio'
                    name='sauce'
                    value='alfredo'
                    checked={pizzaForm.sauce === 'alfredo'}
                    onChange={handleChange}
                  />
                  Alfredo
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type='radio'
                    name='sauce'
                    value='bbq'
                    checked={pizzaForm.sauce === 'bbq'}
                    onChange={handleChange}
                  />{' '}
                  Zesty BBQ
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type='radio'
                    name='sauce'
                    value='ranch'
                    checked={pizzaForm.sauce === 'ranch'}
                    onChange={handleChange}
                  />{' '}
                  Ranch
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <hr />
          <FormGroup row>
            <div className='col-1'></div>
            <div className='col-3'>
              <h3>Add Toppings</h3>
            </div>

            <div name='toppings' className='col-sm-6 .order-sm-2 .offset-sm-1'>
              <FormGroup check inline row>
                <Label check>
                  <Input
                    name='pepperoni'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  Pepperoni
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input name='beef' type='checkbox' />
                  Beef
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input name='canadianBacon' type='checkbox' />
                  Canadian Bacon
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input name='grilledChicken' type='checkbox' />
                  Grilled Chicken
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type='checkbox' />
                  Italian Sausage
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type='checkbox' />
                  Extra Cheese
                </Label>
              </FormGroup>

              <FormGroup check inline>
                <Label check>
                  <Input type='checkbox' />
                  Onions
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type='checkbox' />
                  BellPeppers
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type='checkbox' />
                  Black Olives
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type='checkbox' />
                  Pineapple
                </Label>
              </FormGroup>
              <Col lg={6}>
                <FormGroup row>
                  <div className='col-1'></div>
                  <Label>
                    Special Requests:{' '}
                    <Input
                      type='textarea'
                      name='specRequests'
                      placeholder='Anything to add?'
                      onChange={handleChange}
                    />
                  </Label>
                </FormGroup>
              </Col>
              <div className='.col-sm-6 .order-sm-2 .offset-sm-1'>
                <FormGroup>
                  <InputGroup size='sm'>
                    <Input
                      placeholder='Quantity'
                      min={0}
                      max={10}
                      type='number'
                      step='1'
                    />
                  </InputGroup>
                </FormGroup>
              </div>
              <FormGroup>
                <Label>Add to Order?</Label>
                <Button
                  name='submitButton'
                  onClick={submitOrder}
                  disabled={disabled}>
                  Submit
                </Button>
              </FormGroup>
            </div>
          </FormGroup>
        </Form>
      </div>
      <pre>{JSON.stringify(postOrder, null, 2)}</pre>
    </>
  );
};
export default OrderPizzaForm;
