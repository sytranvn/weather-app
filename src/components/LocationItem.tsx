import { ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Location } from '../api'

interface ItemProps {
  location: Location
}

export default function LocationItem({ location }: ItemProps) {
  return (
    <Link to={`/${location.woeid}`}>
      <ListGroupItem action key={location.woeid}>
        {location.title}
      </ListGroupItem>
    </Link>
  )
}
