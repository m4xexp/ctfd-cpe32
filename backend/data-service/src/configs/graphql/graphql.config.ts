export const graphqlConfig = {
  installSubscriptionHandlers: true,
  autoSchemaFile: 'src/configs/graphql/schema.gql',
  formatError: (error) => {
    const graphQLFormattedError = {
      message: error.extensions?.exception?.response?.message || error.message,
      code: Number(error.extensions?.response?.statusCode)
        ? Number(error.extensions?.response?.statusCode)
        : error.name === 'ValidationError'
        ? 400
        : 500,
      name: error.extensions?.response?.error || error.name,
    }
    return graphQLFormattedError
  },
  cors: {
    origin: '*',
    methods: 'GET, POST',
    credentials: true,
  },
}
