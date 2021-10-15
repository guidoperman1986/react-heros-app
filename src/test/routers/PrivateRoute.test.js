import React from 'react';
import { mount } from "enzyme"
import { MemoryRouter } from "react-router"
import { PrivateRoute } from "../../routers/PrivateRoute"

describe('Pruebas en Private route', () => {
    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('should show the component and see if its authenticated and save into localStorage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={true}
                    component={()=><span>Listo</span>}
                    {...props}
                />
            </MemoryRouter>
        )

        expect(wrapper.find('span').exists()).toBe(true)
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/marvel');
    })
    
    test('should block the component if it is not authenticated', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={false}
                    component={()=><span>Listo</span>}
                    {...props}
                />
            </MemoryRouter>
        )

        expect(wrapper.find('span').exists()).toBe(false)
    })
    
})
