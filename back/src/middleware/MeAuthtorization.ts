import { MiddlewareFn } from "type-graphql";
import { verify } from "jsonwebtoken";
import { MyContext } from "../types";

export const ApiMiddelware: MiddlewareFn<MyContext> = ({ context }, next) => {
  if (!context.req.headers["api_key"]) {
    throw new Error("Api Key Not Found !");
  } else {
    if (context.req.headers["api_key"] !== process.env.API_KEY) {
      throw new Error("Api Key Unknown !");
    }
  }
  return next();
};
export const ThisAuthtorizationUsers: MiddlewareFn<MyContext> = (
  { context },
  next
) => {
  try {
    const sid_authtorization = context.req.headers["sid_authtorization"];
    const rid_authtorization = context.req.headers["rid_authtorization"];
    const sid_Session = context.req.session.sid;
    const rid_Session = context.req.session.rid;
    if (!sid_Session) {
      throw new Error("Not Session !");
    }
    if (!rid_Session) {
      throw new Error("Not Session !");
    }
    if (!sid_authtorization) {
      throw new Error("Not Authtorization Access Token !");
    }
    if (!rid_authtorization) {
      throw new Error("Not Authtorization Refresh Token !");
    }
    if (sid_authtorization.toString().split(" ")[0] === "_Acs-Ast-PPB") {
      if (rid_authtorization.toString().split(" ")[0] === "_Reft-Rst-PPB") {
        const AccessToken = verify(
          sid_authtorization.toString().split(" ")[1],
          process.env.SessionSecretkey
        );
        if (AccessToken) {
          const ReftToken = verify(
            rid_authtorization.toString().split(" ")[1],
            process.env.SessionSecretkeyReft
          );
          if (ReftToken) {
            const ridVerify = verify(
              rid_Session,
              process.env.SessionSecretkeyReft
            );
            if (ridVerify) {
              const sidVerify = verify(
                sid_Session,
                process.env.SessionSecretkey
              );
              if (!sidVerify) {
                throw new Error(" Access Token Unknown !");
              }
              context.spid = sidVerify as any;
            } else {
              throw new Error("Refresh Token Unknown !");
            }
          } else {
            throw new Error("Authtorization Refresh Token Unknown !");
          }
        } else {
          throw new Error("Authtorization Access Token Unknown !");
        }
      } else {
        throw new Error("Your Key Authtorization Refresh Token Unknown !");
      }
    } else {
      throw new Error("Your Key Authtorization Access Token Unknown !");
    }
  } catch (error) {
    throw new Error(error.message);
  }
  return next();
};
