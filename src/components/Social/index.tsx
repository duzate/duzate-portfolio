import { ComponentType } from "react"
import { Container } from "./styles"

type SocialProps = {
  title: string,
  icon: ComponentType
}

export const Social = ({ title, icon: Icon }: SocialProps) => {
  return (
    <Container>
      <Icon />
      {title}
    </Container>
  )
}
