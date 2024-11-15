import {calculatePasswordStrength} from "../src/passwors-strength";


describe('tests  calculatePasswordStrength return "Very Weak" ', ()=> {
    test('returns "Very Weak" for passwords less than 8 characters without other criteria', () => {
        expect(calculatePasswordStrength("passwor")).toBe("Very Weak")
    })
    test('returns "Very Weak" for passwords less than 8 characters with  uppercase letters', () => {
        expect(calculatePasswordStrength("Passwor")).toBe("Very Weak")
    })
    test('returns "Very Weak" for passwords less than 8 characters and digits', () => {
        expect(calculatePasswordStrength("pass1")).toBe("Very Weak")
    })
})
describe('test  calculatePasswordStrength return "Weak"', ()=> {

    test('returns "Weak" for passwords strength equal 3 with length >=8 and digital', () => {
        expect(calculatePasswordStrength("password1")).toBe("Weak")
    })
    test('returns "Weak" for passwords strength equal 3 with length >=8 and uppercase', () => {
        expect(calculatePasswordStrength("Password")).toBe("Weak")
    })
    test('returns "Weak" for passwords strength equal 3 with length >=8 and special characters', () => {
        expect(calculatePasswordStrength("passwor#")).toBe("Weak")
    })
})
describe('test  calculatePasswordStrength return "Moderate"', ()=> {

    test('returns "Moderate" for passwords strength equal 4 with with length >=8,uppercase,lowercase letters, and numbers', () => {
        expect(calculatePasswordStrength("Password123")).toBe("Moderate")
    })
    test('returns "Moderate" for passwords strength equal 4 with with length < 8,uppercase,lowercase letters, and special characters', () => {
        expect(calculatePasswordStrength("Pass12#")).toBe("Moderate")
    })
})
describe('test  calculatePasswordStrength return "Strong"', ()=> {

    test('returns "Strong" for passwords strength equal 5 with with length >8,uppercase, lowercase, numbers, and special characters', () => {
        expect(calculatePasswordStrength("Pass123!@#")).toBe("Strong")

    })
    test('returns "Strong" for passwords strength equal or more then 5, with length >=12,uppercase, lowercase, numbers, and special characters', () => {
        expect(calculatePasswordStrength("Password123!@#")).toBe("Strong")

    })

})



