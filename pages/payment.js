import MainLayout from '../layouts/MainLayout';
import Image from 'next/image';

const Payment = () => {
    return (
        <MainLayout title="Оплата">
            <h1>Оплата</h1>
            <div className="payments">
                <Image width="200" height="200" alt="Сбер" src="/icons/sber.svg" />
                <p>Оплата производится наличными курьеру, если доставка по Москве и МО. В слуачае отправки в регионы и заграницу, оплата производится в полном объеме включая доставку переводом на банковскую карту.</p>
            </div>
        </MainLayout>
    );
};

export default Payment;