import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://127.0.0.1:8000/graphql',
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
