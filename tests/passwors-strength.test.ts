import {calculatePasswordStrength} from "../src/passwors-strength";


describe('tests calculatePasswordStrength', ()=>{
    test('returns "Very Weak" for passwords less than 8 characters without other criteria', () => {
        expect(calculatePasswordStrength("password")).toBe("Very Weak");
    })
    test('returns "Very Weak" for passwords less than 8 characters and digits', () => {
        expect(calculatePasswordStrength("pass1")).toBe("Very Weak");
    })

    test('returns "Weak" for passwords strength equal 3 with length >=8 and digital|| uppercase', () => {
        expect(calculatePasswordStrength("password1")).toBe("Weak");
        expect(calculatePasswordStrength("Password")).toBe("Weak");
    })

    test('returns "Moderate" for passwords strength equal 4 with uppercase and lowercase letters, and numbers', () => {
         expect(calculatePasswordStrength("Password123")).toBe("Moderate");
    })

    test('returns "Strong" for passwords strength equal 5 with uppercase, lowercase, numbers, and special characters', () => {
        expect(calculatePasswordStrength("Password123!@#")).toBe("Strong");

    })

})



