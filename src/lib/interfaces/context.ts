import { MutationOptions } from './mutation-options';

export interface Context {
    services?: any;
    exceptions?: any;
    database?: any;
    getSchema?: any;
    env?: any;
    logger?: any;
    emitter?: any;
    schema?: any;
    accountability?: any;
    collection?: any;
    options?: MutationOptions
}