export const logger = (reducer: any) => {
  return (state: any, actions: { type: string; payload: any }) => {
    const nextState = reducer(state, actions);
    console.group(actions.type);
    console.log("previous state", state);
    console.log("next state", nextState);
    console.groupEnd();
  };
};
