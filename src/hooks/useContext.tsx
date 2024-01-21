import { Product } from "@/pages/ItemsPage";
import { createContext } from "react";

export const CartItemsContext = createContext<Product[] | undefined >(undefined)