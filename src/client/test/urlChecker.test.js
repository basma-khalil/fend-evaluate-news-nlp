import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { checkURL } from '../js/urlChecker'


describe('Test checkURL()' , () => {
    it('Should be defined', async () => {
        expect(checkURL).toBeDefined();
    });

	test('If the link is a valid url', async () => {
		const testCheckURL = checkURL('https://www.google.com');
		expect(testCheckURL).toBe(true);
	});

	test('If the link validation fails', async () => {
		const testCheckURL = checkURL('Testing');
		expect(testCheckURL).toBe(false);
	});
});