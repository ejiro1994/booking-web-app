import React from 'react'
import {
  Wrapper,
  OptionItem,
  OptionText,
  OptionCounter,
  OptionCounterButton,
} from './Options.styled'
import { HeaderState } from '../Header'

interface optionProps {
  handleOption: (
    operation: 'i' | 'd',
    name: 'adult' | 'children' | 'room'
  ) => void
  state: HeaderState
}

function Options(props: optionProps) {
  return (
    <Wrapper>
      <OptionItem>
        <OptionText>Adult</OptionText>
        <OptionCounter>
          <OptionCounterButton
            onClick={() => props.handleOption('d', 'adult')}
            disabled={props.state.occupancy.adult <= 1}
          >
            -
          </OptionCounterButton>
          <span>{props.state.occupancy.adult}</span>
          <OptionCounterButton onClick={() => props.handleOption('i', 'adult')}>
            +
          </OptionCounterButton>
        </OptionCounter>
      </OptionItem>

      <OptionItem>
        <OptionText>
          Children &nbsp;<span>Ages 0 - 17</span>
        </OptionText>
        <OptionCounter>
          <OptionCounterButton
            onClick={() => props.handleOption('d', 'children')}
            disabled={props.state.occupancy.children <= 0}
          >
            -
          </OptionCounterButton>
          <span>{props.state.occupancy.children}</span>
          <OptionCounterButton
            onClick={() => props.handleOption('i', 'children')}
          >
            +
          </OptionCounterButton>
        </OptionCounter>
      </OptionItem>

      <OptionItem>
        <OptionText>Room</OptionText>
        <OptionCounter>
          <OptionCounterButton
            onClick={() => props.handleOption('d', 'room')}
            disabled={props.state.occupancy.room <= 1}
          >
            -
          </OptionCounterButton>
          <span>{props.state.occupancy.room}</span>
          <OptionCounterButton onClick={() => props.handleOption('i', 'room')}>
            +
          </OptionCounterButton>
        </OptionCounter>
      </OptionItem>
    </Wrapper>
  )
}

export default Options
