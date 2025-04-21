import { defineHook } from '@directus/extensions-sdk';

import { verifyUniqueCode } from './../../../lib/use-cases/check-test/verify-unique-code';
import { COLLECTION_TEST } from './../../../lib/config/collections';

export default defineHook(({ filter }, { services, env, emitter, logger }) => {
	filter(`${COLLECTION_TEST}.items.create`, async ( payload: any, _, context ) => {
		try {
			const mainContext = { services, env, emitter, logger, ...context };
			await verifyUniqueCode(payload, mainContext);
		} catch (error) {
			throw error;
		}
	});
});
