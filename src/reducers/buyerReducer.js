export default function buyerReducer(state = {}, action) {
    switch (action.type) {
        case "REGISTERED_BUYER":
            return Object.assign({}, state, { res: action.res });
        default:
            return state;
    }
}