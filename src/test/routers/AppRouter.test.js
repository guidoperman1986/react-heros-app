import React from 'react';
import { mount } from "enzyme"
import { AppRouter } from "../../routers/AppRouter"
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en AppRouter', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    test('should show login if it is not authenticated', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter 

                />
            </AuthContext.Provider>
            
        )

        expect(wrapper).toMatchSnapshot();
    })

    test('should show marvel component if its authenticated', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Reberto'
            }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter 

                />
            </AuthContext.Provider>
            
        )

        expect(wrapper.find('.navbar').exists()).toBe(true);
    })
    
    
})
