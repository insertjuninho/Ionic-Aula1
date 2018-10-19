import { Produto } from "../model/produto";
import { Categoria } from "../model/categoria";

export const CATEGORIA : Categoria[] = [
    {id : 1, nome:"Celular LG"},
    {id : 2, nome:"Celular Motorola"},
    {id : 3, nome:"Celular Samsung"},
  
] 

export const PRODUTOS : Produto[] = [
    {id : 1, nome:"Celular LG K10", preco : 799.00, image : "k10.jpg",categoria_id : 1},
    {id : 2, nome:"Celular Motorola Moto X", preco : 1000.00, image : "motox.jpg",categoria_id : 2},
    {id : 3, nome:"Celular Samsung S9", preco : 3799.00, image : "s9.jpg",categoria_id : 3},
    {id : 4, nome:"Celular LG K4", preco : 499.00, image : "k10.jpg",categoria_id : 1},
    {id : 5, nome:"Celular Samsung J5 ", preco : 999.00, image : "j5.jpg",categoria_id : 3},
    {id : 6, nome:"Celular Motorola", preco : 1499.00, image : "motoone.jpg",categoria_id : 2}
] 