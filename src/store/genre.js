import { atom } from "recoil";

export const genreState = atom({
  key: genreState,
  default: {
    genre: [],
  },
});
