import styled from 'styled-components'

export const HomeCont = styled.div`
  display: flex;
`
export const ShowVideoCont = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const GetCont = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 30vh;
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 25px;
  padding-left: 25px;
`
export const PlanCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
`
export const GetBtn = styled.button`
  background-color: white;
  border: 2px solid #475569;
  color: #0f0f0f;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
  width: 100px;
  height: 35px;
  margin-bottom: 0px;
`
export const CloseBtn = styled.button`
  background-color: transparent;
  border: 0px solid white;
  align-self: flex-start;
`
export const ImageLogo = styled.img`
  width: 150px;
`
export const VideosCont = styled.div`
  background-color: ${props => (props.get ? '#181818' : '#f9f9f9')};
  height: 88vh;
  padding: 20px;
  overflow-y: scroll;
`
export const Search = styled.input`
  width: 420px;
  padding-left: 10px;
  border: 1px solid ${props => (props.modeActive ? '#909090' : '#cccccc')};
  height: 35px;
  font-size: 16px;
  color: #909090;
  font-family: 'Roboto';
  font-weight: 500;
  outline: none;
  cursor: pointer;
  background-color: ${props => (props.modeActive ? 'transparent' : 'white')};
`
export const SearchCont = styled.div`
  display: flex;
  align-items: center;
`
export const SearchBtn = styled.button`
  width: 70px;
  height: 35px;
  border: 1px solid ${props => (props.modeActive ? '#909090' : '#cccccc')};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.modeActive ? '#424242' : 'white')};
`
export const GroupVideoCont = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  @media screen and (max-width:768px){
      display:flex;
    flex-direction:column:
    align-items:center;
    width:100%;
  }
`
export const Paragraph = styled.p`
  color: #475569;
  font-size: ${props => (props.para ? '20px' : '15px')};
  font-family: 'Roboto';
  font-weight: 500;
`
export const SideBar = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
