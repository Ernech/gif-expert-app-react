import '@testing-library/jest-dom';
import React from 'react';
import {GifGrid} from '../../components/GifGrid';
import {shallow} from 'enzyme';
import {useFetchGifs} from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid/>', () => {
    const category = 'Music';
    test('Debe coincidir con el snapshot', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });
        const wrapper = shallow(<GifGrid category = {category}/>)
         expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [{
            id:'ACB',
            url:'https://localhost/clualquiercosa.jpg',
            title:'Cualquier cosa'
        },
        {
            id:'ACB',
            url:'https://localhost/clualquiercosa.jpg',
            title:'Cualquier cosa'
        }];
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        });
        const wrapper = shallow(<GifGrid category = {category}/>)
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

    });
});
