import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { BotaoTema, Description, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Gustavo Cassiano</Title>
      <Paragraph tipo="secundario" fontSize={16}>
        guscassiano
      </Paragraph>
      <Description tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Description>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
