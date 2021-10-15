import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from "../../../components/search/SearchScreen";
import '@testing-library/react'


describe('Pruebas de SearchScreen', () => {
    test('should show correctly with defaults values', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={SearchScreen}>

                </Route>
            </MemoryRouter>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero')
    })

    test('should show Batman and the input with query string value', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={SearchScreen}>

                </Route>
            </MemoryRouter>
        )

        expect(wrapper.find('input').prop('value')).toBe('batman')
        expect(wrapper).toMatchSnapshot();
    })

    test('should show an error if there is no hero found', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman2525']}>
                <Route path="/search" component={SearchScreen}>

                </Route>
            </MemoryRouter>
        )

        expect(wrapper.find('.alert-danger').text().trim()).toBe('There is no a hero with batman2525');
    })

    test('should call history push', () => {
        const history = {
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman2525']}>
                <Route 
                    path="/search" 
                    component={ ()=><SearchScreen history={history} />}
                >

                </Route>
            </MemoryRouter>
        )

        wrapper.find('input').simulate('change', { //cambio en la caja de texto
            target: {
                name: 'searchText',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({ //submit form
            preventDefault(){}
        })

        expect(history.push).toHaveBeenCalledWith('?q=batman')
        
    })
    
    
    
    
})
