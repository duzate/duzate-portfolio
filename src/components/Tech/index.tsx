import { Container, Content } from "./styles"

type TechProps = {
  title: string[]
}

export const Tech = ({ title }: TechProps) => {
  return (
    <Container>
      <h2>Tecnologias</h2>
      <Content>
        {
          title.map(item => (
            <span key={item}>{item}</span>
          ))
        }
      </Content>
    </Container>
  )
}
