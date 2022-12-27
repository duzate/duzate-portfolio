import { ReactNode } from "react"
import { Container } from "./styles"

type CardProps = {
  children: ReactNode
}

export const Card = ({ children }: CardProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
