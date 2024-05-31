"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useLayoutEffect,
} from "react";

type CartItem = {
  id: number;
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
  | { type: "REMOVE_ITEM"; id: number; amount: 1 }
  | { type: "CLEAR_CART" };

const initialState: CartState = {
  items: [],
  total: 0,
  amount: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  let newState: CartState;
  switch (action.type) {
    case "ADD_ITEM":
      newState = {
        ...state,
        items: [...state.items, action.item],
        total: state.total + action.item.value,
        amount: state.amount + action.amount,
      };
      break;
    case "REMOVE_ITEM":
      const filteredItems = state.items.filter((item) => item.id !== action.id);
      const removeItem = state.items.find((item) => item.id === action.id);
      newState = {
        ...state,
        items: filteredItems,
        total: removeItem ? state.total - removeItem.value : state.total,
        amount: removeItem ? state.amount - action.amount : state.amount,
      };
      break;
    case "CLEAR_CART":
      newState = initialState;
      break;
    default:
      newState = state;
      break;
  }

  // 状態をローカルストレージに保存
  if (typeof window !== "undefined") {
    localStorage.setItem("cartState", JSON.stringify(newState));
  }
  return newState;
};

const CartContext = createContext<CartState | undefined>(undefined);
const CartDispatchContext = createContext<
  React.Dispatch<CartAction> | undefined
>(undefined);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, (initial) => {
    if (typeof window !== "undefined") {
      const storedState = localStorage.getItem("cartState");
      return storedState ? JSON.parse(storedState) : initial;
    }
    return initial;
  });

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartState", JSON.stringify(state));
    }
  }, [state]);

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

export const useCartState = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("state is undefined");
  }
  return context;
};

export const useCartDispatch = () => {
  const context = useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error("dispatch is undefined");
  }
  return context;
};

export default CartProvider;
