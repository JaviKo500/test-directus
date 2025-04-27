import { Context } from '../../../../src/lib/interfaces';
import { verifyUniqueCode } from '../../../../src/lib/use-cases/check-test/verify-unique-code';
import { Config } from '../../../../src/lib/use-cases/config';

describe('Verify-unique-code.test', () => {
  let context: Context = {};
  test( 'test', async () => {
    const config = Config.getInstance();
    context = await config.getContext();
  });
});