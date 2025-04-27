import { DirectusErrors } from '../../../../src/lib/config/adapters/directus-errors';
import { COLLECTION_TEST } from '../../../../src/lib/config/collections';
import { Context } from '../../../../src/lib/interfaces';
import { verifyUniqueCode } from '../../../../src/lib/use-cases/check-test/verify-unique-code';
import { Config } from '../../../../src/lib/use-cases/config';
import { test } from 'vitest';

vi.mock('../../../../src/lib/config/adapters/directus-errors');


describe('Verify-unique-code.test', () => {
  let context: Context = {};
  beforeAll( async () => {
    const config = Config.getInstance();
    context = await config.getContext();
  });
  test( 'should throw error if code is empty', async () => {
    const test = {
      code: ''
    };

    await expect( verifyUniqueCode( test, context ) ).rejects.toThrow();
    expect( DirectusErrors.invalidPayload ).toHaveBeenCalledWith(
      'test code is required',
      COLLECTION_TEST,
      'code '
    );
  });

  test( 'should throw error if code exists', async () => {
    const test = {
      code: 'test12',
      name: 'test12'
    };

    await expect( verifyUniqueCode( test, context ) ).rejects.toThrow();
    expect( DirectusErrors.invalidPayload ).toHaveBeenCalledWith(
      'test code exists',
      COLLECTION_TEST,
      'code '
    );
  });

  test( 'should not throw error if code is unique', async () => {
    const test = {
      code: 'unique-code',
      name: 'unique code'
    };
    await expect( verifyUniqueCode( test, context ) ).resolves.not.toThrow();
  });
});