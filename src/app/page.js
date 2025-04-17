import Carousel from '@/components/Carousel'

const images = [
  '/images/index/LEW-AllAgain-Artwork-wide-FINAL_01082024.jpg',
  '/images/index/_ACN0576.jpg',
  '/images/index/joback-fott-01.jpg',
  '/images/index/ex-01.jpg',
  '/images/index/jo-01.jpg',
  '/images/index/Lew-AllAgain-Teaser-OutNow.jpg',
  '/images/index/joback-fott-02.jpg',
]

export default function Home() {
  return <Carousel images={images} />
}