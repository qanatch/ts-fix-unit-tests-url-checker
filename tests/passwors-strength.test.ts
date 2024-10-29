import {calculatePasswordStrength} from "../src/passwors-strength";

describe('tests calculatePasswordStrength', ()=>{

    test('should add 1 point for password length >=8',()=>{
        const password = 'password'
        expect(calculatePasswordStrength(password)).toBe("Very Weak")
    })
    test('should return "Very Weak" if passwords length is less 8 and no digits and special characters',()=> {
        const password = 'pass'
        expect(calculatePasswordStrength(password)).toBe("Very Weak")
    })
    test('should return "Very Weak" if passwords length is less 8 but with digits and uppercase letters',()=> {
        const password = 'pass12'
        expect(calculatePasswordStrength(password)).toBe("Very Weak")
    })
    test('should return "Weak" if passwords length is >=8 but low strength',()=> {
        const password = 'password12'
        expect(calculatePasswordStrength(password)).toBe("Weak")
    })
    test('should return "Moderate" if password length is >=8 and with digits, lowercase and uppercase letters',()=>{
        const password = 'Password12'
        expect(calculatePasswordStrength(password)).toBe("Moderate")
    })
    test('should return "Strong" if password length >=8 and with digits, lowercase,uppercase letters and special characters',()=>{
        const password = 'Password12!'
        expect(calculatePasswordStrength(password)).toBe("Strong")
    })
    test('should return "Strong" if password length >=8 and with digits, lowercase,uppercase letters and special characters',()=>{
        const password = 'Password12!'
        expect(calculatePasswordStrength(password)).toBe("Strong")
    })
    test('should return "Strong" if password length >=12 and with digits, lowercase,uppercase letters and special characters',()=>{
        const password = 'Password12!#'
        expect(calculatePasswordStrength(password)).toBe("Strong")
    })

})