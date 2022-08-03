import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { linkSubmit } from '../js/urlInputHandler'


describe('Test linkSubmit() should be defined' , () => {
    it('Should be defined', async () => {
        expect(linkSubmit).toBeDefined();
    });
});