/* selectors */
export const getUser = ({ user }) => user;

/* action name creator */
const reducerName = 'user';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const TOGGLE_LOGIN = createActionName('TOGGLE_LOGIN');

/* action creators */
export const toggleLogin = payload => ({ payload, type: TOGGLE_LOGIN });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  // console.log('statePart', statePart);
  // console.log('action', action);
  switch (action.type) {
    case TOGGLE_LOGIN: {
      if(!statePart.logged) {
        return {
          ...statePart,
          logged: true,
        };
      } else {
        return {
          ...statePart,
          logged: false,

        };
      }
    }
    default:
      return statePart;
  }
};
