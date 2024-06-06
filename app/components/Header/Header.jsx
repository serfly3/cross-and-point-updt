import Style from './Header.module.css'
import Link from 'next/link'

export const Header = () => {
    return (
        <header className={Style['header']}>
            <h1>
                <Link href="/">
                    <img
                        alt="logo"
                        src="/logo/logo.svg"
                        style={{ width: 210 }}
                        className={Style['logo_header']}
                    />
                </Link>
            </h1>
            <a href="index.html"></a>
            <div className={Style['links']}>
                <a href="https://t.me/ser_flu" target='_blank'>
                    <img
                        alt="telegram"
                        src="https://cdn-icons-png.flaticon.com/128/2504/2504941.png"
                    />
                </a>
                <a href="https://vk.com" target='_blank'>
                    <img
                        alt="vk"
                        src="https://cdn-icons-png.flaticon.com/128/2504/2504953.png"
                    />
                </a>
                <a href="https://youtube.com" target='_blank'>
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/2504/2504965.png"
                        alt="youtube"
                    />
                </a>
            </div>
        </header>
    )
}