import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBed,
  faPerson,
} from '@fortawesome/free-solid-svg-icons'
import {
  Wrapper,
  Container,
  Title,
  Description,
  Search,
  SearchInput,
  SearchItem,
  SearchText,
  SearchIconColor,
  Button,
} from './Header.styled'
import Options from './Options/Options'


import {  Range, RangeKeyDict } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file

import HeaderList from './HeaderList/HeaderList'
import HeaderDateSearch from './HeaderDateSearch/HeaderDateSearch'

interface IProps {}

export interface HeaderState extends Range {
  openDate: boolean
  openOption: boolean
  occupancy: { adult: number; children: number; room: number }
}

export default class Header extends React.Component<IProps, HeaderState> {
  state: HeaderState = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
    color: '#003580',
    showDateDisplay: true,
    openDate: false,
    openOption: false,
    occupancy: {
      adult: 1,
      children: 0,
      room: 1,
    },
  }

  handleOption = (
    operation: 'd' | 'i',
    name: 'adult' | 'children' | 'room'
  ): void => {
    let prevState = { ...this.state.occupancy }
    prevState[name] =
      operation === 'd' ? prevState[name] - 1 : prevState[name] + 1
    this.setState({ occupancy: prevState })

    // switch (operation) {
    //   case 'd':
    //     prevState[name] = Math.max(0, prevState[name] - 1)
    //     break
    //   case 'i':
    //     prevState[name] += 1
    //     break
    // }

    // if (operation === 'i') {
    //   if (name === 'adult') {
    //     prevState.adult += 1
    //   } else if (name === 'children') {
    //     prevState.children += 1
    //   } else if (name === 'room') {
    //     prevState.room += 1
    //   }
    // } else if (operation === 'd') {
    //   if (name === 'adult') {
    //     prevState.adult = Math.max(0, prevState.adult - 1);

    //   } else if (name === 'children') {
    //     prevState.children -= 1
    //   } else if (name === 'room') {
    //     prevState.room -= 1
    //   }
    // }

    // if(operation === 'd') {
    // prevState[name] = Math.max(0, prevState[name] - 1);

    //  }
    // else if (operation === 'i') {
    // prevState[name]  = Math.max(2, prevState[name] + 1);

    // }
  }


  setStateOpenDate = () => {
    this.setState({ openDate: !this.state.openDate })
}

setStateDateRange = (item: RangeKeyDict) => {
  this.setState(item.selection)
}
  render() {
    return (
      <Wrapper>
        <Container>
          <HeaderList />
          <Title>Find your next stay</Title>
          <Description>
            Search low prices on hotels, homes and much more...
          </Description>
          <Search>
            <SearchItem justify={'center'}>
              <FontAwesomeIcon icon={faBed} color={SearchIconColor} />
              <SearchInput placeholder='Where are you going?' type='text' />
            </SearchItem>
          <HeaderDateSearch  setStateOpenDate={this.setStateOpenDate} setStateDateRange={this.setStateDateRange} state={this.state}/>
            <SearchItem justify={'spaceAround'}>
              <FontAwesomeIcon icon={faPerson} color={SearchIconColor} />
              <SearchText
                onClick={() => {
                  this.setState({ openOption: !this.state.openOption })
                }}
              >{`${this.state.occupancy.adult} adult . ${this.state.occupancy.children} children . ${this.state.occupancy.room} room`}</SearchText>
              {this.state.openOption && (
           <Options handleOption={this.handleOption} state={this.state}/>
              )}
            </SearchItem>
            <SearchItem>
              <Button>Search</Button>
            </SearchItem>
          </Search>
        </Container>
      </Wrapper>
    )
  }
}
