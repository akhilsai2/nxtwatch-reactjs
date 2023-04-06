import styled from 'styled-components'

export const ListItem = styled.li`
  padding-left: 10px;
  background-color: ${props => (props.Change ? '#f8fafc' : null)};
`
export const ListItemDark = styled.li`
  padding-left: 10px;
  background-color: ${props => (props.ChangeBg ? '#313131' : null)};
`
export const Display = styled.p`
  color: ${props => (props.ChangeBg ? '#1e293b' : '#475569')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const DisplayDark = styled.p`
  color: #f1f1f1;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const CustomButton = styled.button`
  background-color: transparent;
  border: 0px solid white;
  display: flex;
  align-items: center;
`
export const Span = styled.span`
  margin-right: 22px;
  color: ${props => (props.ChangeBg ? '#ff0000' : '#475569')};
  font-size: 20px;
`
