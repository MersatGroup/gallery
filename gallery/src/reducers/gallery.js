const reducer = (gallery = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return gallery;

    default:
      return gallery;
  }
};

export default reducer;
