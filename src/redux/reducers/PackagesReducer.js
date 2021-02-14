const initialState = {
  loading: false,
  packages: [],
  error: null,
  page: 1,
};

const PackagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PACKAGES_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_PACKAGES_SUCCESS':
      return {
        loading: false,
        packages: action.payload,
        error: '',
        page: state.page + 1,
      };
    case 'FETCH_PACKAGES_FAILURE':
      return {
        loading: false,
        packages: [],
        error: action.payload,
        page: 1,
      };
    default:
      return state;
  }
};

export default PackagesReducer;
