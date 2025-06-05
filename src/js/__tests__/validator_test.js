import { Validator } from "../validator";


describe ('Test for the Validator class', () => {
    const validNames = [
        { name:'natasha', validity: true },
        { name: 'Anatoliy23i', validity: true },
        { name: 'J99ooo_ancle', validity: true },
        { name: 'VERUNCHIK-CHIK', validity: true }
    ];
    const invalidNames = [
        { name: 'igor49', validity: false },
        { name: '777prints', validity: false },
        { name: 'innusik_lapusik_', validity: false },
        { name: '_dom_s_oknom', validity: false },
        { name: 'haha8787haha', validity: false },
        { name: 'Ural-', validity: false },
        { name: '-lago-Naki', validity: false },
        { name: 'Ya#yana', validity: false }
    ];

    test.each(validNames)('create an instance with valid name %s', 
        ({ name, validity }) => {
            const result = Validator.validateUsername(name);
            expect(result).toBe(validity);
        }
    )

    test.each(invalidNames)('create an instance with invalid name %s', 
        ({ name, validity }) => {
            const result = Validator.validateUsername(name);
            expect(result).toBe(validity);
        }
    )
})