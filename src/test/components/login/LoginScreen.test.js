import React from 'react';
import { mount } from "enzyme";
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from "../../../components/login/LoginScreen";
import '@testing-library/jest-dom';
import { types } from '../../../types/types';

describe('Purebas en LoginScreen', () => {
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Reberto'
        }
    }


    
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <LoginScreen />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
        
    )

    afterEach(()=> {
        jest.clearAllMocks();
    })

    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    /* test('should make dispatch and navigation', () => {
        wrapper.find('button').prop('onClick')();
        
        expect(contextValue.dispatch).toHaveBeenCalled({
            type: types.login,
            payload: {
                name: 'Roberto'
            }
        });
        expect(historyMock.replace).toHaveBeenCalled();
    }) */
    
    
    
})
