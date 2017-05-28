const assert = require('assert');
const {handle500, handle404, getError, NotFoundError, ConflictError, InternalServerError} = require('../');

const DEFAULT_500_RESPONSE = {type: 'InternalServerError', message: 'Internal Server Error', statusCode: 500};

function ResPolyfill() {
    this.status = (val) => {
        if (!val) return this._status;
        this._status = val;
        return this;
    };
    this.json = (val) => {
        if (!val) return this._json;
        this._json = val;
        return this;
    };
}

describe('Test NotFoundError', () => {

    it('should be instance of Error', () => {
        const err = new NotFoundError;
        assert(err instanceof Error)
    });

    it('should not be instance of an other Error', () => {
        const err = new NotFoundError;
        assert(!(err instanceof ConflictError))
    });

});

describe('Test handle404', () => {

    it('should call next with a NotFoundError', (done) => {
        handle404(null, null, (err) => {
            assert(err.hasOwnProperty('name'));
            assert(err instanceof NotFoundError);
            assert(err.message = 'Not Found');
            done()
        })
    });

});

describe('Test handle500', () => {

    it('should call next with a NotFoundError', () => {
        const res = new ResPolyfill();
        const err = new Error('test');
        handle500(err, null, res, null);
        assert.deepEqual(res.json(), {error: DEFAULT_500_RESPONSE});
    });

    it('should call next with a NotFoundError', () => {
        const res = new ResPolyfill();
        const err = new InternalServerError('test');
        handle500(err, null, res, null);
        assert.deepEqual(res.json(), {error: DEFAULT_500_RESPONSE});
    });

});

describe('Test getError', () => {

    it('should return NotFoundError when 404 is passed', () => {
        assert.strictEqual(getError(404), NotFoundError);
    });

    it('should return undefined when an invalid code is passed', () => {
        assert.strictEqual(getError(-1), undefined);
    });

});
