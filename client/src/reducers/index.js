
const initialState = {
    pokemons : [],
    allPokemons: [],
    types: []
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_POKEMONS':
            return{
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }
            case 'GET_POKEMONS_NAME':
                return{
                    ...state,
                    pokemons: action.payload
                }
            case 'FILTER_TYPES':
                const allPokemons = state.allPokemons
                const typesFiltered = action.payload === 'all' ? allPokemons : allPokemons.filter(e => e.types.map(el => el.name).includes(action.payload))
                console.log(typesFiltered)
                return {
                    ...state,
                    pokemons: typesFiltered
                }
            case 'FILTER_CREATED':
                const allSavedPokemons = state.allPokemons;
                const filterCreateOrExisting = action.payload === "created" ? allSavedPokemons.filter(p => p.id_Pokemon.length > 20) : allSavedPokemons.filter(p => p.id_Pokemon <= 40); 
                return {
                    ...state,
                    pokemons: filterCreateOrExisting
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

            case 'POST_POKEMON':
                return{
                    ...state
                }
            case 'GET_TYPES':
                return{
                    ...state,
                    types: action.payload
                }
        
        default: return state
    }
}
export default rootReducer