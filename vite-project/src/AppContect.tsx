import { createContext } from "react";
interface AppContextType{
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

export const AppContext = createContext<AppContextType|null>(null);