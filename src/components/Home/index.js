import Loader from 'react-loader-spinner'

import {MdOutlineSearch} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'

import {
  Paragraph,
  HomeCont,
  ShowVideoCont,
  GetCont,
  GetBtn,
  VideosCont,
  PlanCont,
  ImageLogo,
  CloseBtn,
  Search,
  SearchCont,
  SearchBtn,
  GroupVideoCont,
  SideBar,
} from './styledComponents'
import Header from '../Header'
import SideContent from '../SideContent'
import VideoItem from '../VideoItem'
import ChangeOverContext from '../../context/ChangeOverContext'
import './index.css'

const Home = () => (
  <ChangeOverContext.Consumer>
    {value => {
      const {
        VideosList,
        VideoShow,
        loading,
        search,
        changeInput,
        readInput,
        bannerShow,
        Banner,
        changeMode,
      } = value
      // console.log(VideosList)
      const show = id => {
        VideoShow(id)
      }
      const searchInput = event => {
        changeInput(event.target.value)
      }
      const inputValue = () => {
        // console.log(search)
        readInput(search)
      }
      const close = () => {
        bannerShow()
      }
      return (
        <>
          <Header />
          <HomeCont>
            <SideBar>
              <SideContent />
            </SideBar>
            <ShowVideoCont>
              {Banner && (
                <GetCont>
                  <PlanCont>
                    <ImageLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="website logo"
                    />
                    <Paragraph para>
                      Buy Nxt Watch Premium Prepaid Plans with UPI
                    </Paragraph>
                    <GetBtn type="button">GET IT NOW</GetBtn>
                  </PlanCont>
                  <CloseBtn type="button" onClick={close}>
                    <GrFormClose className="closeIcon" />
                  </CloseBtn>
                </GetCont>
              )}
              <VideosCont get={changeMode}>
                <SearchCont>
                  <Search
                    type="text"
                    placeholder="Search"
                    onChange={searchInput}
                    value={search}
                    modeActive={changeMode}
                  />
                  <SearchBtn
                    type="button"
                    onClick={inputValue}
                    modeActive={changeMode}
                  >
                    <MdOutlineSearch className="searchbtn" />
                  </SearchBtn>
                </SearchCont>
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
                  <GroupVideoCont>
                    {VideosList.map(each => (
                      <VideoItem
                        item={each}
                        key={each.id}
                        video={show}
                        modeActive={changeMode}
                      />
                    ))}
                  </GroupVideoCont>
                )}
              </VideosCont>
            </ShowVideoCont>
          </HomeCont>
        </>
      )
    }}
  </ChangeOverContext.Consumer>
)
export default Home
