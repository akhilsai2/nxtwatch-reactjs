import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import SideContent from '../SideContent'
import Header from '../Header'
import TrendVideoItem from '../TrendVideoItem'
import ChangeOverContext from '../../context/ChangeOverContext'
import {
  TrendCont,
  HeadCont,
  Heading,
  TrendVideoCont,
  LogoCont,
  Span,
  UnOrder,
  SideBar,
} from './styledComponents'

const Trending = () => (
  <ChangeOverContext.Consumer>
    {value => {
      const {TrendingVideoList, VideoShow, loading, changeMode} = value
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
                    <HiFire />
                  </Span>
                </LogoCont>
                <Heading change={changeMode}>Trending</Heading>
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
                  {TrendingVideoList.map(each => (
                    <TrendVideoItem
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
export default Trending
