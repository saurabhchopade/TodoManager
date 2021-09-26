

const initialState = {
    state1: 'false',
  }

export default function reducer(state=initialState,action){
    if(action.type === 'stateChanged'){
        return {
            state1: action.payload.state1,
        }
        
    }

    return state;
}