const express = require('express')
const app = express()
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const schema = buildSchema(
  `type Query {
    welcome: String
  }`
)

const root = { welcome: () => 'Welcome to Graphql-AI' }

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: false
})
)

app.get('/', (req, res) => res.send('hello world'))

app.listen(3000, () => console.log('Listening on port 3000'))

