import { DirectusErrors } from './../../config/adapters/directus-errors';
import { Test } from '../../interfaces/test';
import { COLLECTION_TEST } from '../../config/collections';

export const verifyUniqueCode = async ( test: Test, context: any ) => {
  const { code } = test;
  if ( !code?.trim() ) {
    throw DirectusErrors.invalidPayload(
      'test code is required',
      COLLECTION_TEST,
      'code '
    );
  }
}