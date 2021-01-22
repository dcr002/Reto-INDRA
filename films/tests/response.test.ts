import { response } from '../src/components/response';

describe('Response', () => {
  
  test('Response is defined', () => {
    expect(response.data('')).toBeDefined();
  })

  test('Response data function match', () => {
    expect(new response('jest test')).toBeInstanceOf(response);
  })

});