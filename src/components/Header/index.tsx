import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItems, LinkCart } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EPlay" />
      <nav>
        <Links>
          <LinkItems>
            <Link to="/categorias">Categorias</Link>
          </LinkItems>
          <LinkItems>
            <a href="#">Novidades</a>
          </LinkItems>
          <LinkItems>
            <a href="#">Promoções</a>
          </LinkItems>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
