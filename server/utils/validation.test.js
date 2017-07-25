const expect = require('expect');
const {isRealString} = require('./validation');

describe('Validation', ()=>{
    it('should validate strings', ()=>{
        var str = 'asdasd';
        var res = isRealString(str);
        expect(res).toBeA('boolean');
        expect(res).toBe(true);
    });
    it('should reject non-string values', ()=>{
        var str = 87;
        var res = isRealString(str);
        expect(res).toBe(false);
    });

    it('should reject string with only spaces', ()=>{
        var res = isRealString('     ');
        expect(res).toBe(false);
    });

        it('should allow string with spaces', ()=>{
        var res = isRealString('  ahmad   ');
        expect(res).toBe(true);
    });
})
