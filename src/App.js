import {Component} from 'react'
import Cookies from 'js-cookie'
import {Switch, Route} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Games from './components/Games'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import ChangeOverContext from './context/ChangeOverContext'
import './App.css'

const Section = [
  {
    id: '1',
    display: 'Home',
    component: <AiFillHome />,
    path: '/',
  },
  {
    id: '2',
    display: 'Trending',
    component: <HiFire />,
    path: '/trending',
  },
  {
    id: '3',
    display: 'Games',
    component: <SiYoutubegaming />,
    path: '/gaming',
  },
  {
    id: '4',
    display: 'Saved Videos',
    component: <MdPlaylistAdd />,
    path: '/saved-videos',
  },
]

// Replace your code here
class App extends Component {
  state = {
    search: '',
    savedVideoList: [],
    VideosList: [],
    TrendingVideoList: [],
    GamesList: [],
    sectionId: Section[0].id,
    LikeVideo: false,
    DisLikeVideo: false,
    section: Section,
    videoPlayer: {},
    channelUser: {},
    Upload: '',
    videoSave: false,
    videoId: '',
    loading: true,
    Banner: true,
    hamburgerSection: false,
    changeMode: false,
    home: false,
  }

  componentDidMount() {
    this.renderVideos()
    this.renderTrend()
    this.renderGames()
  }

  changeSection = (id, display) => {
    let render
    switch (display) {
      case 'Home':
        render = this.renderVideos
        break
      case 'Trending':
        //  console.log('trend')
        render = this.renderTrend
        break
      case 'Games':
        render = this.renderGames
        break
      default:
        render = null
    }
    this.setState({sectionId: id}, render)
  }

  renderGames = async () => {
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch('https://apis.ccbp.in/videos/gaming', options)
    if (response.ok) {
      const data = await response.json()
      const fetchedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({GamesList: fetchedData, loading: false})
    }
  }

  renderTrend = async () => {
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(
      'https://apis.ccbp.in/videos/trending',
      options,
    )
    // console.log(response)
    if (response.ok) {
      const data = await response.json()
      const fetchedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewsCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({TrendingVideoList: fetchedData, loading: false})
    }
  }

  readInput = data => {
    this.setState({search: data, loading: true}, this.renderVideos)
  }

  renderVideos = async () => {
    const {search} = this.state
    // console.log(search)
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${search}`,
      options,
    )
    //  console.log(response)
    if (response.ok) {
      const data = await response.json()
      // console.log(data)
      const FetchedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewsCount: each.view_count,
        publishedAt: each.published_at,
      }))
      // console.log(FetchedData)
      this.setState({VideosList: FetchedData, loading: false})
    }
  }

  AddLike = () => {
    this.setState({LikeVideo: true, DisLikeVideo: false})
  }

  AddDisLike = () => {
    this.setState({LikeVideo: false, DisLikeVideo: true})
  }

  VideoShow = id => {
    this.renderPlayer(id)
  }

  savedVideoShow = async id => {
    // console.log(id)
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      const fetchedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      const fetchedChannel = {
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }
      const DataAgo = formatDistanceToNow(
        new Date(`${data.video_details.published_at}`),
      )

      // console.log(fetchedData)
      this.setState({
        videoPlayer: fetchedData,
        channelUser: fetchedChannel,
        Upload: DataAgo,
        videoSave: true,
      })
    }
  }

  renderPlayer = async id => {
    // console.log(id)
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    // console.log(response)
    if (response.ok) {
      const data = await response.json()
      const fetchedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      const fetchedChannel = {
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }
      const DataAgo = formatDistanceToNow(
        new Date(`${data.video_details.published_at}`),
      )

      // console.log(fetchedData)
      this.setState({
        videoPlayer: fetchedData,
        channelUser: fetchedChannel,
        Upload: DataAgo,
        videoSave: false,
        LikeVideo: false,
        DisLikeVideo: false,
      })
    }
  }

  AddVideo = async id => {
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    //  console.log(response)
    if (response.ok) {
      const data = await response.json()
      const fetchedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
      }
      this.setState(prevState => ({
        savedVideoList: [...prevState.savedVideoList, fetchedData],
        videoSave: !prevState.videoSave,
      }))
    }
  }

  removeVideo = id => {
    this.setState(prevState => ({
      savedVideoList: prevState.savedVideoList.filter(each => each.id !== id),
      videoSave: !prevState.videoSave,
    }))
  }

  changeInput = input => {
    this.setState({search: input})
  }

  bannerShow = () => {
    this.setState({Banner: false})
  }

  showHamburger = () => {
    this.setState(prevState => ({
      hamburgerSection: !prevState.hamburgerSection,
    }))
  }

  modeChange = () => {
    this.setState(prevState => ({changeMode: !prevState.changeMode}))
  }

  HomeRedirect = () => {
    this.setState({home: true})
  }

  render() {
    const {
      savedVideoList,
      VideosList,
      TrendingVideoList,
      GamesList,
      sectionId,
      LikeVideo,
      DisLikeVideo,
      section,
      videoPlayer,
      channelUser,
      Upload,
      videoSave,
      videoId,
      loading,
      search,
      Banner,
      hamburgerSection,
      changeMode,
      home,
    } = this.state
    // console.log(VideosList)

    return (
      <ChangeOverContext.Provider
        value={{
          savedVideoList,
          VideosList,
          TrendingVideoList,
          GamesList,
          section,
          sectionId,
          LikeVideo,
          DisLikeVideo,
          videoPlayer,
          channelUser,
          Upload,
          videoSave,
          videoId,
          loading,
          search,
          Banner,
          hamburgerSection,
          changeMode,
          home,
          showHamburger: this.showHamburger,
          AddLike: this.AddLike,
          AddDisLike: this.AddDisLike,
          AddVideo: this.AddVideo,
          changeSection: this.changeSection,
          VideoShow: this.VideoShow,
          removeVideo: this.removeVideo,
          savedVideoShow: this.savedVideoShow,
          changeInput: this.changeInput,
          readInput: this.readInput,
          bannerShow: this.bannerShow,
          modeChange: this.modeChange,
          HomeRedirect: this.HomeRedirect,
          loginRedirect: this.loginRedirect,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} get={changeMode} />
          <ProtectedRoute path="/trending" component={Trending} />
          <ProtectedRoute path="/gaming" component={Games} />
          <ProtectedRoute path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute path="/videos/:id" component={VideoItemDetails} />
        </Switch>
      </ChangeOverContext.Provider>
    )
  }
}

export default App
