// app.js
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Hardcoded product data
const products = [
    { id: '1', name: 'Laptop Pro X', category: 'Tech', price: 1200.00, inStock: true, imageUrl: 'https://placehold.co/150x150/FF5733/FFFFFF?text=Laptop' },
    { id: '2', name: 'Wireless Headphones', category: 'Tech', price: 150.00, inStock: true, imageUrl: 'https://placehold.co/150x150/33FF57/FFFFFF?text=Headphones' },
    { id: '3', name: 'Mechanical Keyboard', category: 'Tech', price: 90.00, inStock: false, imageUrl: 'https://placehold.co/150x150/3357FF/FFFFFF?text=Keyboard' },
    { id: '4', name: 'Ergonomic Mouse', category: 'Tech', price: 45.00, inStock: true, imageUrl: 'https://placehold.co/150x150/FF33A1/FFFFFF?text=Mouse' },
    { id: '5', name: '4K Monitor', category: 'Tech', price: 350.00, inStock: true, imageUrl: 'https://placehold.co/150x150/A133FF/FFFFFF?text=Monitor' },
    { id: '6', name: 'USB-C Hub', category: 'Tech', price: 30.00, inStock: true, imageUrl: 'https://placehold.co/150x150/FFC733/FFFFFF?text=USB+Hub' },
    { id: '7', name: 'External SSD 1TB', category: 'Tech', price: 100.00, inStock: true, imageUrl: 'https://placehold.co/150x150/33FFC7/FFFFFF?text=SSD' },
    { id: '8', name: 'Webcam HD', category: 'Tech', price: 70.00, inStock: false, imageUrl: 'https://placehold.co/150x150/C733FF/FFFFFF?text=Webcam' },
    { id: '9', name: 'Gaming Chair', category: 'Tech', price: 250.00, inStock: true, imageUrl: 'https://placehold.co/150x150/FF33C7/FFFFFF?text=Gaming+Chair' },
    { id: '10', name: 'Smartwatch', category: 'Tech', price: 200.00, inStock: true, imageUrl: 'https://placehold.co/150x150/33C7FF/FFFFFF?text=Smartwatch' },
    { id: '11', name: 'Men\'s T-shirt', category: 'Clothes', price: 25.00, inStock: true, imageUrl: 'https://placehold.co/150x150/66BB6A/FFFFFF?text=T-Shirt' },
    { id: '12', name: 'Women\'s Jeans', category: 'Clothes', price: 60.00, inStock: true, imageUrl: 'https://placehold.co/150x150/4CAF50/FFFFFF?text=Jeans' },
    { id: '13', name: 'Summer Dress', category: 'Clothes', price: 45.00, inStock: false, imageUrl: 'https://placehold.co/150x150/8BC34A/FFFFFF?text=Dress' },
    { id: '14', name: 'Winter Coat', category: 'Clothes', price: 120.00, inStock: true, imageUrl: 'https://placehold.co/150x150/CDDC39/FFFFFF?text=Coat' },
    { id: '15', name: 'Running Shoes', category: 'Clothes', price: 80.00, inStock: true, imageUrl: 'https://placehold.co/150x150/FFEB3B/FFFFFF?text=Shoes' },
    { id: '16', name: 'Casual Socks (3-pack)', category: 'Clothes', price: 10.00, inStock: true, imageUrl: 'https://placehold.co/150x150/FFC107/FFFFFF?text=Socks' },
    { id: '17', name: 'Leather Belt', category: 'Clothes', price: 35.00, inStock: true, imageUrl: 'https://placehold.co/150x150/FF9800/FFFFFF?text=Belt' },
    { id: '18', name: 'Baseball Cap', category: 'Clothes', price: 20.00, inStock: true, imageUrl: 'https://placehold.co/150x150/FF5722/FFFFFF?text=Cap' },
    { id: '19', name: 'Sportswear Shorts', category: 'Clothes', price: 30.00, inStock: false, imageUrl: 'https://placehold.co/150x150/795548/FFFFFF?text=Shorts' },
    { id: '20', name: 'Wool Scarf', category: 'Clothes', price: 40.00, inStock: true, imageUrl: 'https://placehold.co/150x150/9E9E9E/FFFFFF?text=Scarf' },
];

app.get('/api/products', (req, res) => {
    res.status(200).json(products);
});

export default app;
