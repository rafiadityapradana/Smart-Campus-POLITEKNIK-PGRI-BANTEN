import { sign } from "jsonwebtoken";
import { Users } from "./entities/Users";
export const CreateAccessToken = (user: Users) => {
  return sign({ user_id: user.user_id }, process.env.SessionSecretkey, {
    expiresIn: "12h",
  });
};

export const CreateRefreshToken = (user: Users) => {
  return sign({ user_id: user.user_id }, process.env.SessionSecretkeyReft, {
    expiresIn: "1d",
  });
};

export const ReqCodeCreateAccessToken = (q: any) => {
  return sign({ stateToken: q }, process.env.SessionSecretkey, {
    expiresIn: "1h",
  });
};
