import styled from 'styled-components/macro'
import { DateRange } from 'react-date-range'


export const DateRangeStyled = styled(DateRange)`
  position: absolute;
  top: 52px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  margin-top: 1rem;

  .rdrDateDisplayWrapper {
    border-radius: 3px 3px 0 0 ;
  }
`