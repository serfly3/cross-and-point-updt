import Style from './Footer.module.css'
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className={Style['footer']}>
            <div className={Style['footer__cross']}>
                <Link href="/">
                    <img
                        alt="crosss"
                        src="/logo/logo_footer.svg"
                        style={{ width: 300 }}
                        className={Style['logo_footer']}
                    />
                </Link>
                <div className={Style['links']}>
                    <a href="https://t.me/ser_flu">
                        <img
                            alt="telegram"
                            src="https://cdn-icons-png.flaticon.com/128/2504/2504941.png"
                        />
                    </a>
                    <a href="https://vk.com">
                        <img
                            alt="vk"
                            src="https://cdn-icons-png.flaticon.com/128/2504/2504953.png" />
                    </a>
                    <a href="https://www.youtube.com/">
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/2504/2504965.png"
                            alt="youtube"
                        />
                    </a>
                </div>
            </div>
            <hr className={Style['hr']} />
            <div>
                <h3 style={{ paddingTop: 24 }}>КРОССЫ И ТОЧКА ® 2024</h3>
            </div>
        </footer>
    );
}