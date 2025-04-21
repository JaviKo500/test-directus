import { defineHook } from '@directus/extensions-sdk';

import { verifyUniqueCode } from './../../../lib/use-cases/check-test/verify-unique-code';
import { TEST } from './../../../lib/config/collections';

export default defineHook(({ filter }, { services, env, emitter, logger }) => {
	filter(`${TEST}.items.create`, async ( payload: any, _, context ) => {
		try {
			const mainContext = { services, env, emitter, logger, ...context };
			console.log(payload);
			await verifyUniqueCode(payload, mainContext);
		} catch (error) {
			throw error;
		}
	});
});
