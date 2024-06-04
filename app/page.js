import { CardsContainer } from "./components/CardsContainer/CardsContainer";
import Style from './page.module.css'
import { Collection } from "./components/Collection/Collection";

export default function Home() {
  return (
    <div className={Style['container']}>
      <Collection/>
      <CardsContainer />
    </div>
  )

}