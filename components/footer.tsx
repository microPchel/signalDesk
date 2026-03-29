import Item from '@/components/item_footer';

export default function Footer() {
    const icon = [
        {
            src: "/footer/facebook.webp",
            alt: "Facebook",
            link: "https://facebook.com"
        },
        {
            src: "/footer/insta.jpg",
            alt: "Instagram",
            link: "https://instagram.com"
        },
        {
            src: "/footer/Telegram.png",
            alt: "Telegram",
            link: "https://t.me/IlDente"
        },
        {
            src: "/footer/X.jpg",
            alt: "X",
            link: "https://twitter.com"
        },
        {
            src: "/footer/Youtube.png",
            alt: "Youtube",
            link: "https://www.youtube.com/"
        }
    ];
    return (
        <footer>
            <p>Connect with us</p>
            <div>
                <div className="flex row gap-6 items-center justify-center">
                    {icon.map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                        >
                            <Item
                                src={social.src}
                                alt={social.alt}
                            />
                        </a>
                    ))}
                </div>
                <div>
                    {/*Тут должны быть карточки с изображением соцсетей и подписи к ним + это ссылка*/}
                </div>
            </div>
        </footer>
    )
}