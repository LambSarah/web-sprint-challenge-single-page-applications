import React, { useState } from 'react';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin:'10px 30%',
  padding:'20px 40px'
`;

const OrderPizzaForm = () => {
  const [pizzaForm, setPizzaForm] = useState({
    size: '',
    sauce: '',
    toppings: '',
    crust: '',
    specRequests: '',
    quantity: '',
  });

  const handleChange = (event) => {};

  return (
    <>
      <StyledDiv>
        <div className='formWrapper'>
          <Form>
            <h2>Build Your Own Pizza</h2>
            <FormGroup row>
              <Col sm={1}></Col>
              <Label for='size' sm={2}>
                Size:
              </Label>
              <Col sm={8}>
                <Input type='select' name='size' id='size'>
                  <option disabled>Select</option>
                  <option>Small-8" (6 slices)</option>
                  <option>Medium-12" (8 slices)</option>
                  <option>Large-14" (10 slices)</option>
                  <option>Extra Large-18" (12 slices)</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup tag='fieldset' row>
              <Col sm={1}></Col>
              <label className='col-form-label col-sm-2'>
                Choose Your Sauce:
              </label>
              <FormGroup check>
                <Label check>
                  <Input type='radio' name='marinara' /> Marinara
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type='radio' name='alfredo' />
                  Alfredo
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup>
              <div className='toppings' name='toppings'>
                <h3>Add Toppings</h3>
                <p>Choose up to 10</p>
                <FormGroup check inline>
                  <Label check>
                    <Input type='checkbox' />
                    Pepperoni
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input type='checkbox' />
                    Beef
                  </Label>
                </FormGroup>
              </div>
            </FormGroup>
            <label>
              Special Requests:{' '}
              <input
                type='textarea'
                name='specRequests'
                onChange={handleChange}
              />
            </label>
          </Form>
        </div>
      </StyledDiv>
    </>
  );
};
export default OrderPizzaForm;
