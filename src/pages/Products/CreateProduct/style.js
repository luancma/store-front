import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const SRow = styled.div`
  width: 100%;
`;

export const ButtonGroup = styled(Grid)`
  margin-top: 1rem;
  margin-bottom: 1rem;

  & button:last-child {
    margin-right: 0.5rem;
  }
`;
