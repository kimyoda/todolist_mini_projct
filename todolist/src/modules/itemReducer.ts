import { Item } from "../types/type";

const ADD = "itemReducer/ADD" as const;
const DELETE = "itemReducer/DELETE" as const;
const CLEAR = "itemReducer/CLEAR" as const;

export const addItem = (id: string, name: string, clear: boolean) => ({
  type: ADD,
  payload: { id, name, clear },
});
