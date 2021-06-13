import bcrypt from 'bcryptjs';

const data = {
    users: [{
            name: 'Gurpreet',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Vishwas',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [{

            name: 'Nike slim Shirt',
            category: 'Shirts',
            image: '/image/p1.jpg',
            price: 120,
            countInStock: 20,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'Adidas Shirt',
            category: 'Shirts',
            image: '/image/p2.jpg',
            price: 110,
            countInStock: 10,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 7,
            description: 'high quality product',
        },
        {

            name: 'Lacoste Shirt',
            category: 'Shirts',
            image: '/image/p3.jpg',
            price: 154,
            countInStock: 11,
            brand: 'Lacoste',
            rating: 4.0,
            numReviews: 12,
            description: 'high quality product',
        },
        {

            name: 'Nike slim Pant',
            category: 'Pants',
            image: '/image/p4.jpg',
            price: 160,
            countInStock: 0,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'Puma slim Pant',
            category: 'Pant',
            image: '/image/p5.jpg',
            price: 130,
            countInStock: 13,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 20,
            description: 'high quality product',
        },
        {

            name: 'Adidas fit Pant',
            category: 'Pant',
            image: '/image/p6.jpg',
            price: 130,
            countInStock: 25,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 12,
            description: 'high quality product',
        },
    ],
};
export default data;