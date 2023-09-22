// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
  BlockScalar: any;
  Boolean: boolean;
  Float: number;
  ID: string;
  ISO8601DateTime: any;
  Int: number;
  JsonScalar: any;
  String: string;
};

export interface Alternate {
  fullSlug: Scalars['String'];
  id: Scalars['Int'];
  isFolder: Scalars['Boolean'] | null;
  name: Scalars['String'];
  parentId: Scalars['Int'] | null;
  published: Scalars['Boolean'];
  slug: Scalars['String'];
  __typename: 'Alternate';
}

export interface Asset {
  alt: Scalars['String'] | null;
  copyright: Scalars['String'] | null;
  filename: Scalars['String'];
  focus: Scalars['String'] | null;
  id: Scalars['Int'] | null;
  name: Scalars['String'] | null;
  title: Scalars['String'] | null;
  __typename: 'Asset';
}

export interface BodycompComponent {
  _editable: Scalars['String'] | null;
  _uid: Scalars['String'] | null;
  body: Scalars['BlockScalar'] | null;
  component: Scalars['String'] | null;
  __typename: 'BodycompComponent';
}

export interface BodycompItem {
  alternates: (Alternate | null)[] | null;
  content: BodycompComponent | null;
  created_at: Scalars['String'] | null;
  default_full_slug: Scalars['String'] | null;
  first_published_at: Scalars['String'] | null;
  full_slug: Scalars['String'] | null;
  group_id: Scalars['Int'] | null;
  id: Scalars['Int'] | null;
  is_startpage: Scalars['Boolean'] | null;
  lang: Scalars['String'] | null;
  meta_data: Scalars['JsonScalar'] | null;
  name: Scalars['String'] | null;
  parent_id: Scalars['Int'] | null;
  path: Scalars['String'] | null;
  position: Scalars['Int'] | null;
  published_at: Scalars['String'] | null;
  release_id: Scalars['Int'] | null;
  slug: Scalars['String'] | null;
  sort_by_date: Scalars['String'] | null;
  tag_list: (Scalars['String'] | null)[] | null;
  translated_slugs: (TranslatedSlug | null)[] | null;
  uuid: Scalars['String'] | null;
  __typename: 'BodycompItem';
}

export interface BodycompItems {
  items: (BodycompItem | null)[] | null;
  total: Scalars['Int'] | null;
  __typename: 'BodycompItems';
}

export interface ContentItem {
  alternates: (Alternate | null)[] | null;
  content: Scalars['JsonScalar'] | null;
  content_string: Scalars['String'] | null;
  created_at: Scalars['String'] | null;
  default_full_slug: Scalars['String'] | null;
  first_published_at: Scalars['String'] | null;
  full_slug: Scalars['String'] | null;
  group_id: Scalars['Int'] | null;
  id: Scalars['Int'] | null;
  is_startpage: Scalars['Boolean'] | null;
  lang: Scalars['String'] | null;
  meta_data: Scalars['JsonScalar'] | null;
  name: Scalars['String'] | null;
  parent_id: Scalars['Int'] | null;
  path: Scalars['String'] | null;
  position: Scalars['Int'] | null;
  published_at: Scalars['String'] | null;
  release_id: Scalars['Int'] | null;
  slug: Scalars['String'] | null;
  sort_by_date: Scalars['String'] | null;
  tag_list: (Scalars['String'] | null)[] | null;
  translated_slugs: (TranslatedSlug | null)[] | null;
  uuid: Scalars['String'] | null;
  __typename: 'ContentItem';
}

export interface ContentItems {
  items: (ContentItem | null)[] | null;
  total: Scalars['Int'] | null;
  __typename: 'ContentItems';
}

export interface Datasource {
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  __typename: 'Datasource';
}

export interface DatasourceEntries {
  items: DatasourceEntry[];
  total: Scalars['Int'];
  __typename: 'DatasourceEntries';
}

export interface DatasourceEntry {
  dimensionValue: Scalars['String'] | null;
  id: Scalars['Int'];
  name: Scalars['String'];
  value: Scalars['String'];
  __typename: 'DatasourceEntry';
}

export interface Datasources {
  items: Datasource[];
  __typename: 'Datasources';
}

export interface Link {
  cachedUrl: Scalars['String'];
  email: Scalars['String'] | null;
  fieldtype: Scalars['String'];
  id: Scalars['String'];
  linktype: Scalars['String'];
  story: Story | null;
  url: Scalars['String'];
  __typename: 'Link';
}

export interface LinkEntries {
  items: LinkEntry[];
  __typename: 'LinkEntries';
}

