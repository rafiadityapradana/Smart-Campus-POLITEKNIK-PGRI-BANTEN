import { MiddlewareFn } from "type-graphql";
import { MyContext } from "./types";
import { verify } from "jsonwebtoken";

export const ThisAuthReqCode: MiddlewareFn<MyContext> = ({ context }, next) => {
  const authtorization = context.req.headers["psid_authtorization"];

  if (!authtorization) {
    throw new Error("Not Authtorization");
  }
  if (!context.req.session.pay) {
    throw new Error("You have no Transactions to process !");
  }
  if (context.req.session.pay === "false") {
    throw new Error("Your transaction process has ended");
  }
  if (!context.req.session.prospective) {
    throw new Error("Not prospective student");
  }
  const Token = authtorization.toString().split(" ")[1];

  const payload = verify(Token, process.env.SessionSecretkey);
  const prospective = verify(
    context.req.session.prospective,
    process.env.SessionSecretkey
  );

  if (payload) {
    if (prospective) {
      if (payload?.stateToken === prospective?.stateToken) {
        context.reqcode = prospective as any;
      } else {
        throw new Error("authtorization dont match");
      }
    } else {
      throw new Error("not prospective student");
    }
  } else {
    throw new Error("not authtorization");
  }

  return next();
};
