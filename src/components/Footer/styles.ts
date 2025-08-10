import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  padding: 32px 0;
  background-color: ${cores.cinza};
  font-size: 14px;
`
export const SectionTitle = styled.h4`
  color: ${cores.branca};
  font-weight: bold;
  font-size: 16px;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled.a`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`
