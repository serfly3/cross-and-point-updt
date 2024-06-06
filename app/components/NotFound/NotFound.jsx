import Style from './NotFound.module.css'
import Link from 'next/link'

export const NotFound = () => {
    return (
        <div className={Style['main']}>
            <div className={Style['container']}>
                <img src='/notfound/notfound.gif' className={Style['gif']} />
                <div className={Style['titles']}>
                    <h1 className={Style['title']}>Ошибка 404:</h1>
                    <h1 className={Style['title']}>Страница не найдена</h1>
                    <Link href={'/'} className={Style['home']}>Вернуться на главную</Link>
                </div>
            </div>
        </div>
    )
}