const expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generate location message', ()=>{
    it('should generate correct location object', ()=>{
        var from = 'Ahmad';
        var url = 'https://www.google.com/maps?q=';
        var lat = 123;
        var longi = 456;
        var res = generateLocationMessage(from, lat,longi);
        expect(res).toInclude({from,url: `${url+lat},${longi}`});
        expect(res.createdAt).toBeA('number');
    })
})