import styled from 'styled-components'

export const VideoListItem = styled.li`
  margin-right: 6px;
  margin-bottom: 50px;
  @media screen and (max-width:768px){
   margin-right:0px;
  })
`
export const VideoImg = styled.img`
  width: 290px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const ChannelLogo = styled.img`
  width: 30px;
  margin-top: 12px;
  margin-right: 5px;
  @media screen and (max-width: 768px) {
    width: 40px;
    margin-top: 20px;
  }
`
export const Title = styled.p`
  color: ${props => (props.change ? '#f1f5f9' : '#383838')};
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
  width: 250px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    width: 100%;
  }
`
export const TitleChannel = styled.p`
  color: ${props => (props.get ? '#616e7c' : '#606060')};
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  width: 250px;
`
export const DescriptionCont = styled.div`
  display: flex;
  align-items: flex-start;
`
export const TitleCont = styled.div`
  display: flex;
  flex-direction: column;
`
export const ViewCont = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 250px;
`
export const ChannelCont = styled.div`
  line-height: 0;
`
