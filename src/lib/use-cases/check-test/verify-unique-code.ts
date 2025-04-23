import { readByQuery } from './../../services/items';
import { Context } from './../../interfaces/context';
import { DirectusErrors } from './../../config/adapters/directus-errors';
import { Test } from '../../interfaces';
import { COLLECTION_TEST } from '../../config/collections';

export const verifyUniqueCode = async ( test: Test, context: Context ) => {
  const { code } = test;
  if ( !code?.trim() ) {
    throw DirectusErrors.invalidPayload(
      'test code is required',
      COLLECTION_TEST,
      'code '
    );
  }

  const testWithCode: Test[] = await readByQuery(
    {
      fields: [
        'id',
        'code'
      ],
      filter: {
        code: {
          _eq: code
        },
      },
    },
    {
      collection: COLLECTION_TEST,
      ...context
    }
  );
  if ( testWithCode.length ) {
    throw DirectusErrors.invalidPayload(
      'test code exists',
      COLLECTION_TEST,
      'code '
    );
  }
}