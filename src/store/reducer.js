import * as AT from '../store/actions';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AT.ADD_PERSON:
            return {
                ...state,
                persons: state.persons.concat({
                    id: Math.random(), // not really unique but good enough here!
                    name: action.personData.name,
                    age: action.personData.age
                })
            };
        
        case AT.DELETE_PERSON:
            return {
                ...state,
                persons: state.persons.filter( element => element.id !== action.deleteId)
            };

        default:
            return state;
    }
};

export default reducer;