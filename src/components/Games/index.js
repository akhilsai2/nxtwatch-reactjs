import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideContent from '../SideContent'
import GamesListItem from '../GamesListItem'
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

const Games = () => (
  <ChangeOverContext.Consumer>
    {value => {
      const {GamesList, VideoShow, loading, changeMode} = value
      const show = id => {
        VideoShow(id)
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
                    <SiYoutubegaming />
                  </Span>
                </LogoCont>
                <Heading change={changeMode}>Gaming</Heading>
              </HeadCont>
              {loading ? (
                <div className="loader-container" data-testid="loader">
                  <Loader
                    type="ThreeDots"
                    color="#000000"
                    height="50"
                    width="50"
                  />
                </div>
              ) : (
                <UnOrder change={changeMode}>
                  {GamesList.map(each => (
                    <GamesListItem
                      item={each}
                      key={each.id}
                      video={show}
                      modeActive={changeMode}
                    />
                  ))}
                </UnOrder>
              )}
            </TrendVideoCont>
          </TrendCont>
        </>
      )
    }}
  </ChangeOverContext.Consumer>
)
export default Games
