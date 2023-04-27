import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin: 24px 0 40px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  font-size: 10px;
  color: #eee;
  background-color: #282a35;
  font-weight: bold;
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
