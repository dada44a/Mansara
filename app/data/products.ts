export interface Product {
    id: string;
    title: string;
    author: string;
    price: string;
    numericPrice: number;
    image: string;
    description: string;
}

export const products: Product[] = [
    {
        id: "1",
        title: "Marphin",
        author: "Laxman Adhikari",
        price: "Rs. 300",
        numericPrice: 300,
        image: "https://kitabkiro.com/user_uploads/books/654393258638.jpg",
        description: "A compelling narrative exploring the depths of human emotion and resilience in the face of adversity."
    },
    {
        id: "2",
        title: "Bahurupi",
        author: "Shreyaj Subedi",
        price: "Rs. 500",
        numericPrice: 500,
        image: "https://media.thuprai.com/front_covers/bahurupi.jpg",
        description: "An intricate tale of identity and transformation, woven with elements of mystery and folklore."
    },
    {
        id: "3",
        title: "Raktakunda",
        author: "Krishna Abiral",
        price: "Rs. 400",
        numericPrice: 400,
        image: "https://media.thuprai.com/front_covers/raktakunda.jpg",
        description: "A historical fiction that delves into the secret chronicles of power and passion in ancient kingdoms."
    },
    {
        id: "4",
        title: "Raktabeej",
        author: "Krishna Abiral",
        price: "Rs. 450",
        numericPrice: 450,
        image: "https://media.thuprai.com/front_covers/Raktabij_by_Krishna_Abiral_-f.jpg",
        description: "A gripping sequel exploring the legacy of conflict and the indomitable spirit of survival."
    },
    {
        id: "5",
        title: "Koma",
        author: "Kumar Nagarkoti",
        price: "Rs. 350",
        numericPrice: 350,
        image: "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2Fb325%2Fb325-8692.webp&w=3840&q=75",
        description: "A surreal journey through the subconscious, blurring the lines between reality and dreams."
    },
    {
        id: "6",
        title: "Bath Tub",
        author: "Kumar Nagarkoti",
        price: "Rs. 300",
        numericPrice: 300,
        image: "https://media.thuprai.com/front_covers/bath-tub-f.jpg",
        description: "Experimental fiction that challenges conventional storytelling through a series of evocative vignettes."
    },
    {
        id: "7",
        title: "Tranzit",
        author: "Kumar Nagarkoti",
        price: "Rs. 300",
        numericPrice: 300,
        image: "https://media.thuprai.com/front_covers/tranzit-f.jpg",
        description: "A poetic exploration of transition and movement, capturing moments of profound stillness."
    },
    {
        id: "8",
        title: "Modi Aain",
        author: "B.P Koirala",
        price: "Rs. 300",
        numericPrice: 300,
        image: "https://cdn11.bigcommerce.com/s-tgrcca6nho/images/stencil/original/products/39240/72837/modi-aain-book-8312023-to-Nepal__17681.1749309249.jpg",
        description: "A philosophical masterpiece by the legendary B.P. Koirala, exploring human nature and morality."
    }
];
