import styled from 'styled-components/macro'
import { DateRange } from 'react-date-range'


export const Wrapper = styled.div`
  background-color: #003580;
  color: #ffffff;
  display: flex;
  justify-content: center;
  position: relative;
`
export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px 0px 100px 0px;
`

export const Description = styled.p`
  margin: 20px, 0px;
  font-size: 1.5rem;
  font-family: SilkaExtraLight;
  margin-top: 1rem;
`
export const Title = styled.h1`
  font-family: 'SilkaSemiBold';
  font-size: 3rem;
  margin-top: 4rem;
`
export const Button = styled.button`
  /* all: unset; */
  border: none;
  font-family: 'SilkaMedium';
  font-size: 1.3rem;
  background-color: #0071c2;
  color: #fff;
  font-weight: 500;
  padding: 0 40px;
  height: 100%;
  cursor: pointer;
  width: 100%;
  margin-left: 60px;
  justify-content: center;
`
export const Search = styled.div`
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
  gap: 10px;
  position: relative;

`
export const SearchItem = styled.div<{ justify?: string }>`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  justify-content: ${(props) => props.justify};
  height: 100%;
`
export const SearchText = styled.span`
  color: lightgray;
  cursor: pointer;
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  height: 2rem;
  font-size: 1rem;
  width: 180px;

  &::placeholder {
    font-family: 'SilkaMedium';
    font-size: 1rem;
    color: grey;
  }
`




export const SearchIconColor = 'lightgray'
