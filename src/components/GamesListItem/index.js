import {Link} from 'react-router-dom'
import {
  ListItem,
  Image,
  DescCont,
  Title,
  TitleChannel,
} from './styledComponents'

const GamesListItem = props => {
  const {item, video, modeActive} = props
  const {id, title, thumbnailUrl, viewCount} = item
  const showVideo = () => {
    video(id)
  }
  return (
    <Link to={`/videos/${id}`} onClick={showVideo} className="link">
      <ListItem>
        <Image src={thumbnailUrl} alt="game video" />
        <DescCont>
          <Title change={modeActive}>{title}</Title>
          <TitleChannel get={modeActive}>
            {viewCount} Watching Worldwide
          </TitleChannel>
        </DescCont>
      </ListItem>
    </Link>
  )
}
export default GamesListItem
