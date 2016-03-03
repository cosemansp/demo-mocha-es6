var sandbox;
beforeEach(function () {
    // create a sandbox to manage all spies and stubs
    sandbox = sinon.sandbox.create();
});

afterEach(function () {
    // remove all spies and stubs
    sandbox.restore();
});