export interface LinkEntry {
  id: Scalars['Int'] | null;
  isFolder: Scalars['Boolean'] | null;
  isStartpage: Scalars['Boolean'] | null;
  name: Scalars['String'] | null;
  parentId: Scalars['Int'] | null;
  position: Scalars['Int'] | null;
  published: Scalars['Boolean'] | null;
  slug: Scalars['String'] | null;
  uuid: Scalars['String'] | null;
  __typename: 'LinkEntry';
}

export interface PageComponent {
  _editable: Scalars['String'] | null;
  _uid: Scalars['String'] | null;
  asset: Asset | null;
  assets: (Asset | null)[] | null;
  body: Scalars['BlockScalar'] | null;
  component: Scalars['String'] | null;
  filter: Scalars['String'] | null;
  link: Link | null;
  link1: Link | null;
  live: Scalars['Boolean'] | null;
  multioptions: (Scalars['String'] | null)[] | null;
  newfield_hello: Scalars['String'] | null;
  nr: Scalars['String'] | null;
  number: Scalars['String'] | null;
  plugin: Scalars['JsonScalar'] | null;
  single_product: Story | null;
  stories: (Story | null)[] | null;
  table: Scalars['String'] | null;
  table_json: Scalars['JsonScalar'] | null;
  teasered_products: (Story | null)[] | null;
  testItem: Scalars['String'] | null;
  __typename: 'PageComponent';
}

export interface PageItem {
  alternates: (Alternate | null)[] | null;
  content: PageComponent | null;
  created_at: Scalars['String'] | null;
  default_full_slug: Scalars['String'] | null;
  first_published_at: Scalars['String'] | null;
  full_slug: Scalars['String'] | null;
  group_id: Scalars['Int'] | null;
  id: Scalars['Int'] | null;
  is_startpage: Scalars['Boolean'] | null;
  lang: Scalars['String'] | null;
  meta_data: Scalars['JsonScalar'] | null;
  name: Scalars['String'] | null;
  parent_id: Scalars['Int'] | null;
  path: Scalars['String'] | null;
  position: Scalars['Int'] | null;
  published_at: Scalars['String'] | null;
  release_id: Scalars['Int'] | null;
  slug: Scalars['String'] | null;
  sort_by_date: Scalars['String'] | null;
  tag_list: (Scalars['String'] | null)[] | null;
  translated_slugs: (TranslatedSlug | null)[] | null;
  uuid: Scalars['String'] | null;
  __typename: 'PageItem';
}

export interface PageItems {
  items: (PageItem | null)[] | null;
  total: Scalars['Int'] | null;
  __typename: 'PageItems';
}

export interface ProductComponent {
  _editable: Scalars['String'] | null;
  _uid: Scalars['String'] | null;
  asset: (Asset | null)[] | null;
  component: Scalars['String'] | null;
  home: Story | null;
  image: Scalars['String'] | null;
  link: Link | null;
  name: Scalars['String'] | null;
  newfield: Scalars['String'] | null;
  tbl: Scalars['String'] | null;
  tbl_json: Scalars['JsonScalar'] | null;
  __typename: 'ProductComponent';
}

export interface ProductItem {
  alternates: (Alternate | null)[] | null;
  content: ProductComponent | null;
  created_at: Scalars['String'] | null;
  default_full_slug: Scalars['String'] | null;
  first_published_at: Scalars['String'] | null;
  full_slug: Scalars['String'] | null;
  group_id: Scalars['Int'] | null;
  id: Scalars['Int'] | null;
  is_startpage: Scalars['Boolean'] | null;
  lang: Scalars['String'] | null;
  meta_data: Scalars['JsonScalar'] | null;
  name: Scalars['String'] | null;
  parent_id: Scalars['Int'] | null;
  path: Scalars['String'] | null;
  position: Scalars['Int'] | null;
  published_at: Scalars['String'] | null;
  release_id: Scalars['Int'] | null;
  slug: Scalars['String'] | null;
  sort_by_date: Scalars['String'] | null;
  tag_list: (Scalars['String'] | null)[] | null;
  translated_slugs: (TranslatedSlug | null)[] | null;
  uuid: Scalars['String'] | null;
  __typename: 'ProductItem';
}

export interface ProductItems {
  items: (ProductItem | null)[] | null;
  total: Scalars['Int'] | null;
  __typename: 'ProductItems';
}

