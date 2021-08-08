import React from 'react';
import Popup from './Popup';

const PopupBuy = () => {
    return (
        <Popup>
            <div className="popup-buy">
            <b>I</b>. Свяжитесь с нами с помощью <b>Whatsapp</b> или <b>Telegram</b>, нажав на одну из ссылок; <br />
            <b>II</b>. Перешлите фото товара и размер. (скачать можно нажав на кнопку "скачать изображение");<br />
            <b>III</b>. Менеджер поможет оформить заказ и выбрать способ оплаты.<br />
            </div>
        </Popup>
    );
};

export default PopupBuy;