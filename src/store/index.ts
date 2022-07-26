import { createStore } from "easy-peasy";
import { StoreModel } from "./interface";
import todo from "./model";

const store = createStore<StoreModel>(todo);

export default store;
