import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Delivery = () => {
    return (
        <MainLayout>
            <h2>Доставка по г. Москва и МО</h2>
            <table>
                <tr><td>Внутри МКАД</td><td>500 руб.</td></tr>
                <tr><td>За МКАД</td><td>40 руб./км + 300 руб.</td></tr>
            </table>
            <h2>Отправка</h2>
            <table>
                <tr><td>Почтой</td><td>500 руб.</td></tr>
                <tr><td>Курьером</td><td>1000 руб.</td></tr>
            </table>
        </MainLayout>
    );
};

export default Delivery;