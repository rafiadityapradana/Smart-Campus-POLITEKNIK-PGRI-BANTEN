export const TOKEN_KEY = "SMART-CAMPUS-KEY-64e9045e0b9043688a87ea3ae03f3ffd";
export const SESSION_ACCESS_TOKEN = "_Acs-Ast-PPB";
export const SESSION_REFRESH_TOKEN = "_Reft-Rst-PPB";
export const LOCAL_ACCESS_TOKEN = "_Asc-Alt-PPB";
export const LOCAL_REFRESH_TOKEN = "_Reft-Rlt-PPB";
export const COOKIE_ACCESS_TOKEN = "_Asc-Act-PPB";
export const COOKIE_REFRESH_TOKEN = "_Reft-Rct-PPB";
export const COOKIE_ASC_PATH = "_Pth-Ap-St-PPB";
export const BASE_PATH = "http://localhost:4000/";
import { toast } from "react-toastify";
export const NewDate = (dt: any) => {
  const ExpiredDate = new Date(dt);
  const Nest = ExpiredDate.toISOString()
    .split("T")[0]
    .split("-")
    .concat(ExpiredDate.toISOString().split("T")[1].split(":"));
  const One = parseInt(Nest[2]) + 1;
  const ToString = One.toString();
  const Combain = Nest[0] + "-" + Nest[1] + "-" + ToString;
  return Combain;
};

export const NewDateTime = (dt: any) => {
  const ExpiredDate = new Date(dt);
  const Nest = ExpiredDate.toISOString()
    .split("T")[0]
    .split("-")
    .concat(ExpiredDate.toISOString().split("T")[1].split(":"));
  const One = parseInt(Nest[2]) + 1;
  const ToString = One.toString();
  const Combain =
    Nest[0] +
    "-" +
    Nest[1] +
    "-" +
    ToString +
    " " +
    Nest[3] +
    ":" +
    Nest[4] +
    ":00";
  return Combain;
};
export const ToRp = (numb: any) => {
  if (!numb) {
    return numb;
  }
  const format = numb.toString().split("").reverse().join("");
  const convert = format.match(/\d{1,3}/g);
  const result = "Rp. " + convert.join(".").split("").reverse().join("");
  return result;
};
import { useRouter } from "next/router";

export const useGetId = () => {
  const router = useRouter();
  const intId = typeof router.query.id === "string" && router.query.id;

  return intId;
};
export const RendomMerchantId = () => {
  const D = new Date();
  return (
    D.getUTCFullYear() +
    "" +
    D.getUTCMonth() +
    "" +
    D.getUTCDate() +
    "" +
    Math.floor(Math.random() * 346)
  );
};

export const notify = (msg: string, type: string) => {
  switch (type) {
    case type:
      "success";
      toast.success(msg, {
        draggablePercent: 60,
        autoClose: 7000,
        closeButton: false,
      });
      break;
    case type:
      "info";
      toast.info(msg, {
        draggablePercent: 60,
        autoClose: 7000,
        closeButton: false,
      });
      break;
    case type:
      "failed";
      toast.error(msg, {
        draggablePercent: 60,
        autoClose: 7000,
        closeButton: false,
      });
      break;
    default:
      toast("Wow so easy !", {
        draggablePercent: 60,
        autoClose: 7000,
        closeButton: false,
      });
      break;
  }
};
export const _SEMPEL_ =
  "data:image/jpeg;base64,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";
