import express from "express";

// ROUTES
import productRoutes from './routes/products.routes.js'
import cartegoryRoutes from './routes/categories.routes.js'

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/category', cartegoryRoutes)

app.listen(3000);
console.log("localhost:3000");