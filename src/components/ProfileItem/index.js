import {Link} from 'react-router-dom'
import {
  ListItem,
  ListItemDark,
  Display,
  CustomButton,
  Span,
  DisplayDark,
} from './styledComponents'

import './index.css'

const ProfileItem = props => {
  const {item, Moving, Active, link, modeActive} = props
  const {id, component, display} = item
  const change = () => {
    Moving(id, display)
  }

  return (
    <Link to={link} onClick={change} className="link">
      {modeActive ? (
        <ListItemDark ChangeBg={Active}>
          <CustomButton>
            <Span ChangeBg={Active}> {component}</Span>

            <DisplayDark>{display}</DisplayDark>
          </CustomButton>
        </ListItemDark>
      ) : (
        <ListItem onClick={change} Change={Active}>
          <CustomButton>
            <Span ChangeBg={Active}> {component}</Span>

            <Display ChangeBg={Active}>{display}</Display>
          </CustomButton>
        </ListItem>
      )}
    </Link>
  )
}
export default ProfileItem
