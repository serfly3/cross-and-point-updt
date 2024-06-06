import Style from './Card.module.css'
import Link from 'next/link'

export const Card = (props) => {
    return (
        <Link href={`/sneaker/${props.id}`}>
            <div className={Style["product"]}>
                <img className={Style['img__boots']} alt={props.name} src={props.img} />
                <h3 className={Style["container__title"]}>{props.name}</h3>
                <p className={Style["container__text"]}>{props.description}</p>
            </div>
        </Link>
    )
}