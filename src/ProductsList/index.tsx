import Products from '../components/Products'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        <Products
          category="Ação"
          description="Descrição do Jogo"
          image=""
          infos={['-10%', 'R$150']}
          system="Windows"
          title="Titulo do Jogo"
        />
        <Products
          category="Ação"
          description="Descrição do Jogo"
          image=""
          infos={['-10%', 'R$150']}
          system="Windows"
          title="Titulo do Jogo"
        />
        <Products
          category="Ação"
          description="Descrição do Jogo"
          image=""
          infos={['-10%', 'R$150']}
          system="Windows"
          title="Titulo do Jogo"
        />
        <Products
          category="Ação"
          description="Descrição do Jogo"
          image=""
          infos={['-10%', 'R$150']}
          system="Windows"
          title="Titulo do Jogo"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
