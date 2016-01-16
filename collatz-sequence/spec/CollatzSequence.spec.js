import CollatzSequence from '../src/CollatzSequence';

describe('If n is ', () => {
    
    it('even, should return n/2', () => {
        let c = new CollatzSequence();

        expect(c.rule(20)).toEqual(10);
        expect(c.rule(2)).toEqual(1);
        expect(c.rule(12)).toEqual(6);
    });

    it('odd, should return 3n + 1', () => {
        let c = new CollatzSequence();

        expect(c.rule(13)).toEqual(40);
        expect(c.rule(3)).toEqual(10);
        expect(c.rule(5)).toEqual(16);
    });
    
});