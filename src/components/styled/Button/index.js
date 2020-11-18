import { Button } from '@material-ui/core';
import styled from 'styled-components';

const SButton = styled(Button)`
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export default SButton;
