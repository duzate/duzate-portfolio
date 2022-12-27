
import { Card } from "./components/Card"
import { Profile } from "./components/Profile"
import { Social } from "./components/Social"
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FiBriefcase, FiGithub, FiLinkedin, FiTwitter, FiGlobe, FiMail } from 'react-icons/fi'
import { Container, ContainerLeft, ContainerRight } from "./styles"
import { Tech } from "./components/Tech"
import { List } from "./components/List"
import { expirences } from "./util/expirences"

function App() {
  const techs = ['JAVASCRIPT', 'REACTJS', 'NODEJS', 'GIT', 'GITHUB', 'HTML', 'CSS', 'REACT NATIVE']

  return (
    <Container>
      <ContainerLeft>
        <Card>
          <Profile />
        </Card>
        <Card>
          <Social icon={HiOutlineLocationMarker} title={'Brasil'} />
          <Social icon={FiBriefcase} title={'Nova Auto Peças'} />
          <Social icon={FiGithub} title={'duzate'} />
          <Social icon={FiLinkedin} title={'duzate'} />
          <Social icon={FiTwitter} title={'duzate'} />
          <Social icon={FiGlobe} title={'https://duzate.dev'} />
          <Social icon={FiMail} title={'duzate@gmail.com'} />
        </Card>
        <Card>
          <Tech title={techs} />
        </Card>
        <Card>
          <List title="Experiências" list={expirences} />
        </Card>
      </ContainerLeft>
      <ContainerRight>

      </ContainerRight>
    </Container>
  )
}

export default App
