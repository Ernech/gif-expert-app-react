import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import React from 'react';
import {AddCategory} from '../../components/AddCategory';


describe('Pruebas en <AddCategory />', () => {
    const setCategorias = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = {setCategorias}/>);

    beforeEach(() => {
        jest.clearAllMocks();    
        wrapper = shallow(<AddCategory setCategories = {setCategorias}/>);

    })

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value ='Hola Mundo';
        input.simulate('change',{ target: {value} });

        const p =wrapper.find('p').text().trim();
         expect(p).toBe(value)

    });
    test('No debe de postear la información on submit', () => {

        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });

         expect(setCategorias).not.toHaveBeenCalled()
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        //1. Simular el input change
        const input = wrapper.find('input');
        const value ='Hola Mundo';
        input.simulate('change',{ target: {value} });
        //2. Simular el submit
        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });
        //3. set categories debe de ser llamado
        expect(setCategorias).toHaveBeenCalled();
        expect(setCategorias).toHaveBeenCalledWith(expect.any(Function));
        //4 El valor del input debe estar en ''
         expect(input.text().trim()).toBe('');
    });

});