
const initialState = {
    pokemons : [],
    allPokemons: []
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_POKEMONS':
            return{
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }
        case 'FILTER_BY_TYPE':
            const allPokemons = state.allPokemons
            const typesFiltered = action.payload === 'all' ? allPokemons : allPokemons.filter(e => e.types.includes(action.payload))
            return{
                ...state,
                pokemons: typesFiltered
            }
        case 'FILTER_CREATED':
            const allPokemons2 = state.allPokemons
            const createdFilter = action.payload === 'created' ? allPokemons2.filter(el => el.createdInDb) : allPokemons2.filter(el => !el.createdInDb)
            return{
                ...state,
                pokemons: action.payload === 'all' ? state.allPokemons : createdFilter 
            }
        case 'ORDER_BY_NAME':
            const sortedArr = action.payload === 'asc' ?
             state.pokemons.sort(function (a, b){ 
                if(a.name > b.name) return 1;
                if(a.name < b.name) return -1;
                return 0;
            }) : 
            state.pokemons.sort(function (a, b) {
                if(a.name > b.name) return -1;
                if(a.name < b.name) return 1;
                return 0;
            });
            return {
                ...state,
                pokemons: sortedArr
            }
            
            case 'ORDER_BY_ATTACK':
                    
                const sortAttack = action.payload === 'strong' ?
                state.pokemons.sort(function (a, b) {
                    if(a.attack > b.attack) return -1; 
                    if(b.attack > a.attack) return 1;
                    return 0;
                })
                :
                state.pokemons.sort(function(a, b) {
                 if(a.attack > b.attack) return 1; 
                 if(b.attack > a.attack) return -1;
                 return 0;
                }) 
                 return {
                     ...state,
                     pokemons:sortAttack,
                 }   
        
        default: return state
    }
}
export default rootReducer