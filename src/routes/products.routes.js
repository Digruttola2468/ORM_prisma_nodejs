import { Router } from "express";
import { prisma } from "../db.js";

const ruta = Router();

ruta.get("/", async (req, res) => {
  const productsList = await prisma.product.findMany();

  res.json({ status: "success", payload: productsList });
});

ruta.get("/:id", async (req, res) => {
  const getOne = await prisma.product.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
    include: {
      category: true,
    },
  });

  if (!getOne)
    return res
      .status(404)
      .json({ status: "error", message: "Product Not Found" });

  res.json({ status: "success", payload: getOne });
});

ruta.post("/", async (req, res) => {
  try {
    const newProduct = await prisma.product.create({
      data: req.body,
    });

    res.json({ status: "success", payload: newProduct });
  } catch (error) {
  }
});

ruta.delete("/:id", async (req, res) => {
  const productDelete = await prisma.product.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (!productDelete)
    return res
      .status(404)
      .json({ status: "error", message: "Product Not Found" });

  res.json({ status: "success", message: "Operacion Exitosa" });
});

export default ruta;
