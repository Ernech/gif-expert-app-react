import '@testing-library/jest-dom'

import {getGIfs} from '../../helpers/getGifs'

describe('Pruebas con getGifs fetch', () => {
    test('Debe devolver 10 elementos', async () => {
        const gifs = await getGIfs('Crash bandicoot');
         expect(gifs.length).toBe(10)
    });


    test('Categoría vacía', async () => {
        const gifs = await getGIfs('');
         expect(gifs.length).toBe(0)
    });
});