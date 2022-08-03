import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { textSubmit } from '../js/textareaHandler'


describe('Test textSubit() should be defined' , () => {
    it('Should be defined', async () => {
        expect(textSubmit).toBeDefined();
    });
});