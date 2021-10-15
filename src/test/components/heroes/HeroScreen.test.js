import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
const { shallow, mount } = require("enzyme")

describe('Pruebas en HeroScreen', () => {
    const history = {
        length: 10,
        goBack: jest.fn(),
        push: jest.fn()
    }

    
    test('should show redirect component if there are no argmuments in url', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={history} />
    
            </MemoryRouter>
        
        );
        expect(wrapper.find('Redirect').exists()).toBe(true);
    })

    test('should show hero if the prarameter exist ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId"  component={HeroScreen}/>
    
            </MemoryRouter>

        )

        expect(wrapper.find('.row').exists()).toBe(true);
    })

    test('should return to the last screen with push', () => {
        const history = {
            length: 1,
            goBack: jest.fn(),
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeId"  
                    component={()=> <HeroScreen history={history} />}
                />
    
            </MemoryRouter>

        )

        wrapper.find('button').prop('onClick')();

        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();
    })
    
    test('should return to the last screen with GoBack', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeId"  
                    component={()=> <HeroScreen history={history} />}
                />
    
            </MemoryRouter>

        )

        wrapper.find('button').prop('onClick')();

        expect(history.push).not.toHaveBeenCalled();
        expect(history.goBack).toHaveBeenCalled();
    })

    test('should redirect if the hero does not exist', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider312321321321']}>
                <Route 
                    path="/hero/:heroeId"  
                    component={()=> <HeroScreen history={history} />}
                />
    
            </MemoryRouter>

        )
        expect(wrapper.text()).toBe('');
    })
    
    
    
    
})