export interface QueryType {
  BodycompItem: BodycompItem | null;
  BodycompItems: BodycompItems | null;
  ContentNode: ContentItem | null;
  ContentNodes: ContentItems | null;
  DatasourceEntries: DatasourceEntries | null;
  Datasources: Datasources | null;
  Links: LinkEntries | null;
  PageItem: PageItem | null;
  PageItems: PageItems | null;
  ProductItem: ProductItem | null;
  ProductItems: ProductItems | null;
  RateLimit: RateLimit | null;
  Space: Space | null;
  Tags: Tags | null;
  __typename: 'QueryType';
}

export interface RateLimit {
  maxCost: Scalars['Int'];
  __typename: 'RateLimit';
}

export interface Space {
  domain: Scalars['String'];
  id: Scalars['Int'];
  languageCodes: (Scalars['String'] | null)[];
  name: Scalars['String'];
  version: Scalars['Int'];
  __typename: 'Space';
}

export interface Story {
  alternates: (Alternate | null)[] | null;
  content: Scalars['JsonScalar'] | null;
  createdAt: Scalars['String'] | null;
  firstPublishedAt: Scalars['String'] | null;
  fullSlug: Scalars['String'] | null;
  groupId: Scalars['Int'] | null;
  id: Scalars['Int'] | null;
  isStartpage: Scalars['Boolean'] | null;
  lang: Scalars['String'] | null;
  metaData: Scalars['JsonScalar'] | null;
  name: Scalars['String'] | null;
  parentId: Scalars['Int'] | null;
  path: Scalars['String'] | null;
  position: Scalars['Int'] | null;
  publishedAt: Scalars['String'] | null;
  releaseId: Scalars['Int'] | null;
  slug: Scalars['String'] | null;
  sortByDate: Scalars['String'] | null;
  tagList: (Scalars['String'] | null)[] | null;
  translatedSlugs: (TranslatedSlug | null)[] | null;
  uuid: Scalars['String'] | null;
  __typename: 'Story';
}

export interface Tag {
  name: Scalars['String'];
  taggingsCount: Scalars['Int'];
  __typename: 'Tag';
}

export interface Tags {
  items: Tag[];
  __typename: 'Tags';
}

export interface TranslatedSlug {
  lang: Scalars['String'];
  name: Scalars['String'] | null;
  path: Scalars['String'] | null;
  __typename: 'TranslatedSlug';
}

export type Query = QueryType;

