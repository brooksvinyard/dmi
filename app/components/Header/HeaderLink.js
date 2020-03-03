import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  margin: 0 20px;

  &:hover {
    border-bottom: 2px solid white;
  }
`;
