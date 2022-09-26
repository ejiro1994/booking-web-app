import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

import { DateRange, Range } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file

import { format } from 'date-fns'

const Wrapper = styled.div`
  background-color: #003580;
  color: #ffffff;
  display: flex;
  justify-content: center;
  position: relative;
`
const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px 0px 100px 0px;
`
const List = styled.div`
  display: flex;
  gap: 40px;
  padding: 1rem 0 3rem;
`
const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
  cursor: pointer;
`
const Description = styled.p`
  margin: 20px, 0px;
  font-size: 1.5rem;
  font-family: SilkaExtraLight;
  margin-top: 1rem;
`
const Title = styled.h1`
  font-family: 'SilkaSemiBold';
  font-size: 3rem;
  margin-top: 4rem;
`
const Button = styled.button`
  all: unset;
  background-color: #0071c2;
  color: #fff;
  font-weight: 500;
  padding: 10px;
  cursor: pointer;
`
const Search = styled.div`
  height: 52px;
  background-color: #fff;
  border: 4px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 10px 0px;
  border-radius: 5px;
  position: absolute;
  width: 100%;
  max-width: 1024px;
  bottom: -25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`
const SearchText = styled.span`
  color: lightgray;
  cursor: pointer;
`
const SearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  /* cursor: pointer; */
`
const SearchInput = styled.input`
  border: none;
  outline: none;
`

const DateRangeStyled = styled(DateRange)`
  position: absolute;
  top: 52px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
margin-top: 1rem;


`

const Options = styled.div`
margin-top: 1rem;
  position: absolute;
  top: 52px;
  background-color: #fff;
  color: grey;
  border-radius: 3px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`
const OptionItem = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  margin: 20px;
  font-size: 0.75rem;
  align-items: center;
`
const OptionText = styled.span`
color: #222222;
  > span {
    font-size: 0.6rem;
    display: block;
    color: grey;
    margin-top: 3px
  }
`
const OptionCounterButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid rgba(0, 113, 194, 0.5);
  color: #0071c2;
  border-radius: 3px;
  background-color: #fff;
`
const OptionCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  /* > span {
   width: 100%;
    display:flex;
    justify-content: center
  } */
`

const SearchIconColor = 'lightgray'

interface IProps {}

interface IState extends Range {
  openDate: boolean
  occupancy: { adult: number; children: number; room: number }
}

export default class Header extends React.Component<IProps, IState> {
  state: IState = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
    color: '#003580',
    showDateDisplay: true,
    openDate: false,
    occupancy: {
      adult: 1,
      children: 0,
      room: 1,
    },
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <List>
            <ListItem>
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </ListItem>
            <ListItem>
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </ListItem>
            <ListItem>
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </ListItem>
            <ListItem>
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </ListItem>
            <ListItem>
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </ListItem>
          </List>
          <Title>Find your next stay</Title>
          <Description>
            Search low prices on hotels, homes and much more...
          </Description>
          <Search>
            <SearchItem>
              <FontAwesomeIcon icon={faBed} color={SearchIconColor} />
              <SearchInput placeholder='Where are you going?' type='text' />
            </SearchItem>
            <SearchItem>
              <FontAwesomeIcon icon={faCalendarDays} color={SearchIconColor} />
              <SearchText
                onClick={() => {
                  this.setState({ openDate: !this.state.openDate })
                }}
              >{`${format(this.state.startDate!, 'dd/MM/yyyy')} to ${format(
                this.state.endDate!,
                'dd/MM/yyyy'
              )}`}</SearchText>
              {this.state.openDate && (
                <DateRangeStyled
                  editableDateInputs={true}
                  onChange={(item) => this.setState(item.selection)}
                  moveRangeOnFirstSelection={false}
                  ranges={[this.state]}
                />
              )}
            </SearchItem>
            <SearchItem>
              <FontAwesomeIcon icon={faPerson} color={SearchIconColor} />
              <SearchText>{`${this.state.occupancy.adult} adult . ${this.state.occupancy.children} children . ${this.state.occupancy.room} room`}</SearchText>
              <Options>
                <OptionItem>
                  <OptionText>Adult</OptionText>
                  <OptionCounter>
                    <OptionCounterButton>-</OptionCounterButton>
                    <span>1</span>
                    <OptionCounterButton>+</OptionCounterButton>
                  </OptionCounter>
                </OptionItem>

                <OptionItem>
                  <OptionText>
                    Children &nbsp;<span>Ages 0 - 17</span>
                  </OptionText>
                  <OptionCounter>
                    <OptionCounterButton>-</OptionCounterButton>
                    <span>0</span>
                    <OptionCounterButton>+</OptionCounterButton>
                  </OptionCounter>
                </OptionItem>

                <OptionItem>
                  <OptionText>Room</OptionText>
                  <OptionCounter>
                    <OptionCounterButton>-</OptionCounterButton>
                    <span>1</span>
                    <OptionCounterButton>+</OptionCounterButton>
                  </OptionCounter>
                </OptionItem>
              </Options>
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
