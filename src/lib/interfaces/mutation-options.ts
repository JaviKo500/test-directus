/**
 * I know this looks a little silly, but it allows us to explicitly differentiate between when we're
 * expecting an item vs any other generic object.
 */
import type { EventContext } from '@directus/types';
export type Item = Record<string, any>;
export type PrimaryKey = string | number;
export type Alterations = {
    create: {
        [key: string]: any;
    }[];
    update: {
        [key: string]: any;
    }[];
    delete: (number | string)[];
};
export type MutationOptions = {
    onRevisionCreate?: ((pk: PrimaryKey) => void) | undefined;
    autoPurgeCache?: false | undefined;
    autoPurgeSystemCache?: false | undefined;
    emitEvents?: boolean | undefined;
    bypassEmitAction?: ((params: ActionEventParams) => void) | undefined;
    bypassLimits?: boolean | undefined;
    mutationTracker?: any | undefined;
    preMutationException?: any;
};
export type ActionEventParams = {
    event: string | string[];
    meta: Record<string, any>;
    context: EventContext;
};