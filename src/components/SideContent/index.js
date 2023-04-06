import {
  Container,
  HeaderCont,
  UnOrder,
  FooterCont,
  Text,
  LogoCont,
  Logo,
  Paragraph,
} from './styledComponents'
import ProfileItem from '../ProfileItem'
import ChangeOverContext from '../../context/ChangeOverContext'

const SideContent = props => (
  <ChangeOverContext.Consumer>
    {value => {
      const {section, sectionId, changeSection, changeMode} = value
      const change = (id, display) => {
        changeSection(id, display)
      }
      const {size} = props
      return (
        <Container get={size} change={changeMode}>
          <HeaderCont>
            <UnOrder>
              {section.map(each => (
                <ProfileItem
                  item={each}
                  key={each.id}
                  link={each.path}
                  Moving={change}
                  Active={each.id === sectionId}
                  modeActive={changeMode}
                />
              ))}
            </UnOrder>
          </HeaderCont>
          <FooterCont>
            <Text>CONTACT US</Text>
            <LogoCont>
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </LogoCont>
            <Paragraph>
              Enjoy! Now to see your channels and recommendations!
            </Paragraph>
          </FooterCont>
        </Container>
      )
    }}
  </ChangeOverContext.Consumer>
)
export default SideContent
