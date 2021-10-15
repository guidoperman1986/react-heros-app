import React from 'react';
import { mount } from "enzyme";
import { MemoryRouter } from 'react-router';
import { AuthContext } from '../../auth/AuthContext';
const { DashboardRoutes } = require("../../routers/DashboardRoutes")

describe('Pruebas en DashboardRoutes', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Reberto'
        }
    }

    test('should show correctly', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes 

                    />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot();
    })
    
})
