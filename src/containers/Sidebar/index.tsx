import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { BotaoTema, Description, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
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
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
