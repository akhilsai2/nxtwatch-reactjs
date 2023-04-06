import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SideContent from '../SideContent'
import ChangeOverContext from '../../context/ChangeOverContext'
import {
  TrendCont,
  TrendVideoCont,
  Title,
  LikeCont,
  LikeTitle,
  DisLikeTitle,
  Like,
  Cont,
  Hor,
  ChannelCont,
  Logo,
  ChannelDesc,
  ChannelTitle,
  TitleCont,
  SaveTitle,
  TitleChannel,
  ChannelTitleSub,
  SideBar,
} from './styledComponents'
import './index.css'

const VideoItemDetails = () => (
  <ChangeOverContext.Consumer>
    {value => {
      const {
        videoPlayer,
        channelUser,
        Upload,
        LikeVideo,
        DisLikeVideo,
        AddLike,
        AddDisLike,
        AddVideo,
        videoSave,
        removeVideo,
        changeMode,
      } = value
      const {id, title, videoUrl, viewCount, description} = videoPlayer
      const {name, profileImageUrl, subscriberCount} = channelUser

      const change = LikeVideo ? 'Set' : null
      const changeDis = DisLikeVideo ? 'disSet' : null
      const changeSave = videoSave ? 'saveSet' : null
      // console.log(name)
      const like = () => {
        AddLike()
      }

      const disLike = () => {
        AddDisLike()
      }

      const saveVideo = () => {
        AddVideo(id)
      }

      const unSaveVideo = () => {
        removeVideo(id)
      }

      return (
        <>
          <Header />
          <TrendCont>
            <SideBar>
              <SideContent size="true" />
            </SideBar>
            <TrendVideoCont change={changeMode}>
              <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
              <Title change={changeMode}>{title}</Title>
              <Cont>
                <TitleChannel get={changeMode}>
                  {viewCount} views . {Upload}
                </TitleChannel>

                <LikeCont>
                  <Like onClick={like}>
                    <BiLike className={`icon ${change}`} />
                    <LikeTitle get={LikeVideo}>Like</LikeTitle>
                  </Like>
                  <Like onClick={disLike}>
                    <BiDislike className={`Dis ${changeDis}`} />
                    <DisLikeTitle getDis={DisLikeVideo}>Dislike</DisLikeTitle>
                  </Like>
                  <Like>
                    <MdPlaylistAdd className={`save ${changeSave}`} />
                    {videoSave ? (
                      <SaveTitle onClick={unSaveVideo} get>
                        Saved
                      </SaveTitle>
                    ) : (
                      <SaveTitle onClick={saveVideo}>Save</SaveTitle>
                    )}
                  </Like>
                </LikeCont>
              </Cont>
              <Hor />
              <ChannelCont>
                <Logo src={profileImageUrl} alt="channel logo" />
                <ChannelDesc>
                  <TitleCont>
                    <ChannelTitle change={changeMode}>{name}</ChannelTitle>
                    <ChannelTitleSub get={changeMode}>
                      {subscriberCount} subscribers
                    </ChannelTitleSub>
                  </TitleCont>
                  <Title change={changeMode}>{description}</Title>
                </ChannelDesc>
              </ChannelCont>
            </TrendVideoCont>
          </TrendCont>
        </>
      )
    }}
  </ChangeOverContext.Consumer>
)
export default VideoItemDetails
