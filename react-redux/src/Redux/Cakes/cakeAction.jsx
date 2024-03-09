import { BUY_CAKE } from "./cakeType";

//* Defined an action creator buyCakes which is basically a function which returns an object with a property of "type"

export const buyCakes = () => {
  return {
    type: BUY_CAKE,
  };
};
