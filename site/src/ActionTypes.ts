import DeviceDetector from "device-detector-js";
import { sign } from "jsonwebtoken";
import Cookies from "js-cookie";
import { useLisMajorRegisterStateMutation } from "./generated/graphql";

export const ToRp = (numb: any) => {
  const format = numb.toString().split("").reverse().join("");
  const convert = format.match(/\d{1,3}/g);
  const result = "Rp. " + convert.join(".").split("").reverse().join("");
  return result;
};

export const Device = () => {
  return new DeviceDetector().parse(window.navigator.userAgent);
};
export const removeTokenStateClass = () => {
  const CookiesState = Cookies.getJSON("TokenStateClass");
  if (CookiesState) {
    Cookies.remove("TokenStateClass");
  }
  const Re = Cookies.getJSON("RegID");
  if (Re) {
    Cookies.remove("RegID");
  }
  return true;
};
export const setTokenStateClass = (token: string) => {
  const State = sign(
    {
      TokenState: token,
    },
    "secret",
    { expiresIn: "1h" }
  );
  Cookies.set("TokenStateClass", token);
  return State;
};
export const AuthStateRegister = () => {
  const State = Cookies.getJSON("TokenStateClass");
  if (State) {
    return State;
  }
  return false;
};

export const MajorState = () => {
  const [, Req] = useLisMajorRegisterStateMutation();
  const State = Cookies.getJSON("TokenStateClass");
  try {
    const ResStateCode = Req({
      id_class_campus: State,
    });
    console.log(ResStateCode);
  } catch (error) {
    return error;
  }
};

export const ValidationSubmitRegister = (DataSub: any) => {
  if (
    DataSub.full_name === "" ||
    DataSub.place_of_birth === "" ||
    DataSub.date_of_birth === "" ||
    DataSub.gender === "" ||
    DataSub.email === "" ||
    DataSub.phone_number === "" ||
    DataSub.school_origin === "" ||
    DataSub.address === "" ||
    DataSub.postal_code_number === "" ||
    DataSub.parents_name === "" ||
    DataSub.house_phone_number === "" ||
    DataSub.graduation_year === "" ||
    DataSub.id_school_year === "" ||
    DataSub.parents_profession === "" ||
    DataSub.id_education_list === "" ||
    DataSub.id_district_or_city === "" ||
    DataSub.id_religion === "" ||
    DataSub.id_source_info === "" ||
    DataSub.id_wave_register === "" ||
    DataSub.id_major === ""
  ) {
    return false;
  } else if (
    DataSub.full_name === undefined ||
    DataSub.place_of_birth === undefined ||
    DataSub.date_of_birth === undefined ||
    DataSub.gender === undefined ||
    DataSub.email === undefined ||
    DataSub.phone_number === undefined ||
    DataSub.school_origin === undefined ||
    DataSub.address === undefined ||
    DataSub.postal_code_number === undefined ||
    DataSub.parents_name === undefined ||
    DataSub.house_phone_number === undefined ||
    DataSub.graduation_year === undefined ||
    DataSub.id_school_year === undefined ||
    DataSub.parents_profession === undefined ||
    DataSub.id_education_list === undefined ||
    DataSub.id_district_or_city === undefined ||
    DataSub.id_religion === undefined ||
    DataSub.id_source_info === undefined ||
    DataSub.id_wave_register === undefined ||
    DataSub.id_major === undefined
  ) {
    return false;
  } else if (
    DataSub.full_name === null ||
    DataSub.place_of_birth === null ||
    DataSub.date_of_birth === null ||
    DataSub.gender === null ||
    DataSub.email === null ||
    DataSub.phone_number === null ||
    DataSub.school_origin === null ||
    DataSub.address === null ||
    DataSub.postal_code_number === null ||
    DataSub.parents_name === null ||
    DataSub.house_phone_number === null ||
    DataSub.graduation_year === null ||
    DataSub.id_school_year === null ||
    DataSub.parents_profession === null ||
    DataSub.id_education_list === null ||
    DataSub.id_district_or_city === null ||
    DataSub.id_religion === null ||
    DataSub.id_source_info === null ||
    DataSub.id_wave_register === null ||
    DataSub.id_major === null
  ) {
    return false;
  } else {
    return true;
  }
};
