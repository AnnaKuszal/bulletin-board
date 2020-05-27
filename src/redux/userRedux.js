/* selectors */
export const getUser = ({ user }) => user;

/* action name creator */
const reducerName = 'user';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_USER = createActionName('CHANGE_USER');

/* action creators */
export const changeUser  = payload => ({ payload, type: CHANGE_USER });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  // console.log('statePart', statePart);
  // console.log('action', action);
  switch (action.type) {
    case CHANGE_USER: {
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
