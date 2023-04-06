import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  ListItem,
  DescCont,
  Image,
  Title,
  ChannelCont,
  TitleChannel,
} from './styledComponents'

const SavedListItem = props => {
  const {item, video, modeActive} = props
  const {id, channel, title, thumbnailUrl, viewsCount, publishedAt} = item
  const UploadAt = formatDistanceToNow(new Date(`${publishedAt}`))
  //  console.log(UploadAt)
  const {name} = channel
  const ShowVideo = () => {
    video(id)
  }
  return (
    <Link to={`/videos/${id}`} onClick={ShowVideo} className="link">
      <ListItem>
        <Image src={thumbnailUrl} alt={name} />
        <DescCont>
          <Title change={modeActive}>{title}</Title>
          <ChannelCont>
            <TitleChannel get={modeActive}>{name}</TitleChannel>
            <TitleChannel get={modeActive}>
              {viewsCount}Views . {UploadAt}
            </TitleChannel>
          </ChannelCont>
        </DescCont>
      </ListItem>
    </Link>
  )
}
export default SavedListItem
