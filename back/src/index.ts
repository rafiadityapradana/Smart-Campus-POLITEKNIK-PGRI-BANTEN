import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import path from "path";
import session from "express-session";
import Redis from "ioredis";
import connectRedis from "connect-redis";
import bodyParser from "body-parser";

import cors from "cors";

import {
  DistrictResolver,
  PublicResolver,
  ProvinceResolver,
} from "./resolvers/DataResolvers";
import { TransactionssData } from "./resolvers/FinanceResolver";
import { UsersResolver } from "./resolvers/UsersResolver";
import { ManajementResolver } from "./resolvers/ManajementResolver";

const main = async () => {
  const Orm = await MikroORM.init(mikroOrmConfig);
  await Orm.getMigrator().up();
  const app = express();
  const RedisStore = connectRedis(session);
  const redis = new Redis();

  try {
    app.use(
      cors({
        origin: "http://localhost:3000",
        credentials: true,
      })
    );
    app.use(
      session({
        name: "psid",
        store: new RedisStore({
          client: redis,
          disableTouch: true,
        }),
        cookie: {
          maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
          httpOnly: true,
          sameSite: "lax",
          secure: false, //True of production false of dev
        },
        saveUninitialized: true,
        secret: process.env.SessionSecretkey,
        resave: true,
      })
    );
  } catch (err) {
    console.log(err);
  }

  const Apollo = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        ProvinceResolver,
        DistrictResolver,
        PublicResolver,
        TransactionssData,
        UsersResolver,
        ManajementResolver,
      ],
      validate: false,
    }),
    context: ({ req, res }) => ({ em: Orm.em, req, res, redis }),
  });

  Apollo.applyMiddleware({ app, cors: false });

  app.use(bodyParser.json());
  app.use(function (_, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.use("/public", express.static(path.join(__dirname, "../public")));

  app.listen(4000, () => {
    console.log("Server On http://localhost:4000");
  });
};
main().catch((err) => {
  console.error(err);
});
