

const initialState = {
    state1: 'false',
    user: '',
  }

export default function reducer(state=initialState,action){
    if(action.type === 'stateChanged'){
        return {
            state1: action.payload.state1,
            user:action.payload.user,
        }
        
    }

    return state;
}