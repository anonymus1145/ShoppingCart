import { Product } from "@/pages/ItemsPage";
import { createContext } from "react";

export const CartItemsContext = createContext<Product[] | undefined >(undefined)

export const CartItems = createContext<Product[] | undefined >(undefined)