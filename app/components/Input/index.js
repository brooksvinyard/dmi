import styled from 'styled-components';

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #2400493b;
  background-color: #f0f0f0;
  padding: 12px 20px;
  width: 100%;
  margin: 10px 0;

  &:hover,
  &:focus {
    border-bottom: 2px solid #240049;
    outline: none;
  }
`;

export default Input;
