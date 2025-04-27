import { Item, PrimaryKey, Query } from '@directus/types';
import { ItemsService } from '@directus/api/services/items';
import { Context } from '../interfaces';


export const createOne = async (data: Partial<Item>, context: Context): Promise<PrimaryKey> => {
  const { services, database, accountability, schema, collection, options = {} } = context;
  try {
    const { ItemsService } = services;
    const itemsService: ItemsService = new ItemsService(collection, {
      knex: database,
      accountability,
      schema: schema
    });
    return await itemsService.createOne(data, options);
  } catch (error: any) {
    throw error;
  }
}

export const createMany = async (data: Partial<Item>[], context: Context): Promise<PrimaryKey[]> => {
  const { services, database, accountability, schema, collection, options = {} } = context;
  try {
    const { ItemsService } = services;
    const itemsService: ItemsService = new ItemsService(collection, {
      knex: database,
      accountability,
      schema: schema
    });
    return await itemsService.createMany(data, options);
  } catch (error: any) {
    throw error;
  }
}

export const readOne = async (key: PrimaryKey, context: Context, query?: Query | undefined): Promise<Item> => {
  const { services, database, accountability, schema, collection, options = {} } = context;
  try {
    const { ItemsService } = services;
    const itemsService: ItemsService = new ItemsService(collection, {
      knex: database,
      accountability,
      schema: schema
    });
    return await itemsService.readOne(key, query, options);
  } catch (error: any) {
    throw error;
  }
}
export const readMany = async (keys: PrimaryKey[], context: Context, query?: Query | undefined): Promise<Item[]> => {
  const { services, database, accountability, schema, collection, options = {} } = context;
  try {
    const { ItemsService } = services;
    const itemsService: ItemsService = new ItemsService(collection, {
      knex: database,
      accountability,
      schema: schema
    });
    return await itemsService.readMany(keys, query, options);
  } catch (error: any) {
    throw error;
  }
}
export const readByQuery = async (query: Query, context: Context): Promise<Item[]> => {
  const { services, database, accountability, schema, collection, options = {} } = context;
  try {
    const { ItemsService } = services;
    const itemsService: ItemsService = new ItemsService(collection, {
      knex: database,
      accountability,
      schema: schema
    });
    return await itemsService.readByQuery(query, options);
  } catch (error: any) {
    throw error;
  }
}
export const readSingleton = async (query: Query, context: Context): Promise<Item> => {
  const { services, database, accountability, schema, collection, options = {} } = context;
  try {
    const { ItemsService } = services;
    const itemsService: ItemsService = new ItemsService(collection, {
      knex: database,
      accountability,
      schema: schema
    });
    return await itemsService.readSingleton(query, options);
  } catch (error: any) {
    throw error;
  }
}
export const updateOne = async (key: PrimaryKey, data: Partial<Item>, context: Context): Promise<PrimaryKey> => {
  const { services, database, accountability, schema, collection, options = {} } = context;
  try {
    const { ItemsService } = services;
    const itemsService: ItemsService = new ItemsService(collection, {
      knex: database,
      accountability,
      schema: schema
    });
    return await itemsService.updateOne(key, data, options);
  } catch (error: any) {
    throw error;
  }
}
export const updateMany = async (keys: PrimaryKey[], data: Partial<Item>, context: Context): Promise<PrimaryKey[]> => {
  const { services, database, accountability, schema, collection, options = {} } = context;
  try {
    const { ItemsService } = services;
    const itemsService: ItemsService = new ItemsService(collection, {
      knex: database,
      accountability,
      schema: schema
    });
    return await itemsService.updateMany(keys, data, options);
  } catch (error: any) {
    throw error;
  }
}
export const deleteOne = async (key: PrimaryKey, context: Context): Promise<PrimaryKey> => {
  const { services, database, accountability, schema, collection, options = {} } = context;
  try {
    const { ItemsService } = services;
    const itemsService: ItemsService = new ItemsService(collection, {
      knex: database,
      accountability,
      schema: schema
    });
    return await itemsService.deleteOne(key, options);
  } catch (error: any) {
    throw error;
  }
}
export const deleteMany = async (keys: PrimaryKey[], context: Context): Promise<PrimaryKey[]> => {
  const { services, database, accountability, schema, collection, options = {} } = context;
  try {
    const { ItemsService } = services;
    const itemsService: ItemsService = new ItemsService(collection, {
      knex: database,
      accountability,
      schema: schema
    });
    return await itemsService.deleteMany(keys, options);
  } catch (error: any) {
    throw error;
  }
}

export const getSettingsProject = async (context: Context, query: Query,) => {
  try {
    const { services, database, schema, accountability, options } = context;
    const { SettingsService } = services;
    const settingsService = new SettingsService({ schema, knex: database, accountability });
    return await settingsService.readSingleton(query, options);
  } catch (error: any) {
    throw error;
  }
}