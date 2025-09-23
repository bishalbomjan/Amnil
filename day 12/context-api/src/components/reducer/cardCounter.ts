export interface actionCoutner {
  type: "INCREMENT" | "RESET";
}
const cardCounter = (state: number, action: actionCoutner): number => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};
export default cardCounter;
