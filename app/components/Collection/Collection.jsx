'use client'
import Style from './Collection.module.css'

export const Collection = () => {
    const years = new Date().getFullYear()
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    const mounth = months[new Date().getMonth()]
    return (
        <h1 className={Style['h1']}>Коллекция. {mounth} {years}</h1>
    )
}