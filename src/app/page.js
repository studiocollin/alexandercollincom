import Carousel from '@/components/Carousel'

const images = [
  'archive/ljungstrom-hallkaften/KerstinLjungstrom-250203-AlexanderCollin-0877.jpg',
  '/images/index/IsonFille_AlexanderCollin-0132-2.jpg',
  '/images/index/eec02.jpg',
  '/images/index/joback-fott-01.jpg',
  '/archive/jamkid/286667874_745598489809422_5628512537186377452_n.jpg',
  '/images/index/jo-01.jpg',
  '/images/index/Lew-AllAgain-Teaser-OutNow.jpg',
  '/archive/lew-allagain/LEW-AllAgain-Artwork-sRGB-2000x2000.jpg',
  'archive/ljungstrom-hallkaften/KerstinLjungstrom-HallKaften-Artwork-final-sRGB.jpg',
  '/images/index/_ACN0576.jpg',
  '/images/index/joback-fott-02.jpg',
  'archive/sunnan-2023/Sunnan-AlexanderCollin-sRGB-2-3.jpg',
  '/images/index/ex-01.jpg',
  'archive/zikai-hero/hero-03.jpg',
  'archive/zikai-hero/hero-02.jpg',
  'archive/jimouma-badtricks/JimOuma-AlexanderCollin-250207-0303-Enhanced-NR.jpg',
   'archive/oscarzia-din/3f462c72555347.5beb50068e20d.jpg',
  'archive/sabinaddumba-hwb/sabina_ddumba-homeward_bound.jpg',
    'archive/thykingdomcome/23SS01-tape-03.jpg',
 ]

export default function Home() {
  return <Carousel images={images} />
}