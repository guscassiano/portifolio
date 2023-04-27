import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Github } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph tipo="secundario">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus animi
      nobis, consequatur minima minus fuga, reiciendis ab officia quam accusamus
      voluptatum odio inventore possimus ipsum ipsam nam voluptate quos est!
    </Paragraph>
    <Github>
      <img src="https://github-readme-stats.vercel.app/api?username=guscassiano&show_icons=true&theme=onedark&include_all_commits=false&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=guscassiano&layout=compact&langs_count=6&theme=onedark" />
    </Github>
  </section>
)

export default Sobre
