import { expect } from 'chai';
import SmartError from 'smart-error';

import HttpError from '../src';

describe('HttpError', () => {

    it('checks the default values of the HttpError', () => {
        const error = new HttpError(400);
        expect(error).to.be.instanceOf(Error);
        expect(error).to.be.instanceOf(SmartError);
        expect(error).to.have.all.keys(['message', 'code', 'statusCode']);
        expect(error.message).to.be.equal('Unknown error');
        expect(error.code).to.be.equal('ERR_UNKNOWN');
        expect(error.statusCode).to.be.equal(400);
    });

    it('checks the set valudes of the HttpError', () => {
        const error = new HttpError(400, 'Some error message', 'code', { field: 'some_field' });
        expect(error).to.be.instanceOf(Error);
        expect(error).to.be.instanceOf(SmartError);
        expect(error).to.have.all.keys(['message', 'code', 'statusCode', 'field']);
        expect(error.message).to.be.equal('Some error message');
        expect(error.code).to.be.equal('ERR_CODE');
        expect(error.statusCode).to.be.equal(400);
        expect(error.field).to.be.equal('some_field');
    });

    it('gets the error instance by the statusCode', () => {
        const error = HttpError.create(400);
        expect(error).to.be.instanceOf(Error);
        expect(error).to.be.instanceOf(SmartError);
        expect(error).to.have.all.keys(['message', 'code', 'statusCode']);
        expect(error.message).to.be.equal('Bad Request');
        expect(error.code).to.be.equal('ERR_BAD_REQUEST');
        expect(error.statusCode).to.be.equal(400);
    });

    it('creates the error from the SmartError instance', () => {
        const error = HttpError.create(400, new SmartError('Some error message', 'code', { field: 'some_field' }));     
        expect(error).to.be.instanceOf(Error);
        expect(error).to.be.instanceOf(SmartError);
        expect(error).to.have.all.keys(['message', 'code', 'statusCode', 'field']);
        expect(error.message).to.be.equal('Some error message');
        expect(error.code).to.be.equal('ERR_CODE');
        expect(error.statusCode).to.be.equal(400);
        expect(error.field).to.be.equal('some_field');
	});
	
	it('checks the static codes', () => {
		expect(HttpError.FORBIDDEN).to.be.equal(403);
		expect(HttpError.IM_A_TEAPOT).to.be.equal(418);
		expect(HttpError.NOT_IMPLEMENTED).to.be.equal(501);
		expect(HttpError.GATEWAY_TIME_OUT).to.be.equal(504);
	});
});