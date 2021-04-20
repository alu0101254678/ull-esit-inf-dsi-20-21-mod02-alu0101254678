import 'mocha';
import {expect} from 'chai';
import {suma} from '../src/index';

describe('Test de suma', () => {
  it('Test', () => {
    const suma1: number = suma(2, 3);

    expect(suma1).to.be.equal(5);
  });
});
