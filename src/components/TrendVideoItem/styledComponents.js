import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
export const Image = styled.img`
  width: 370px;
  margin-right: 10px;
`
export const DescCont = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.p`
  color: ${props => (props.change ? '#f1f5f9' : '#383838')};
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 1;
`
export const TitleChannel = styled.p`
  color: ${props => (props.get ? '#616e7c' : '#606060')};
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const ChannelCont = styled.div`
  line-height: 0.9;
`
