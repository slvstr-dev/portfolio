// @ts-nocheck
import {
  createClient as createClientOriginal,
  generateGraphqlOperation,
  GenqlError,
  linkTypeMap,
  type ClientOptions,
  type FieldsSelection,
  type GraphqlOperation,
} from './runtime';
import type { QueryType, QueryTypeGenqlSelection } from './schema';
import types from './types';

export type { FieldsSelection } from './runtime';
export { GenqlError };

export * from './schema';
const typeMap = linkTypeMap(types as any);

export interface Client {
  query<R extends QueryTypeGenqlSelection>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<QueryType, R>>;
}

export const createClient = function (options?: ClientOptions): Client {
  return createClientOriginal({
    url: 'https://gapi.storyblok.com/v1/api',

    ...options,
    queryRoot: typeMap.Query!,
    mutationRoot: typeMap.Mutation!,
    subscriptionRoot: typeMap.Subscription!,
  }) as any;
};

export const everything = {
  __scalar: true,
};

export type QueryResult<fields extends QueryTypeGenqlSelection> = FieldsSelection<
  QueryType,
  fields
>;
export const generateQueryOp: (
  fields: QueryTypeGenqlSelection & { __name?: string },
) => GraphqlOperation = function (fields) {
  return generateGraphqlOperation('query', typeMap.Query!, fields as any);
};
