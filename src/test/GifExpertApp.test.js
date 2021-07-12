import '@testing-library/jest-dom'
import React from 'react';
import {shallow} from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en el componente <GifExpertApp/>.', () => {
    
    
    test('Debe ser igual a su snapshot', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar una lista de categorías', () => {
        
        const categories = ['Music', 'Crash Bandicoot']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });

});