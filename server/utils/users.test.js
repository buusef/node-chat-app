const expect = require('expect');
const {Users} = require('./users');



describe('Users', ()=>{

    var users;

    beforeEach(()=>{
        users = new Users();
        users.users = [
        {
            id: '1',
            name: 'Ahmad',
            room: 'Node Course'
        },
        {
            id: '2',
            name: 'Koko',
            room: 'React Course'
        },
        {
            id: '3',
            name: 'Yoyo',
            room: 'Node Course'
        }
    ];
    });

    it('should add new user', ()=>{
        var users = new Users();
        var user = {
            id: '123',
            name: 'Ahmad',
            room: 'the office'
        };
        var resUser = users.addUser(user.id,user.name,user.room);
        expect(users.users).toEqual([user]);
    });

    it('shoud return names for node course', ()=>{
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Ahmad', 'Yoyo']);
    });
    it('shoud return names for node course', ()=>{
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['Koko']);
    });
    it('should return one user', ()=>{
        var user = users.getUser('1');
        expect(user).toEqual(users.users[0]);
    });
    it('should not find user', ()=>{
        var user = users.getUser('4');
        expect(user).toEqual(undefined);
    });
    it('should remove a user', ()=>{
        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });
    it('should not remove a user', ()=>{
        var userId = '1234';
        var user = users.removeUser(userId);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });
});