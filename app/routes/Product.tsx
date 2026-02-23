import React from 'react'
import Card from '~/components/Card'

export default function Product() {
    return (
        <div>
            <section className="min-h-150 border-gray-900 p-5 ">
                <p className="text-[35px] font-semibold p-4">#Our Products</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5">
                    <Card title="Marphin" author="Laxman Adhikari" price="Rs. 300" image="https://kitabkiro.com/user_uploads/books/654393258638.jpg" />
                    <Card title="Bahurupi" author="Shreyaj Subedi" price="Rs. 500" image="https://media.thuprai.com/front_covers/bahurupi.jpg" />
                    <Card title="Raktakunda" author="Krishna Abiral" price="Rs. 400" image="https://media.thuprai.com/front_covers/raktakunda.jpg" />
                    <Card title="Raktabeej" author="Krishna Abiral" price="Rs. 450" image="https://media.thuprai.com/front_covers/Raktabij_by_Krishna_Abiral_-f.jpg" />
                    <Card title="Koma" author="Kumar Nagarkoti" price="Rs. 350" image="https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2Fb325%2Fb325-8692.webp&w=3840&q=75" />
                    <Card title="Bath Tub" author="Kumar Nagarkoti" price="Rs. 300" image="https://media.thuprai.com/front_covers/bath-tub-f.jpg" />
                    <Card title="Tranzit" author="Kumar Nagarkoti" price="Rs. 300" image="https://media.thuprai.com/front_covers/tranzit-f.jpg" />
                    <Card title="Modi Aain" author="B.P Koirala" price="Rs. 300" image="https://cdn11.bigcommerce.com/s-tgrcca6nho/images/stencil/original/products/39240/72837/modi-aain-book-8312023-to-Nepal__17681.1749309249.jpg" />
                </div>
            </section>
        </div>
    )
}
