import { Container } from "./styles"

type AvatarProps = {
  avatar: string,
  username: string
}

export const Avatar = ({ avatar, username }: AvatarProps) => {
  return (
    <Container>
      <img src={avatar} alt={username || 'username'} />
    </Container>
  )
}
