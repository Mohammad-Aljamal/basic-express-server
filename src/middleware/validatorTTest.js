// 'use strict';
// const validator = require('./validator');
// describe("validator middleware testing ", () => {
//     let consoleSpy;
//     let req = {};
//     let res = {};
//     let next = jest.fn();
//     beforeEach(() => {
//         consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {
//             console.info("message");
//         });
//     });

//     test('it\'s validator things', () => {
//         validator(req, res, next);
//         expect(consoleSpy).toHaveBeenCalled();
//     })
//     it('it calls next method', () => {
//         validator(req, res, next);
//         expect(next).toHaveBeenCalled();
//     });

//     afterEach(() => {
//         consoleSpy.mockRestore();
//     });
// })