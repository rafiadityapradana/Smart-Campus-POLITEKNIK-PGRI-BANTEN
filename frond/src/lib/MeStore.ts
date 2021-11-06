// import Datastore from "nedb";
import useStorage from "./useStorage";
import Cookies from "js-cookie";
import { sign, verify } from "jsonwebtoken";

import {
  SESSION_ACCESS_TOKEN,
  SESSION_REFRESH_TOKEN,
  LOCAL_ACCESS_TOKEN,
  LOCAL_REFRESH_TOKEN,
  COOKIE_ACCESS_TOKEN,
  COOKIE_REFRESH_TOKEN,
  COOKIE_ASC_PATH,
  TOKEN_KEY,
} from "./GnllLib";
// const db = new Datastore({
//   filename: "XVPMUEU5b0EORJOP",
// });

// db.loadDatabase();
// db.insert([
//   {
//     Token:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IjEyMzI0NCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.qlby79RW6c8m_zudk3S3I78ys0lGR_jApctFGB2TQx4",
//   },
// ]);

// db.find({}, function (_: any, docs: any) {
//   console.log(docs);
// });
export const VerifineToken = (Token: string, KEY: string) => {
  const verifyResult = verify(Token, KEY);
  if (!verifyResult) {
    throw new Error("Failed verify");
  }
  return verifyResult;
};
export const SetAuthentication = (Data: any) => {
  const { setItem } = useStorage();
  setItem(SESSION_ACCESS_TOKEN, Data?.token?.accessToken, "session");
  setItem(SESSION_REFRESH_TOKEN, Data?.token?.refreshToken, "session");
  setItem(LOCAL_ACCESS_TOKEN, Data?.token?.accessToken, "local");
  setItem(LOCAL_REFRESH_TOKEN, Data?.token?.refreshToken, "local");
  Cookies.set(COOKIE_ACCESS_TOKEN, Data?.token?.accessToken, {
    secure: true,
  }); //prospectivsetudentsProps
  Cookies.set(COOKIE_REFRESH_TOKEN, Data?.token?.refreshToken, {
    secure: true,
  });
  Cookies.set(
    COOKIE_ASC_PATH,
    sign({ asc_path: Data?.user?.role! }, TOKEN_KEY, {
      expiresIn: "1d",
    }),
    {
      secure: true,
    }
  );
};

export const RemoveAuthenticationStore = () => {
  const { removeItem } = useStorage();
  removeItem(SESSION_ACCESS_TOKEN, "session");
  removeItem(SESSION_REFRESH_TOKEN, "session");
  removeItem(LOCAL_ACCESS_TOKEN, "local");
  removeItem(LOCAL_REFRESH_TOKEN, "local");
  Cookies.remove(COOKIE_ACCESS_TOKEN);
  Cookies.remove(COOKIE_REFRESH_TOKEN);
  Cookies.remove(COOKIE_ASC_PATH);
};
