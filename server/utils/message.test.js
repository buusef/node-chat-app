const expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', ()=>{
    it('should generate the correct message object', ()=>{
        
        var from = 'Ahmad';
        var text = 'Hello';
        var res = generateMessage(from,text);
        expect(res).toInclude({
            from,
            text
        });
        expect(res.createdAt).toBeA('number');
    })
});