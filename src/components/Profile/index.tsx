import { Avatar } from "../Avatar"
import { Container } from "./styles"

export const Profile = () => {
  const avatar = 'https://github.com/duzate.png'

  return (
    <Container>
      <Avatar avatar={avatar} username={'duzate'} />
      <span>Eduardo de Araújo Costa</span>
      <p>Full Stack Develepor</p>
    </Container>
  )
}
