import Style from './CrossInfo.module.css'
import Link from 'next/link'

export const CrossInfo = (props) => {
    return (
        <div className={Style['main']}>
            <div className={Style['container']}>
                <Link href={'/'} className={Style['home']}>◀️На главную</Link>
                <img alt={props.name} src={props.img} className={Style['container_img']} />
                <h1 className={Style['container__title']}>{props.name}</h1>
                <br />
                <h2 className={Style['container__text']}>{props.description}</h2>
                <br />
                <div className={Style['all_content']}>
                    <div className={Style['one_txt']}>
                        <p className={Style['container_p']}>
                            <br />
                            {props.pgh1}
                            <br />
                            <br />
                            {props.pgh2}
                            <br />
                            <br />
                            {props.pgh3}
                            <br />
                            <br />
                            {props.pgh4}
                            <br />
                            <br />
                            {props.pgh5}
                            <br />
                        </p>
                    </div>
                    <div className={Style['content2']}>
                        <table className={Style['table']}>
                            <thead>
                                <tr>
                                    <td>
                                        <h2>О Кроссах</h2>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Дата выхода</td>
                                    <td>{props.date}</td>
                                </tr>
                                <tr>
                                    <td>Розничная цена</td>
                                    <td>{props.price}</td>
                                </tr>
                                <tr>
                                    <td>Материалы</td>
                                    <td>{props.materials}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}