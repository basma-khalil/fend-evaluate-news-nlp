import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { postData } from '../js/postRoute'


describe('Test postData() should be defined' , () => {
    it('Should be defined', async () => {
        expect(postData).toBeDefined();
    });
});