import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  VideoListItem,
  VideoImg,
  DescriptionCont,
  ChannelLogo,
  TitleCont,
  Title,
  ViewCont,
  ChannelCont,
  TitleChannel,
} from './styledComponents'

const VideoItem = props => {
  const {item, video, modeActive} = props
  const {id, channel, title, thumbnailUrl, viewsCount, publishedAt} = item
  const UploadAt = formatDistanceToNow(new Date(`${publishedAt}`))
  //  console.log(UploadAt)
  const {name, profileImageUrl} = channel
  const ShowVideo = () => {
    video(id)
  }

  return (
    <Link to={`/videos/${id}`} onClick={ShowVideo} className="link">
      <VideoListItem>
        <VideoImg src={thumbnailUrl} alt="video thumbnail" />
        <DescriptionCont>
          <ChannelLogo src={profileImageUrl} alt={name} />
          <TitleCont>
            <Title change={modeActive}>{title}</Title>
            <ChannelCont>
              <TitleChannel get={modeActive}>{name}</TitleChannel>
              <ViewCont>
                <TitleChannel get={modeActive}>
                  {viewsCount}Views . {UploadAt}
                </TitleChannel>
              </ViewCont>
            </ChannelCont>
          </TitleCont>
        </DescriptionCont>
      </VideoListItem>
    </Link>
  )
}
export default VideoItem
