import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SideContent from '../SideContent'
import SavedListItem from '../SavedListItem'
import ChangeOverContext from '../../context/ChangeOverContext'
import {
  TrendCont,
  TrendVideoCont,
  HeadCont,
  LogoCont,
  Span,
  Heading,
  UnOrder,
  SideBar,
} from './styledComponents'

const SavedVideos = () => (
  <ChangeOverContext.Consumer>
    {value => {
      const {savedVideoList, savedVideoShow, changeMode} = value

      const show = id => {
        savedVideoShow(id)
      }
      return (
        <>
          <Header />
          <TrendCont>
            <SideBar>
              <SideContent />
            </SideBar>
            <TrendVideoCont>
              <HeadCont change={changeMode}>
                <LogoCont change={changeMode}>
                  <Span>
                    <MdPlaylistAdd />
                  </Span>
                </LogoCont>
                <Heading change={changeMode}>Saved Videos</Heading>
              </HeadCont>
              <UnOrder change={changeMode}>
                {savedVideoList.map(each => (
                  <SavedListItem
                    item={each}
                    key={each.id}
                    video={show}
                    modeActive={changeMode}
                  />
                ))}
              </UnOrder>
            </TrendVideoCont>
          </TrendCont>
        </>
      )
    }}
  </ChangeOverContext.Consumer>
)
export default SavedVideos
