import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContact = styled(Form)`
  border: 1px solid black;
  width: 450px;
  display: block;
  padding: 15px;
  margin: 0;
`;

export const ErrorText = styled(ErrorMessage)`
  color: tomato;
`;

export const Label = styled.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.15;
`;

export const Input = styled(Field)`
  all: unset;
  display: flex;
  border: 2px solid black;
  margin: 10px 0;
  padding: 15px;
  font-size: 20px;
  &:focus-visible {
    border-radius: 4px;
    border: 3px solid lightblue;
  }
`;