export interface AlternateGenqlSelection {
  fullSlug?: boolean | number;
  id?: boolean | number;
  isFolder?: boolean | number;
  name?: boolean | number;
  parentId?: boolean | number;
  published?: boolean | number;
  slug?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface AssetGenqlSelection {
  alt?: boolean | number;
  copyright?: boolean | number;
  filename?: boolean | number;
  focus?: boolean | number;
  id?: boolean | number;
  name?: boolean | number;
  title?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface BodycompComponentGenqlSelection {
  _editable?: boolean | number;
  _uid?: boolean | number;
  body?: boolean | number;
  component?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface BodycompItemGenqlSelection {
  alternates?: AlternateGenqlSelection;
  content?: BodycompComponentGenqlSelection;
  created_at?: boolean | number;
  default_full_slug?: boolean | number;
  first_published_at?: boolean | number;
  full_slug?: boolean | number;
  group_id?: boolean | number;
  id?: boolean | number;
  is_startpage?: boolean | number;
  lang?: boolean | number;
  meta_data?: boolean | number;
  name?: boolean | number;
  parent_id?: boolean | number;
  path?: boolean | number;
  position?: boolean | number;
  published_at?: boolean | number;
  release_id?: boolean | number;
  slug?: boolean | number;
  sort_by_date?: boolean | number;
  tag_list?: boolean | number;
  translated_slugs?: TranslatedSlugGenqlSelection;
  uuid?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface BodycompItemsGenqlSelection {
  items?: BodycompItemGenqlSelection;
  total?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface ContentItemGenqlSelection {
  alternates?: AlternateGenqlSelection;
  content?: boolean | number;
  content_string?: boolean | number;
  created_at?: boolean | number;
  default_full_slug?: boolean | number;
  first_published_at?: boolean | number;
  full_slug?: boolean | number;
  group_id?: boolean | number;
  id?: boolean | number;
  is_startpage?: boolean | number;
  lang?: boolean | number;
  meta_data?: boolean | number;
  name?: boolean | number;
  parent_id?: boolean | number;
  path?: boolean | number;
  position?: boolean | number;
  published_at?: boolean | number;
  release_id?: boolean | number;
  slug?: boolean | number;
  sort_by_date?: boolean | number;
  tag_list?: boolean | number;
  translated_slugs?: TranslatedSlugGenqlSelection;
  uuid?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface ContentItemsGenqlSelection {
  items?: ContentItemGenqlSelection;
  total?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface DatasourceGenqlSelection {
  id?: boolean | number;
  name?: boolean | number;
  slug?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface DatasourceEntriesGenqlSelection {
  items?: DatasourceEntryGenqlSelection;
  total?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface DatasourceEntryGenqlSelection {
  dimensionValue?: boolean | number;
  id?: boolean | number;
  name?: boolean | number;
  value?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface DatasourcesGenqlSelection {
  items?: DatasourceGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface FilterQueryOperations {
  /** Matches exactly one value */
  in?: Scalars['String'] | null;
  /** Matches all without the given value */
  not_in?: Scalars['String'] | null;
  /** Matches exactly one value with a wildcard search using * */
  like?: Scalars['String'] | null;
  /** Matches all without the given value */
  not_like?: Scalars['String'] | null;
  /** Matches any value of given array */
  in_array?: (Scalars['String'] | null)[] | null;
  /** Must match all values of given array */
  all_in_array?: (Scalars['String'] | null)[] | null;
  /** Greater than date (Exmples: 2019-03-03 or 2020-03-03T03:03:03) */
  gt_date?: Scalars['ISO8601DateTime'] | null;
  /** Less than date (Format: 2019-03-03 or 2020-03-03T03:03:03) */
  lt_date?: Scalars['ISO8601DateTime'] | null;
  /** Greater than integer value */
  gt_int?: Scalars['Int'] | null;
  /** Less than integer value */
  lt_int?: Scalars['Int'] | null;
  /** Matches exactly one integer value */
  in_int?: Scalars['Int'] | null;
  /** Greater than float value */
  gt_float?: Scalars['Float'] | null;
  /** Less than float value */
  lt_float?: Scalars['Float'] | null;
}

export interface LinkGenqlSelection {
  cachedUrl?: boolean | number;
  email?: boolean | number;
  fieldtype?: boolean | number;
  id?: boolean | number;
  linktype?: boolean | number;
  story?: StoryGenqlSelection;
  url?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface LinkEntriesGenqlSelection {
  items?: LinkEntryGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface LinkEntryGenqlSelection {
  id?: boolean | number;
  isFolder?: boolean | number;
  isStartpage?: boolean | number;
  name?: boolean | number;
  parentId?: boolean | number;
  position?: boolean | number;
  published?: boolean | number;
  slug?: boolean | number;
  uuid?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface PageComponentGenqlSelection {
  _editable?: boolean | number;
  _uid?: boolean | number;
  asset?: AssetGenqlSelection;
  assets?: AssetGenqlSelection;
  body?: boolean | number;
  component?: boolean | number;
  filter?: boolean | number;
  link?: LinkGenqlSelection;
  link1?: LinkGenqlSelection;
  live?: boolean | number;
  multioptions?: boolean | number;
  newfield_hello?: boolean | number;
  nr?: boolean | number;
  number?: boolean | number;
  plugin?: boolean | number;
  single_product?: StoryGenqlSelection & {
    __args?: {
      fields?: (Scalars['String'] | null)[] | null;
      language?: Scalars['String'] | null;
      resolve_relations?: Scalars['String'] | null;
    };
  };
  stories?: StoryGenqlSelection & {
    __args?: {
      fields?: (Scalars['String'] | null)[] | null;
      language?: Scalars['String'] | null;
      sort_by?: Scalars['String'] | null;
    };
  };
  table?: boolean | number;
  table_json?: boolean | number;
  teasered_products?: StoryGenqlSelection & {
    __args?: {
      fields?: (Scalars['String'] | null)[] | null;
      language?: Scalars['String'] | null;
      sort_by?: Scalars['String'] | null;
    };
  };
  testItem?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface PageFilterQuery {
  filter?: FilterQueryOperations | null;
  teasered_products?: FilterQueryOperations | null;
  live?: FilterQueryOperations | null;
  number?: FilterQueryOperations | null;
  multioptions?: FilterQueryOperations | null;
  stories?: FilterQueryOperations | null;
  newfield_hello?: FilterQueryOperations | null;
  single_product?: FilterQueryOperations | null;
  nr?: FilterQueryOperations | null;
  testItem?: FilterQueryOperations | null;
}

export interface PageItemGenqlSelection {
  alternates?: AlternateGenqlSelection;
  content?: PageComponentGenqlSelection;
  created_at?: boolean | number;
  default_full_slug?: boolean | number;
  first_published_at?: boolean | number;
  full_slug?: boolean | number;
  group_id?: boolean | number;
  id?: boolean | number;
  is_startpage?: boolean | number;
  lang?: boolean | number;
  meta_data?: boolean | number;
  name?: boolean | number;
  parent_id?: boolean | number;
  path?: boolean | number;
  position?: boolean | number;
  published_at?: boolean | number;
  release_id?: boolean | number;
  slug?: boolean | number;
  sort_by_date?: boolean | number;
  tag_list?: boolean | number;
  translated_slugs?: TranslatedSlugGenqlSelection;
  uuid?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface PageItemsGenqlSelection {
  items?: PageItemGenqlSelection;
  total?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface ProductComponentGenqlSelection {
  _editable?: boolean | number;
  _uid?: boolean | number;
  asset?: AssetGenqlSelection;
  component?: boolean | number;
  home?: StoryGenqlSelection & {
    __args?: {
      fields?: (Scalars['String'] | null)[] | null;
      language?: Scalars['String'] | null;
      resolve_relations?: Scalars['String'] | null;
    };
  };
  image?: boolean | number;
  link?: LinkGenqlSelection;
  name?: boolean | number;
  newfield?: boolean | number;
  tbl?: boolean | number;
  tbl_json?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface ProductFilterQuery {
  name?: FilterQueryOperations | null;
  home?: FilterQueryOperations | null;
  newfield?: FilterQueryOperations | null;
}

export interface ProductItemGenqlSelection {
  alternates?: AlternateGenqlSelection;
  content?: ProductComponentGenqlSelection;
  created_at?: boolean | number;
  default_full_slug?: boolean | number;
  first_published_at?: boolean | number;
  full_slug?: boolean | number;
  group_id?: boolean | number;
  id?: boolean | number;
  is_startpage?: boolean | number;
  lang?: boolean | number;
  meta_data?: boolean | number;
  name?: boolean | number;
  parent_id?: boolean | number;
  path?: boolean | number;
  position?: boolean | number;
  published_at?: boolean | number;
  release_id?: boolean | number;
  slug?: boolean | number;
  sort_by_date?: boolean | number;
  tag_list?: boolean | number;
  translated_slugs?: TranslatedSlugGenqlSelection;
  uuid?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface ProductItemsGenqlSelection {
  items?: ProductItemGenqlSelection;
  total?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface QueryTypeGenqlSelection {
  BodycompItem?: BodycompItemGenqlSelection & {
    __args: {
      /** Slug, ID or UUID of item */
      id: Scalars['ID'];
      /** Can be empty or 'uuid' */
      find_by?: Scalars['String'] | null;
      /** Release id */
      from_release?: Scalars['Int'] | null;
      /** Can be 'story' or 'url' */
      resolve_links?: Scalars['String'] | null;
      resolve_relations?: Scalars['String'] | null;
      language?: Scalars['String'] | null;
    };
  };
  BodycompItems?: BodycompItemsGenqlSelection & {
    __args?: {
      first_published_at_gt?: Scalars['String'] | null;
      first_published_at_lt?: Scalars['String'] | null;
      published_at_gt?: Scalars['String'] | null;
      published_at_lt?: Scalars['String'] | null;
      starts_with?: Scalars['String'] | null;
      by_slugs?: Scalars['String'] | null;
      excluding_slugs?: Scalars['String'] | null;
      fallback_lang?: Scalars['String'] | null;
      by_uuids?: Scalars['String'] | null;
      by_uuids_ordered?: Scalars['String'] | null;
      excluding_ids?: Scalars['String'] | null;
      excluding_fields?: Scalars['String'] | null;
      resolve_links?: Scalars['String'] | null;
      resolve_relations?: Scalars['String'] | null;
      from_release?: Scalars['String'] | null;
      sort_by?: Scalars['String'] | null;
      search_term?: Scalars['String'] | null;
      is_startpage?: Scalars['String'] | null;
      language?: Scalars['String'] | null;
      with_tag?: Scalars['String'] | null;
      page?: Scalars['Int'] | null;
      per_page?: Scalars['Int'] | null;
      filter_query?: Scalars['JsonScalar'] | null;
    };
  };
  ContentNode?: ContentItemGenqlSelection & {
    __args: {
      /** Slug, ID or UUID of item */
      id: Scalars['ID'];
      /** Can be empty or 'uuid' */
      find_by?: Scalars['String'] | null;
      /** Release id */
      from_release?: Scalars['Int'] | null;
      /** Can be 'story' or 'url' */
      resolve_links?: Scalars['String'] | null;
      resolve_relations?: Scalars['String'] | null;
      language?: Scalars['String'] | null;
    };
  };
  ContentNodes?: ContentItemsGenqlSelection & {
    __args?: {
      first_published_at_gt?: Scalars['String'] | null;
      first_published_at_lt?: Scalars['String'] | null;
      published_at_gt?: Scalars['String'] | null;
      published_at_lt?: Scalars['String'] | null;
      starts_with?: Scalars['String'] | null;
      by_slugs?: Scalars['String'] | null;
      excluding_slugs?: Scalars['String'] | null;
      fallback_lang?: Scalars['String'] | null;
      by_uuids?: Scalars['String'] | null;
      by_uuids_ordered?: Scalars['String'] | null;
      excluding_ids?: Scalars['String'] | null;
      excluding_fields?: Scalars['String'] | null;
      resolve_links?: Scalars['String'] | null;
      resolve_relations?: Scalars['String'] | null;
      from_release?: Scalars['String'] | null;
      sort_by?: Scalars['String'] | null;
      search_term?: Scalars['String'] | null;
      is_startpage?: Scalars['String'] | null;
      language?: Scalars['String'] | null;
      with_tag?: Scalars['String'] | null;
      page?: Scalars['Int'] | null;
      per_page?: Scalars['Int'] | null;
      filter_query?: Scalars['JsonScalar'] | null;
    };
  };
  DatasourceEntries?: DatasourceEntriesGenqlSelection & {
    __args?: {
      datasource?: Scalars['String'] | null;
      dimension?: Scalars['String'] | null;
      page?: Scalars['Int'] | null;
      per_page?: Scalars['Int'] | null;
    };
  };
  Datasources?: DatasourcesGenqlSelection & {
    __args?: { search?: Scalars['String'] | null; by_ids?: (Scalars['String'] | null)[] | null };
  };
  Links?: LinkEntriesGenqlSelection & {
    __args?: { starts_with?: Scalars['String'] | null; paginated?: Scalars['Boolean'] | null };
  };
  PageItem?: PageItemGenqlSelection & {
    __args: {
      /** Slug, ID or UUID of item */
      id: Scalars['ID'];
      /** Can be empty or 'uuid' */
      find_by?: Scalars['String'] | null;
      /** Release id */
      from_release?: Scalars['Int'] | null;
      /** Can be 'story' or 'url' */
      resolve_links?: Scalars['String'] | null;
      resolve_relations?: Scalars['String'] | null;
      language?: Scalars['String'] | null;
    };
  };
  PageItems?: PageItemsGenqlSelection & {
    __args?: {
      first_published_at_gt?: Scalars['String'] | null;
      first_published_at_lt?: Scalars['String'] | null;
      published_at_gt?: Scalars['String'] | null;
      published_at_lt?: Scalars['String'] | null;
      starts_with?: Scalars['String'] | null;
      by_slugs?: Scalars['String'] | null;
      excluding_slugs?: Scalars['String'] | null;
      fallback_lang?: Scalars['String'] | null;
      by_uuids?: Scalars['String'] | null;
      by_uuids_ordered?: Scalars['String'] | null;
      excluding_ids?: Scalars['String'] | null;
      excluding_fields?: Scalars['String'] | null;
      resolve_links?: Scalars['String'] | null;
      resolve_relations?: Scalars['String'] | null;
      from_release?: Scalars['String'] | null;
      sort_by?: Scalars['String'] | null;
      search_term?: Scalars['String'] | null;
      is_startpage?: Scalars['String'] | null;
      language?: Scalars['String'] | null;
      with_tag?: Scalars['String'] | null;
      page?: Scalars['Int'] | null;
      per_page?: Scalars['Int'] | null;
      filter_query?: Scalars['JsonScalar'] | null;
      filter_query_v2?: PageFilterQuery | null;
    };
  };
  ProductItem?: ProductItemGenqlSelection & {
    __args: {
      /** Slug, ID or UUID of item */
      id: Scalars['ID'];
      /** Can be empty or 'uuid' */
      find_by?: Scalars['String'] | null;
      /** Release id */
      from_release?: Scalars['Int'] | null;
      /** Can be 'story' or 'url' */
      resolve_links?: Scalars['String'] | null;
      resolve_relations?: Scalars['String'] | null;
      language?: Scalars['String'] | null;
    };
  };
  ProductItems?: ProductItemsGenqlSelection & {
    __args?: {
      first_published_at_gt?: Scalars['String'] | null;
      first_published_at_lt?: Scalars['String'] | null;
      published_at_gt?: Scalars['String'] | null;
      published_at_lt?: Scalars['String'] | null;
      starts_with?: Scalars['String'] | null;
      by_slugs?: Scalars['String'] | null;
      excluding_slugs?: Scalars['String'] | null;
      fallback_lang?: Scalars['String'] | null;
      by_uuids?: Scalars['String'] | null;
      by_uuids_ordered?: Scalars['String'] | null;
      excluding_ids?: Scalars['String'] | null;
      excluding_fields?: Scalars['String'] | null;
      resolve_links?: Scalars['String'] | null;
      resolve_relations?: Scalars['String'] | null;
      from_release?: Scalars['String'] | null;
      sort_by?: Scalars['String'] | null;
      search_term?: Scalars['String'] | null;
      is_startpage?: Scalars['String'] | null;
      language?: Scalars['String'] | null;
      with_tag?: Scalars['String'] | null;
      page?: Scalars['Int'] | null;
      per_page?: Scalars['Int'] | null;
      filter_query?: Scalars['JsonScalar'] | null;
      filter_query_v2?: ProductFilterQuery | null;
    };
  };
  RateLimit?: RateLimitGenqlSelection;
  Space?: SpaceGenqlSelection;
  Tags?: TagsGenqlSelection & { __args?: { starts_with?: Scalars['String'] | null } };
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface RateLimitGenqlSelection {
  maxCost?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface SpaceGenqlSelection {
  domain?: boolean | number;
  id?: boolean | number;
  languageCodes?: boolean | number;
  name?: boolean | number;
  version?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface StoryGenqlSelection {
  alternates?: AlternateGenqlSelection;
  content?: boolean | number;
  createdAt?: boolean | number;
  firstPublishedAt?: boolean | number;
  fullSlug?: boolean | number;
  groupId?: boolean | number;
  id?: boolean | number;
  isStartpage?: boolean | number;
  lang?: boolean | number;
  metaData?: boolean | number;
  name?: boolean | number;
  parentId?: boolean | number;
  path?: boolean | number;
  position?: boolean | number;
  publishedAt?: boolean | number;
  releaseId?: boolean | number;
  slug?: boolean | number;
  sortByDate?: boolean | number;
  tagList?: boolean | number;
  translatedSlugs?: TranslatedSlugGenqlSelection;
  uuid?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface TagGenqlSelection {
  name?: boolean | number;
  taggingsCount?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface TagsGenqlSelection {
  items?: TagGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface TranslatedSlugGenqlSelection {
  lang?: boolean | number;
  name?: boolean | number;
  path?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export type QueryGenqlSelection = QueryTypeGenqlSelection;

const Alternate_possibleTypes: string[] = ['Alternate'];
export const isAlternate = (obj?: { __typename?: any } | null): obj is Alternate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAlternate"');
  return Alternate_possibleTypes.includes(obj.__typename);
};

const Asset_possibleTypes: string[] = ['Asset'];
export const isAsset = (obj?: { __typename?: any } | null): obj is Asset => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAsset"');
  return Asset_possibleTypes.includes(obj.__typename);
};

const BodycompComponent_possibleTypes: string[] = ['BodycompComponent'];
export const isBodycompComponent = (
  obj?: { __typename?: any } | null,
): obj is BodycompComponent => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBodycompComponent"');
  return BodycompComponent_possibleTypes.includes(obj.__typename);
};

const BodycompItem_possibleTypes: string[] = ['BodycompItem'];
export const isBodycompItem = (obj?: { __typename?: any } | null): obj is BodycompItem => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBodycompItem"');
  return BodycompItem_possibleTypes.includes(obj.__typename);
};

const BodycompItems_possibleTypes: string[] = ['BodycompItems'];
export const isBodycompItems = (obj?: { __typename?: any } | null): obj is BodycompItems => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBodycompItems"');
  return BodycompItems_possibleTypes.includes(obj.__typename);
};

const ContentItem_possibleTypes: string[] = ['ContentItem'];
export const isContentItem = (obj?: { __typename?: any } | null): obj is ContentItem => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isContentItem"');
  return ContentItem_possibleTypes.includes(obj.__typename);
};

const ContentItems_possibleTypes: string[] = ['ContentItems'];
export const isContentItems = (obj?: { __typename?: any } | null): obj is ContentItems => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isContentItems"');
  return ContentItems_possibleTypes.includes(obj.__typename);
};

const Datasource_possibleTypes: string[] = ['Datasource'];
export const isDatasource = (obj?: { __typename?: any } | null): obj is Datasource => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isDatasource"');
  return Datasource_possibleTypes.includes(obj.__typename);
};

const DatasourceEntries_possibleTypes: string[] = ['DatasourceEntries'];
export const isDatasourceEntries = (
  obj?: { __typename?: any } | null,
): obj is DatasourceEntries => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isDatasourceEntries"');
  return DatasourceEntries_possibleTypes.includes(obj.__typename);
};

const DatasourceEntry_possibleTypes: string[] = ['DatasourceEntry'];
export const isDatasourceEntry = (obj?: { __typename?: any } | null): obj is DatasourceEntry => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isDatasourceEntry"');
  return DatasourceEntry_possibleTypes.includes(obj.__typename);
};

const Datasources_possibleTypes: string[] = ['Datasources'];
export const isDatasources = (obj?: { __typename?: any } | null): obj is Datasources => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isDatasources"');
  return Datasources_possibleTypes.includes(obj.__typename);
};

const Link_possibleTypes: string[] = ['Link'];
export const isLink = (obj?: { __typename?: any } | null): obj is Link => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLink"');
  return Link_possibleTypes.includes(obj.__typename);
};

const LinkEntries_possibleTypes: string[] = ['LinkEntries'];
export const isLinkEntries = (obj?: { __typename?: any } | null): obj is LinkEntries => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLinkEntries"');
  return LinkEntries_possibleTypes.includes(obj.__typename);
};

const LinkEntry_possibleTypes: string[] = ['LinkEntry'];
export const isLinkEntry = (obj?: { __typename?: any } | null): obj is LinkEntry => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLinkEntry"');
  return LinkEntry_possibleTypes.includes(obj.__typename);
};

const PageComponent_possibleTypes: string[] = ['PageComponent'];
export const isPageComponent = (obj?: { __typename?: any } | null): obj is PageComponent => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPageComponent"');
  return PageComponent_possibleTypes.includes(obj.__typename);
};

const PageItem_possibleTypes: string[] = ['PageItem'];
export const isPageItem = (obj?: { __typename?: any } | null): obj is PageItem => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPageItem"');
  return PageItem_possibleTypes.includes(obj.__typename);
};

const PageItems_possibleTypes: string[] = ['PageItems'];
export const isPageItems = (obj?: { __typename?: any } | null): obj is PageItems => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPageItems"');
  return PageItems_possibleTypes.includes(obj.__typename);
};

const ProductComponent_possibleTypes: string[] = ['ProductComponent'];
export const isProductComponent = (obj?: { __typename?: any } | null): obj is ProductComponent => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isProductComponent"');
  return ProductComponent_possibleTypes.includes(obj.__typename);
};

const ProductItem_possibleTypes: string[] = ['ProductItem'];
export const isProductItem = (obj?: { __typename?: any } | null): obj is ProductItem => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isProductItem"');
  return ProductItem_possibleTypes.includes(obj.__typename);
};

const ProductItems_possibleTypes: string[] = ['ProductItems'];
export const isProductItems = (obj?: { __typename?: any } | null): obj is ProductItems => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isProductItems"');
  return ProductItems_possibleTypes.includes(obj.__typename);
};

const QueryType_possibleTypes: string[] = ['QueryType'];
export const isQueryType = (obj?: { __typename?: any } | null): obj is QueryType => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQueryType"');
  return QueryType_possibleTypes.includes(obj.__typename);
};

const RateLimit_possibleTypes: string[] = ['RateLimit'];
export const isRateLimit = (obj?: { __typename?: any } | null): obj is RateLimit => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRateLimit"');
  return RateLimit_possibleTypes.includes(obj.__typename);
};

const Space_possibleTypes: string[] = ['Space'];
export const isSpace = (obj?: { __typename?: any } | null): obj is Space => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSpace"');
  return Space_possibleTypes.includes(obj.__typename);
};

const Story_possibleTypes: string[] = ['Story'];
export const isStory = (obj?: { __typename?: any } | null): obj is Story => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStory"');
  return Story_possibleTypes.includes(obj.__typename);
};

const Tag_possibleTypes: string[] = ['Tag'];
export const isTag = (obj?: { __typename?: any } | null): obj is Tag => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTag"');
  return Tag_possibleTypes.includes(obj.__typename);
};

const Tags_possibleTypes: string[] = ['Tags'];
export const isTags = (obj?: { __typename?: any } | null): obj is Tags => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTags"');
  return Tags_possibleTypes.includes(obj.__typename);
};

const TranslatedSlug_possibleTypes: string[] = ['TranslatedSlug'];
export const isTranslatedSlug = (obj?: { __typename?: any } | null): obj is TranslatedSlug => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTranslatedSlug"');
  return TranslatedSlug_possibleTypes.includes(obj.__typename);
};
