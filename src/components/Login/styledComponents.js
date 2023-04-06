import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.change ? '#181818' : '#f9f9f9')};
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const LoginContainer = styled.div`
  background-color: ${props => (props.change ? '#231f20' : '#f9f9f9')};
  border-radius: 5px;
  box-shadow: 0 4px 16px 0px #d7dfe9;
  width: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`
export const Image = styled.img`
  margin-top: 30px;
  width: 150px;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    width: 100px;
    margin-top: 15px;
    margin-bottom: 25px;
  }
`
export const Label = styled.label`
  color: #909090;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 700;
  margin-bottom: 5px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`
export const Input = styled.input`
  color: #475569;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 400;
  padding-left: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 3px;
  background-color: transparent;
  width: 350px;
  outline: none;
  cursor: pointer;
  height: 35px;
  margin-bottom: ${props => (props.pass ? '14px' : '25px')};
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 28px;
    font-size: 12px;
    margin-bottom: ${props => (props.pass ? '10px' : '10px;')};
  }
`
export const CheckCont = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
    margin-bottom: 25px;
  }
`

export const CheckboxInput = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 7px;
`
export const LabelCheck = styled.label`
  color: black;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 400;
`
export const LoginBtn = styled.button`
  background-color: #3b82f6;
  border: 0px solid white;
  border-radius: 7px;
  color: white;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
  width: 350px;
  height: 35px;
  margin-bottom: 0px;
  @media screen and (max-width: 768px) {
    width: 200px;
  }
`
export const FormCont = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`
export const Para = styled.p`
  color: #ff0b37;
  font-size: 12px;
  font-family: 'Roboto';
  line-height: 0;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 10px;
  }
`
