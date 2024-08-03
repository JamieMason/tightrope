import apiData from './api.json';

export interface JsDocParam {
  name: string;
  description: string;
}

export interface ApiDocument {
  filePath: string;
  moduleName: string;
  moduleNameShort: string;
  name: string;
  namespacedName: string;
  slug: string;
  title: string;
  '@description': string;
  '@param': JsDocParam[];
  '@returns': string;
  '@see': string[];
  '@tags': string[];
}

export interface ApiDocuments {
  all: ApiDocument[];
  byTag: Record<string, ApiDocument[]>;
  byModule: Record<string, ApiDocument[]>;
}

export function getApiDocuments(): ApiDocuments {
  return apiData as ApiDocuments;
}
