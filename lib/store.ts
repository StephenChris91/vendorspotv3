//setup gloabl state to hold products, user, and cart using jotai
import { atom } from "jotai";

// Path: lib/store.ts

const productsAtom = atom([]);
const userAtom = atom(null);
const cartAtom = atom([]);

export { productsAtom, userAtom, cartAtom };
