import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Payment = () => {
    return (
        <MainLayout>
            <h1>Оплата</h1>
            <div className="payments">
                <img src="/icons/sber.svg" />
                <p>Оплата производится наличными курьеру, если доставка по Москве и МО. В слуачае отправки в регионы и заграницу, оплата производится в полном объеме включая доставку переводом на банковскую карту.</p>
            </div>
        </MainLayout>
    );
};

export default Payment;