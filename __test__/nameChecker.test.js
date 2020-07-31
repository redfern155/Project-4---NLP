import {checkForName} from "../src/client/js/nameChecker"

test('User input is a valid URL', ()=> {
    expect(checkForName('https://www.google.com')).toBe(1);
})

test('User input is not a valid URL', ()=> {
    expect(checkForName('google.com')).toBe(0);
})