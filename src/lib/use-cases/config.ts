  import * as services from '@directus/api/dist/services';
  import { getSchema } from '@directus/api/dist/utils/get-schema';
  import { getDatabase } from '@directus/api/dist/database/index';
  import { useLogger } from '@directus/api/dist/logger/index';
  import { useEmitter  } from '@directus/api/dist/emitter';
  import { useEnv } from '@directus/env';

  import { Context } from '../interfaces';

  export class Config {
    private context: Context = null;
    private static instance: Config;
    private initializing: Promise<void> | null = null;

    private constructor() {

    }

    public static getInstance() {
      if (!Config.instance) {
        Config.instance = new Config();
      }
      return Config.instance;
    }

    public async getContext() {
      if (!this.context) {
        if (!this.initializing) {
          this.initializing = (async () => {
            const database = getDatabase();
            const schema = await getSchema();
            this.context = {
              database,
              services,
              schema,
              env: useEnv(),
              emitter: useEmitter(),
              logger: useLogger(),
              accountability: {
                admin: true,
                user: '',
                role: ''
              }
            };
          })();
        }
        await this.initializing;
      }
      return this.context;
    }
  }