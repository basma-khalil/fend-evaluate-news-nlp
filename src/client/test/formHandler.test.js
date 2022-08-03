import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { handleSubmit } from '../js/formHandler'


describe('Test handleSubmit() should be defined' , () => {
    it('Should be defined', async () => {
        expect(handleSubmit).toBeDefined();
    });
});