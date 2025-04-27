import { createError } from "@directus/errors";
import { DirectusErrors, ErrorCode } from "../../../src/lib/config/adapters/directus-errors";
import { COLLECTION_TEST } from "../../../src/lib/config/collections";

vi.mock('@directus/errors', () => {
  return {
    createError: vi.fn((errorCode, message, status) => {
      return function ErrorConstructor(extensions) {
        this.code = errorCode;
        this.message = message;
        this.status = status;
        this.extensions = extensions;
      };
    })
  };
});

describe('Directus-errors.test', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test( 'should create directus error with correct params', () => {
    const dataError = {
      errorCode: ErrorCode.Internal, 
      message: 'test message',
      status: 500,
      extensions: {
        collection: COLLECTION_TEST,
        field: 'any'
      }
    };
    const error = DirectusErrors.createDirectsError(
      dataError.errorCode,
      dataError.message,
      dataError.status,
      dataError.extensions
    );
    expect( createError ).toHaveBeenCalledWith(
      dataError.errorCode,
      dataError.message,
      dataError.status
    );

    expect( error.code ).toBe( dataError.errorCode );
    expect( error.message ).toBe( dataError.message );
    expect( error.status ).toBe( dataError.status );
    expect( error.extensions ).toEqual( dataError.extensions );
  });

  test( 'should create invalid payload error', () => {
    const dataError = {
      message: 'test message',
      collection: COLLECTION_TEST,
      field: 'code'
    };

    const errorPayload = DirectusErrors.invalidPayload(
      dataError.message,
      dataError.collection,
      dataError.field
    );

    expect( errorPayload.code ).toBe( ErrorCode.InvalidPayload );
    expect( errorPayload.message ).toBe( dataError.message );
    expect( errorPayload.status ).toBe( 400 );
    expect( errorPayload.extensions ).toEqual( { collection: dataError.collection, field: dataError.field } );
    
  });
});