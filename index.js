const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200,
};

const reducer = (state = initialWagonState, action) =>{
  switch(action.type){
    case 'gather':{
      return{
        ...state,
        supplies: state.supplies +15,
        distance: state.distance,
        days: state.days+1
      }
    }
    case 'travel':{
      const days= action.payload;
      const newSupplies = state.supplies -(20*days);
      if (newSupplies < 0){
        return state;
      }

      return {
        ...state,
        supplies: newSupplies,
        distance: state.distance +(10*days),
        days: state.days + days
      }
    }
    case 'tippedWagon' :{
      return{
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1
      }
    }

    case 'sell':{
      return{
        ...state, 
        supplies : state.supplies -20,
        cash: state.cash +5
      }
    }

     case 'buy':{
      return{
        ...state, 
        supplies : state.supplies +25,
        cash: state.cash -15
      }
    }

     case 'theft':{
      return{
        ...state, 
        cash: state.cash /2
      }
    }

    default: 
      return state;
  }
};

let wagon = reducer(undefined, {})
console.log(wagon)
wagon= reducer(wagon, {type: 'travel', payload:1});
console.log(wagon)
wagon= reducer(wagon, {type: 'gather'})
console.log(wagon)
wagon = reducer(wagon, {type: 'tippedWagon'});
console.log(wagon)
wagon = reducer(wagon, {type: 'sell'});
console.log(wagon)
wagon = reducer(wagon, {type: 'buy'});
console.log(wagon)
wagon = reducer(wagon, {type: 'theft'});
console.log(wagon)

