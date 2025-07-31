import Game from '../../models/Game'
import ProductsList from '../../components/ProductsList'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In omnis similique, ab ex perspiciatis provident cumque architecto. Cupiditate, libero doloribus error beatae quasi, suscipit sed, harum facere ab necessitatibus officiis.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In omnis similique, ab ex perspiciatis provident cumque architecto. Cupiditate, libero doloribus error beatae quasi, suscipit sed, harum facere ab necessitatibus officiis.',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starwars
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In omnis similique, ab ex perspiciatis provident cumque architecto. Cupiditate, libero doloribus error beatae quasi, suscipit sed, harum facere ab necessitatibus officiis.',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In omnis similique, ab ex perspiciatis provident cumque architecto. Cupiditate, libero doloribus error beatae quasi, suscipit sed, harum facere ab necessitatibus officiis.',
    title: 'Zelda',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In omnis similique, ab ex perspiciatis provident cumque architecto. Cupiditate, libero doloribus error beatae quasi, suscipit sed, harum facere ab necessitatibus officiis.',
    title: 'Diablo',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In omnis similique, ab ex perspiciatis provident cumque architecto. Cupiditate, libero doloribus error beatae quasi, suscipit sed, harum facere ab necessitatibus officiis.',
    title: 'Diablo',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In omnis similique, ab ex perspiciatis provident cumque architecto. Cupiditate, libero doloribus error beatae quasi, suscipit sed, harum facere ab necessitatibus officiis.',
    title: 'Diablo',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In omnis similique, ab ex perspiciatis provident cumque architecto. Cupiditate, libero doloribus error beatae quasi, suscipit sed, harum facere ab necessitatibus officiis.',
    title: 'Diablo',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
