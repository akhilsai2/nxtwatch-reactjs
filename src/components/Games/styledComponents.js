import styled from 'styled-components'

export const TrendCont = styled.div`
  display: flex;
`
export const TrendVideoCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`
export const HeadCont = styled.div`
  display: flex;
  align-items: center;
  height: 14vh;
  padding-left: 40px;
  background-color: ${props => (props.change ? '#212121' : 'white')};
`
export const Heading = styled.h1`
  color: ${props => (props.change ? '#ffffff' : '#1e293b')};
  font-size: 30px;
  font-family: 'Roboto';
`
export const LogoCont = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  border: ${props => (props.change ? '0px' : '1px')} solid #cbd5e1;
  background-color: ${props => (props.change ? '#000000' : ' #f8fafc')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
`
export const Span = styled.span`
  color: #ff0000;
  font-size: 27px;
`
export const UnOrder = styled.ul`
  list-style-type: none;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${props => (props.change ? '#0f0f0f' : '#f8fafc')};
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
  }
`
export const SideBar = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
