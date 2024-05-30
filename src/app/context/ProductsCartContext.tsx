import React, { ReactNode, createContext, useContext, useReducer } from "react";

type CartItem = {
  title: string;
  value: number;
};

type CartState = {
  items: CartItem[];
  total: number;
  amount: number;
};

type CartAction =
  | { type: "ADD_ITEM"; item: CartItem; amount: 1 }
  | { type: "REMOVE_ITEM"; title: string; amount: 1 }
  | { type: "CLEAR_CART" };

const initialState: CartState = {
  items: [],
  total: 0,
  amount: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.item],
        total: state.amount + action.item.value,
        amount: state.total + action.amount,
      };
    case "REMOVE_ITEM":
      const filteredItems = state.items.filter(
        (item) => item.title !== action.title
      );
      const removeItem = state.items.find(
        (item) => item.title === action.title
      );
      return {
        ...state,
        items: filteredItems,
        total: removeItem ? state.total - removeItem.value : state.total,
        amount: state.amount - action.amount,
      };
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
};

const CartContext = createContext<CartState | undefined>(undefined);
const CartDispatchContext = createContext<
  React.Dispatch<CartAction> | undefined
>(undefined);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

export const useCartState = () => useContext(CartContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
export default CartProvider;
