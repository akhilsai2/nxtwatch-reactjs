import styled from 'styled-components'

export const ListItem = styled.li`
  margin-right: 10px;
  margin-bottom: 25px;
`
export const Image = styled.img`
  width: 200px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Title = styled.p`
  color: ${props => (props.change ? '#f1f5f9' : '#383838')};
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const TitleChannel = styled.p`
  color: ${props => (props.get ? '#616e7c' : '#606060')};
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const DescCont = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0;
`
