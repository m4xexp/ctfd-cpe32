import { graphqlConfig } from 'src/configs/graphql/graphql.config'
import { BYPASS_SECRET_KEY, SECRET_KEY } from 'src/configs/jwt/jwt.config'

export default () => ({
  graphql: graphqlConfig,
  jwt: {
    secretKey: SECRET_KEY,
    bypassKey: BYPASS_SECRET_KEY,
  },
})
