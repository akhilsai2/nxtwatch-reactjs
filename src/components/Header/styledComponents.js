import styled from 'styled-components'

export const NavContainer = styled.div`
  background-color: ${props => (props.change ? '#231f20' : '#ffffff')};
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 35px;
  padding-right: 35px;
  @media screen and (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
    height: 10vh;
  }
`
export const Image = styled.img`
  width: 150px;
  @media screen and (max-width: 768px) {
    width: 150px;
  }
`
export const ProfileCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 18%;
  @media screen and (max-width: 768px) {
    width: 45%;
  }
`
export const Profile = styled.img`
  width: 33px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LoginBtn = styled.button`
  background-color: ${props => (props.logout ? 'transparent' : 'transparent')};
  border: 2px solid ${props => (props.logout ? 'white' : '#3b82f6')};
  border-radius: 3px;
  color: ${props => (props.logout ? 'white' : '#3b82f6')};
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  width: 80px;
  height: 30px;
  margin-bottom: 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LoginBn = styled.button`
  background-color: ${props => (props.logout ? 'transparent' : 'transparent')};
  border: 2px solid ${props => (props.logout ? 'white' : '#3b82f6')};
  border-radius: 3px;
  color: ${props => (props.logout ? 'white' : '#3b82f6')};
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  width: 80px;
  height: 30px;
  margin-bottom: 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LoginBtnIcon = styled.button`
  background-color: transparent;
  border: 0px solid white;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const Burger = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ImgCont = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0px solid white;
`
export const ChangeMode = styled.button`
  background-color: transparent;
  border: 0px solid white;
`
export const SecCont = styled.div`
  background-color: ${props => (props.change ? '#231f20' : 'white')};

  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Unorder = styled.ul`
  list-style-type: none;
  padding: 0px;
  line-height: 0.5;
  display: flex;
  flex-direction: column;
`
export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 15px;
`
export const Para = styled.p`
  color: ${props => (props.change ? 'white' : '#383838')};
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 5px;
  margin-left: 5px;
  margin-right: 5px;
`
export const PopupCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.change ? '#231f20' : '#f9f9f9')};
  height: 150px;
  width: 400px;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 5px;
  }
`
export const ConfirmBtn = styled.button`
  background-color: #3b82f6;
  border: 0px solid white;
  border-radius: 3px;
  color: white;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
  width: 80px;
  height: 30px;
`
export const Log = styled.p`
  color: ${props => (props.change ? '#606060' : '#383838')};
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const BtnCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  margin-top: 15px;
`
export const BnCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`
export const CloseBtn = styled.button`
  background-color: 'white';
  border: 0px solid white;
  align-self: flex-end;
  width: 20px;
  height: 20px;
`
