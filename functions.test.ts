const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // test("Return an Array", () => {
    //     expect(shuffleArray([])).toEqual([]);
    // });
    test('name in shuffleArray', () => {
        expect("Globotron").toContain("tron")
      })
      
      
      test('Robot and id should match', () => {
        const obj = {
        id: '8',
        name: 'Self-Aware Garbage Android', 
        imgAddress: 'https://robohash.org/garbage',
        health: 95,
        damage: 15
      };
        expect(obj.id).toEqual('8')
      
      });

    test("return the same length as the argument passed", () => {
        expect(shuffleArray([1, 2, 3]).length).toEqual(3);
    });

})