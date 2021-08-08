import React from 'react';
import SocialIcons from '../components/ui/SocialIcons';
import { LINKS } from '../contstants';
import MainLayout from '../layouts/MainLayout';

const Contacts = () => {
    return (
        <MainLayout>
            <div className="contacts">
                <div className="phonenumber">
                    <h5>Наш телефон:</h5>
                    <a href={`tel:${LINKS.phone}`}>89055532220</a>
                </div>
                <div className="socials">
                    <h5>Наши социальные сети и мессенджеры:</h5>
                    <SocialIcons />
                </div>
            </div>
            <div className="aboutus">
                <p><h3>Продаем и доставляем обувь и акссессуары для девушек.</h3> Весь товар отличного качества, модели подобраны в соответствии с актуальными модными трендами. <br />
                    Доставляем на примерку по городу Москва и ближайшему подмосковью.<br />
                    Отправка Почтой России и СДЭК.<br />
                    Магазин ориентирован на постоянного клиента знакомого с качеством нашего товара.<br />
                    Сайт - актуальный каталог продукции.<br />
                    Заказы принимаем whatsapp и telegram, а так же по телефону.</p>
            </div>
        </MainLayout>
    );
};

export default Contacts;