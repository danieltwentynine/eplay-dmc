import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo } from './styles'
import resident from '../../assets/images/resident.png'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Products = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <div>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descricao>{description}</Descricao>
  </div>
)

export default Products
