const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_DROP":
      return { ...state, isSavedrop: true };
    case "SAVE_DROP_CLOSE":
      return { ...state, isSavedrop: false };
    case "LANG_DROP":
      return { ...state, isLangdrop: true };
    case "LANG_DROP_CLOSE":
      return { ...state, isLangdrop: false };
    case "HELP_DROP":
      return { ...state, isHelpdrop: true };
    case "HELP_DROP_CLOSE":
      return { ...state, isHelpdrop: false };
    case "HEADER_CATE_CLOSE":
      return { ...state, isheaderCate: false };
    case "HEADER_CATE_DROP":
      return { ...state, isheaderCate: true };

    default:
      return state;
  }
};
export default reducer;
