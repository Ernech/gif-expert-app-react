import '@testing-library/jest-dom';
import React from 'react';
import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
    
    const titulo = "Título";
    const url = "http://algunsitio.com";
    const wrapper = shallow(<GifGridItem title = {titulo} url = {url}/>);
    
    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe tener el párrafo con el título', () => {
        const p = wrapper.find('p');
         expect(p.text().trim()).toBe(titulo)
    });

    test('Debe tener la imagen igual al url y al de los props', () => {
        const img =wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(titulo)
    });

    test('Debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.prop('className')).toContain('animate__fadeIn')
    });
});