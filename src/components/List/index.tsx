import { Fragment } from "react"
import { Container, Content } from "./styles"

type ListProps = {
  title: string,
  list: {
    id: string
    location: string
    period: string
    position: string
  }[]
}

export const List = ({ title, list }: ListProps) => {
  return (
    <Container>
      <h1>{title}</h1>
      <Content>
        {
          list.map(item => (
            <Fragment key={item.id}>
              <li>{item.location}</li>
              <p>{item.period}</p>
              <span>{item.position}</span>
            </Fragment>
          ))
        }
      </Content>
    </Container>
  )
}
