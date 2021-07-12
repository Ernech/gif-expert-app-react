import '@testing-library/jest-dom'
import {useFetchGifs} from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks';

describe('Debe retornar el estado inicial', () => {

    test('Debe retornar el estado inicial', async() => {
     const {result,waitForNextUpdate} = renderHook(()=> useFetchGifs('Music'));
     const {data,loading} = result.current;

     await waitForNextUpdate();

      expect(data).toEqual([]);
       expect(loading).toBe(true);
    });

    test('Debe retornar un arreglo de imágenes y el loading en false', async() => {
        const {result,waitForNextUpdate} = renderHook(()=> useFetchGifs('Music'));
        await waitForNextUpdate();
        const {data,loading} = result.current;
      expect(data.length).toBe(10);
       expect(loading).toBe(false);
    });

});