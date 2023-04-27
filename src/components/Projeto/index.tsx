import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Title>Projeto Lista de tarefas</Title>
    <Paragraph tipo="secundario">Lista de tarefas feitas com VueJS</Paragraph>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
