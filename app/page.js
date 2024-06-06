import { CardsContainer } from "./components/CardsContainer/CardsContainer";
import Style from './page.module.css'
import { Collection } from "./components/Collection/Collection";
import { Slider } from "./components/Slider/Slider";

export default function Home() {
  return (
    <div className={Style['container']}>
      {/* <Slider /> потом сделаю мб */}
      <Collection />
      <CardsContainer />
    </div>
  )

}