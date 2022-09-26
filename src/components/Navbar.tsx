import React from 'react'
import styled from 'styled-components'

const NavContainer = styled.div`
  height: 3.2rem;
  background-color: #003580;
  display: flex;
  justify-content: center;
`

const NavWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
  font-family: 'SilkaSemiBold';
`

const NavItems = styled.div`
  display: flex;
  gap: 1rem;
`

const NavButton = styled.button`
  border: none;
  padding: 0.75rem 1rem;
  cursor: pointer;
  color: #004580;
  font-family: 'SilkaSemiBold';
`

interface IProps {}

export default class Navbar extends React.Component<IProps> {
  render() {
    return (
      <NavContainer>
        <NavWrapper>
          <Logo>Booking.com</Logo>
          <NavItems>
            <NavButton>Register</NavButton>
            <NavButton>Sign in</NavButton>
          </NavItems>
        </NavWrapper>
      </NavContainer>
    )
  }
}
