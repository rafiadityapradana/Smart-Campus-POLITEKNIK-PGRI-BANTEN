import { MiddlewareFn } from "type-graphql";
import { MyContext } from "./types";
import { verify } from "jsonwebtoken";

export const ThisAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  const sid_authtorization = context.req.headers["sid_authtorization"];
  const rid_authtorization = context.req.headers["rid_authtorization"];
  const sid_Session = context.req.session.sid;
  const rid_Session = context.req.session.rid;
  if (!sid_Session) {
    throw new Error("Not Session");
  }
  if (!rid_Session) {
    throw new Error("Not Session");
  }
  if (!sid_authtorization) {
    throw new Error("Not Authtorization Access Token");
  }
  if (!rid_authtorization) {
    throw new Error("Not Authtorization Refresh Token");
  }
  try {
    const AccessToken = sid_authtorization.toString().split(" ")[1];
    const payload = verify(AccessToken, process.env.SessionSecretkey);
    const jidVerify = verify(sid_Session, process.env.SessionSecretkey);
    const ridVerify = verify(sid_Session, process.env.SessionSecretkeyReft);
    context.spid = jidVerify as any;
  } catch (error) {
    throw new Error(error.message);
  }
  return next();
};

export const ThisAuthReft: MiddlewareFn<MyContext> = ({ context }, next) => {
  //sessionID

  const rid_authtorization = context.req.headers["rid_authtorization"];
  const ReqRID = context.req.session.rid;
  if (!ReqRID) {
    throw new Error("Not Refresh Session");
  }
  if (!rid_authtorization) {
    throw new Error("Not Refresh Authtorization");
  }
  console.log(ReqRID);
  const ResRDI = verify(ReqRID, process.env.SessionSecretkeyReft);

  const Token = rid_authtorization.toString().split(" ")[1];
  const payload = verify(Token, process.env.SessionSecretkeyReft);
  try {
    if (ResRDI) {
      if (payload) {
        context.rpid = ResRDI as any;
      } else {
        throw new Error("Not authtorization");
      }
    } else {
      throw new Error("Not Session");
    }
  } catch (error) {
    throw new Error(error.message);
  }
  return next();
};
