import myService from './myService';

describe('sample test', () => {

    it('should pass', () => {
        // (true).should.equal(true);
        expect(true).to.equal(true);
    })

    it('should verify async result successfull', async () => {

        // act
        var result = await myService.doAsyncWork('abc');

        // assert
        expect(result).to.equal('abc');
    })

    it('should throw - async/await', async (done) => {

        try {
            var result = await myService.doAsyncWork();
            done('failed');
        }
        catch(err) {
            done();
        }
    })

    it(`should throw - chai as promised`, () => {

        return expect(myService.doAsyncWork()).to.rejectedWith(Error);

    });

})
