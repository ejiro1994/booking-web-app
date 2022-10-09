import React from 'react'
import { SearchItem, SearchText, SearchIconColor } from '../Header.styled'
import { DateRangeStyled } from './HeaderDateSearch.styled'
import { DateRange, Range, RangeKeyDict } from 'react-date-range'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBed,
  faPerson,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns'
import { HeaderState } from '../Header'

interface HeaderDateSearchProps {
  setStateOpenDate: () => void
  setStateDateRange: (item: RangeKeyDict) => void
  state: HeaderState
}

interface Selection {
  selection: HeaderState
}

function HeaderDateSearch(props: HeaderDateSearchProps) {
  return (
    <SearchItem justify={'center'}>
      <FontAwesomeIcon icon={faCalendarDays} color={SearchIconColor} />
      <SearchText
        onClick={() => {
          props.setStateOpenDate()
        }}
      >{`${format(props.state.startDate!, 'dd/MM/yyyy')} to ${format(
        props.state.endDate!,
        'dd/MM/yyyy'
      )}`}</SearchText>
      {props.state.openDate && (
        <DateRangeStyled
          editableDateInputs={true}
          onChange={(item: RangeKeyDict) => props.setStateDateRange(item)}
          moveRangeOnFirstSelection={false}
          ranges={[props.state]}
        />
      )}
    </SearchItem>
  )
}

export default HeaderDateSearch
