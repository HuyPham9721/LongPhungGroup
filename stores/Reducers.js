import { ACTION } from "./Action";
const reducers = (state, action) => {
  switch (action.type) {
    case ACTION.NOFITY:
      return { ...state, nofity: action.payload };
    case ACTION.AUTH:
      return { ...state, auth: action.payload };
    default:
      return state;
  }
};

export default reducers;
