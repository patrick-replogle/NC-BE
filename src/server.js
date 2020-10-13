const express = require("express");
const { ApolloServer, AuthenticationError } = require("apollo-server-express");
const depthLimit = require("graphql-depth-limit");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const authRouter = require("./routes/authrouter");

const typeDefs = require("./graphql/schemas");
const resolvers = require("./graphql/resolvers");
const mocks = require("./mocks");
const authenticationRequired = require("./middleware/restricted-middleware.js");

const app = express();
app.use(cors());
app.use(express.json({ limit: "15mb" }));

app.use("/auth", authRouter);

const path = "/graphql";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: false,
  context: ({ req }) => {
    const token = req.headers.authorization;
    try {
      return ({ id, email } = jwt.verify(token, process.env.JWT_SECRET));
    } catch (e) {
      throw new AuthenticationError(
        "Authentication token is invalid, please log in"
      );
    }
  },
  validationRules: [depthLimit(3)],

  playground: {
    path: path,
    settings: {
      "editor.theme": "dark",
    },
  },
});

server.applyMiddleware({ app, path });

module.exports = app;
