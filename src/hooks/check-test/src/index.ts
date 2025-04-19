import { defineHook } from '@directus/extensions-sdk';

import { TEST } from './../../../lib/config/collections';

export default defineHook(({ filter }) => {
	filter(`${TEST}.items.create`, () => {
		console.log('Creating Item!');
	});
});
