import Style from './CardsContainer.module.css'
import { data } from '@/app/data/data'
import { Card } from '../Card/Card'

export const CardsContainer = () => {
    return (
            <div className={Style['grid']}>
                {data.map((item) => (
                    <Card id={item.id} name={item.name} description={item.description} img={item.img} />
                ))}
            </div>
    );
}