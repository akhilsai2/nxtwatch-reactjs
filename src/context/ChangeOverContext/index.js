import React from 'react'

const ChangeOverContext = React.createContext({
  savedVideoList: [],
  VideosList: [],
  TrendingVideoList: [],
  GamesList: [],
  sectionId: 'HOME',
  LikeVideo: false,
  DisLikeVideo: false,
  videoSave: false,
  videoPlayer: {},
  channelUser: {},
  changeMode: false,
  AddVideo: () => {},
  AddLike: () => {},
  AddDisLike: () => {},
  changeSection: () => {},
  VideoShow: () => {},
  removeVideo: () => {},
  savedVideoShow: () => {},
  changeInput: () => {},
  readInput: () => {},
  bannerShow: () => {},
  showHamburger: () => {},
  modeChange: () => {},
  HomeRedirect: () => {},
  loginRedirect: () => {},
})

export default ChangeOverContext
