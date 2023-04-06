import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  MainContainer,
  LoginContainer,
  FormCont,
  Label,
  Input,
  Image,
  LabelCheck,
  LoginBtn,
  CheckboxInput,
  CheckCont,
  Para,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    error: '',
    errorStatus: false,
    setCheck: false,
  }

  successLogin = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  renderLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const UserDetails = {username, password}
    const option = {
      method: 'POST',
      body: JSON.stringify(UserDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', option)
    //  console.log(response)
    if (response.ok) {
      const data = await response.json()
      //  console.log(data)
      const jwtToken = data.jwt_token
      this.successLogin(jwtToken)
    } else {
      const data = await response.json()
      //  console.log(data)
      this.setState({error: data.error_msg, errorStatus: true})
    }
  }

  enterUsername = event => {
    this.setState({username: event.target.value})
  }

  enterPassword = event => {
    this.setState({password: event.target.value})
  }

  check = () => {
    this.setState(prevState => ({setCheck: !prevState.setCheck}))
  }

  render() {
    const {username, password, error, setCheck, errorStatus} = this.state
    const {get} = this.props
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <MainContainer change={get}>
        <LoginContainer change={get}>
          {get ? (
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              alt="nxt watch logo"
            />
          ) : (
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
          )}
          <FormCont onSubmit={this.renderLogin}>
            <Label htmlFor="input-user">USERNAME</Label>
            <Input
              id="input-user"
              type="text"
              placeholder="Username"
              value={username}
              onChange={this.enterUsername}
            />
            <Label htmlFor="input-pass">PASSWORD</Label>
            <Input
              pass
              id="input-user"
              type={setCheck ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={this.enterPassword}
            />
            <CheckCont>
              <CheckboxInput
                id="input-check"
                type="checkbox"
                checked={setCheck}
                onChange={this.check}
              />

              <LabelCheck htmlFor="input-check">Show Password</LabelCheck>
            </CheckCont>
            <LoginBtn type="submit">Login</LoginBtn>
            {errorStatus ? <Para>*{error}</Para> : null}
          </FormCont>
        </LoginContainer>
      </MainContainer>
    )
  }
}
export default Login
