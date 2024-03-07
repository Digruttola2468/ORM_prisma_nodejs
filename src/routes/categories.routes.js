import { Router } from "express";
import { prisma } from '../db.js'

const ruta = Router();

ruta.get('/', async (req,res) => {
    const catergory = await prisma.category.findMany({
        include: {
            products: true
        }
    });

    res.json(catergory);
})

ruta.post('/', async (req,res) => {
})

export default ruta;