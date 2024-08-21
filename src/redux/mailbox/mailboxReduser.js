const initialState = {
  users: [],
  filter: "",
};

export const mailboxReduser = (state = initialState, action) => {
  switch (action.type) {
    case "mailbox/ADD_USER": {
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    }

    default:
      return state;
  }
};
