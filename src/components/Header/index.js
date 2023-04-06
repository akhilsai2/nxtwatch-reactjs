import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Popup} from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {MdOutlineLightMode, MdPlaylistAdd, MdClose} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import ChangeOverContext from '../../context/ChangeOverContext'
import {
  NavContainer,
  ImgCont,
  Image,
  ProfileCont,
  Profile,
  LoginBtn,
  ChangeMode,
  Burger,
  LoginBtnIcon,
  SecCont,
  Unorder,
  ListItem,
  Cont,
  Para,
  PopupCont,
  Log,
  ConfirmBtn,
  BtnCont,
  CloseBtn,
  BnCont,
  LoginBn,
} from './styledComponents'

import './index.css'

const Header = props => (
  <ChangeOverContext.Consumer>
    {value => {
      const {
        hamburgerSection,
        showHamburger,
        modeChange,
        changeMode,
        changeSection,
      } = value
      const show = () => {
        showHamburger()
      }
      const mode = () => {
        modeChange()
      }
      const sendHome = () => {
        const {history} = props
        history.replace('/')
        changeSection('1', 'Home')
      }
      const sendLogin = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const change = changeMode ? 'newColor' : null

      return (
        <>
          <NavContainer change={changeMode}>
            <Link to="/">
              <ImgCont onClick={sendHome}>
                {changeMode ? (
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                ) : (
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                )}
              </ImgCont>
            </Link>
            <ProfileCont>
              <ChangeMode data-testid="theme" type="button" onClick={mode}>
                {changeMode ? (
                  <MdOutlineLightMode className="darkIcon" />
                ) : (
                  <FaMoon className="icon" />
                )}
              </ChangeMode>
              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />

              <Burger>
                <Popup
                  modal
                  trigger={
                    <ChangeMode type="button" onClick={show}>
                      <GiHamburgerMenu className={`burger ${change}`} />
                    </ChangeMode>
                  }
                  position="top left"
                >
                  {remove => (
                    <SecCont change={changeMode}>
                      <CloseBtn onClick={() => remove()} type="button">
                        <MdClose className="remove" />
                      </CloseBtn>
                      <Unorder>
                        <Link to="/" className="link">
                          <ListItem>
                            <Cont>
                              <AiFillHome className="app" />
                            </Cont>
                            <Para change={changeMode}>Home</Para>
                          </ListItem>
                        </Link>
                        <Link to="/trending" className="link">
                          <ListItem>
                            <Cont>
                              <HiFire className="app" />
                            </Cont>
                            <Para change={changeMode}>Trending</Para>
                          </ListItem>
                        </Link>
                        <Link to="/gaming" className="link">
                          <ListItem>
                            <Cont>
                              <SiYoutubegaming className="app" />
                            </Cont>
                            <Para change={changeMode}>Games</Para>
                          </ListItem>
                        </Link>
                        <Link to="/saved-videos" className="link">
                          <ListItem>
                            <Cont>
                              <MdPlaylistAdd className="app" />
                            </Cont>
                            <Para change={changeMode}>Saved Videos</Para>
                          </ListItem>
                        </Link>
                      </Unorder>
                    </SecCont>
                  )}
                </Popup>
              </Burger>

              <Popup
                modal
                trigger={
                  <LoginBtn logout={changeMode} type="button">
                    Logout
                  </LoginBtn>
                }
              >
                {close => (
                  <>
                    <PopupCont change={changeMode}>
                      <Log change={changeMode}>
                        Are you sure,You want to logout?
                      </Log>
                      <BtnCont>
                        <LoginBtn logout={changeMode} onClick={() => close()}>
                          Cancel
                        </LoginBtn>
                        <ConfirmBtn onClick={sendLogin}>Confirm</ConfirmBtn>
                      </BtnCont>
                    </PopupCont>
                  </>
                )}
              </Popup>

              <Popup
                modal
                trigger={
                  <LoginBtnIcon logout type="button">
                    <FiLogOut className={`log ${change}`} />
                  </LoginBtnIcon>
                }
              >
                {shut => (
                  <>
                    <PopupCont change={changeMode}>
                      <Log change={changeMode}>
                        Are you sure,You want to logout?
                      </Log>
                      <BnCont>
                        <LoginBn logout={changeMode} onClick={() => shut()}>
                          Cancel
                        </LoginBn>
                        <ConfirmBtn onClick={sendLogin}>Confirm</ConfirmBtn>
                      </BnCont>
                    </PopupCont>
                  </>
                )}
              </Popup>
            </ProfileCont>
          </NavContainer>
        </>
      )
    }}
  </ChangeOverContext.Consumer>
)

export default withRouter(Header)
