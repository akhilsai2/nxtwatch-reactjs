import styled from 'styled-components'

export const UnOrder = styled.ul`
  list-style-type: none;
  padding: 0px;

  line-height: 0;
`
export const HeaderCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const FooterCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 95%;
  margin-bottom: 20px;
  padding-left: 30px;
`
export const Text = styled.p`
  color: #475569;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const Logo = styled.img`
  width: 30px;
`
export const Paragraph = styled.p`
  color: #475569;
  font-size: ${props => (props.para ? '20px' : '15px')};
  font-family: 'Roboto';
  font-weight: 500;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25vh;
  height: ${props => (props.get ? '110vh' : '88vh')};
  padding-left: 0px;
  background-color: ${props => (props.change ? '#231f20' : 'white')};
`
export const LogoCont = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: space-between;
`
