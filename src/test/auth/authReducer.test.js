import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {

    test('should return defualt state', () => {
        const state = authReducer({logged: false}, {});
        expect(state).toEqual({
            logged: false
        })
    })

    test('should autenticate & set user name', () => {
        const accion = {
            type: types.login, 
            payload: {
                name: 'Guido'
            }
        }

        const state = authReducer({logged: false}, accion);
        expect(state).toEqual({
            name: 'Guido',
            logged: true
        })
    })

    test('should delete username & logged in false', () => {
        const accion = {
            type: types.logout
        }

        const state = authReducer({logged: true, name: 'Guido'}, accion);
        expect(state).toEqual({
            logged: false
        })
        
    })
    
    
    

})
