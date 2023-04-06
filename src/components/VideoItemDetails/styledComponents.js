import styled from 'styled-components'

export const TrendCont = styled.div`
  display: flex;
`
export const TrendVideoCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 82%;
  padding: 30px;
  background-color: ${props => (props.change ? '#0f0f0f' : '#f8fafc')};
  height: 110vh;
  overflow-y: scroll;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const Title = styled.p`
  color: ${props => (props.change ? '#f1f5f9' : '#383838')};
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 400;
`
export const TitleChannel = styled.p`
  color: ${props => (props.get ? '#616e7c' : '#606060')};
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const LikeTitle = styled.p`
  color: ${props => (props.get ? '#2563eb' : '#64748b')};
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const DisLikeTitle = styled.p`
  color: ${props => (props.getDis ? '#2563eb' : '#64748b')};
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const SaveTitle = styled.button`
  color: ${props => (props.get ? '#2563eb' : '#64748b')};
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  background-color: transparent;
  border: 0px solid white;
`

export const Like = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: 0px solid white;
`
export const Cont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
  }
`
export const LikeCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
`
export const Hor = styled.hr`
  background-color: #606060;
  width: 100%;
`
export const ChannelCont = styled.div`
  display: flex;
  align-items: flex-start;
`
export const Logo = styled.img`
  width: 50px;
  margin-top: 5px;
  margin-right: 15px;
`
export const ChannelTitle = styled.p`
  color: ${props => (props.change ? '#f1f5f9' : '#383838')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const ChannelTitleSub = styled.p`
  color: ${props => (props.get ? '#606060' : '#383838')};
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const TitleCont = styled.div`
  line-height: 0.5;
`
export const ChannelDesc = styled.div`
  display: flex;
  flex-direction: column;
`
export const SideBar = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
