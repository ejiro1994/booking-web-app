import styled from 'styled-components/macro';


export const Wrapper = styled.div`
  margin-top: 1rem;
  position: absolute;
  top: 52px;
  margin-left: 50px;
  background-color: #fff;
  color: grey;
  border-radius: 3px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`
export const OptionItem = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  margin: 20px;
  font-size: 0.75rem;
  align-items: center;
`
export const OptionText = styled.span`
  color: #222222;
  > span {
    font-size: 0.6rem;
    display: block;
    color: grey;
    margin-top: 3px;
  }
`
export const OptionCounterButton = styled.button`
  all: unset;
  /* width: 30px;
  height: 30px; */
  font-size: 1.2rem;
  padding: 15px 20px;
  border: 1px solid rgba(0, 113, 194, 0.5);
  color: #374b60;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
  background-color: #fff;
  user-select: none;
  &:disabled {
    cursor: not-allowed;
    border: 1px solid rgba(126, 126, 126, 0.5);
    color: #72727271;
    background-color: #c1c1c143;
    &:hover {
      background-color: #c1c1c184;
    }
  }
  &:hover {
    background-color: rgba(164, 217, 255, 0.5);
  }
  /* display:flex; */
`
export const OptionCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  > span {
    width: 2.5rem;
    display: flex;
    justify-content: center;
  }
`