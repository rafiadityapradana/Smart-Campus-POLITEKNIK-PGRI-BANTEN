import nodemailer from "nodemailer";

import { MidtransClient } from "midtrans-node-client";
import { sign } from "jsonwebtoken";

export const ToRp = (numb: any) => {
  const format = numb.toString().split("").reverse().join("");
  const convert = format.match(/\d{1,3}/g);
  const result = "Rp. " + convert.join(".").split("").reverse().join("");
  return result;
};

export const NewDate = () => {
  const ExpiredDate = new Date();
  const Nest = ExpiredDate.toISOString()
    .split("T")[0]
    .split("-")
    .concat(ExpiredDate.toISOString().split("T")[1].split(":"));
  const One = parseInt(Nest[2]) + 1;
  const ToString = One.toString();
  const Combain = Nest[0] + "-" + Nest[1] + "-" + ToString;
  return Combain;
};
export const NewDateTime = () => {
  const ExpiredDate = new Date();
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
export const ExpiredOneDay = (DataDate: any) => {
  const ExpiredDate = new Date(DataDate + " UTC");
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

export const IndoDayFormat = (DataDate: any) => {
  const ExpiredDate = new Date(DataDate + " UTC");
  const Nest = ExpiredDate.toISOString()
    .split("T")[0]
    .split("-")
    .concat(ExpiredDate.toISOString().split("T")[1].split(":"));
  const One = parseInt(Nest[2]);
  const ToString = One.toString();
  const Combain =
    ToString +
    "-" +
    Nest[1] +
    "-" +
    Nest[0] +
    " " +
    Nest[3] +
    ":" +
    Nest[4] +
    ":00";
  return Combain;
};

export const RanNumberOrder = () => {
  const DewDate = new Date();
  Math.floor(Math.random() * 1234);
  const Random =
    DewDate.getFullYear() +
    "" +
    DewDate.getMonth() +
    "" +
    DewDate.getDate() +
    "" +
    Math.floor(Math.random() * 1234);
  return Random;
};
export const RegCode = (MC: any) => {
  const d = new Date();
  return (
    "PMB" +
    MC +
    d.getFullYear() +
    d.getMonth() +
    d.getDate() +
    d.getHours() +
    d.getMinutes() +
    d.getSeconds()
  );
};
export const MailServer = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "41c18d75d17209",
    pass: "7a0021c5f69bfd",
  },
});
export const ThisSendMail = async (to: string, sub: string, themes: any) => {
  return await MailServer.sendMail({
    from: '"POLITEKNIK PGRI BANTEN" <info-pmb@politeknikpgribanten.ac.id>',
    to: to, // list of receivers
    subject: sub, // Subject line
    html: themes, // html body
  });
};
export const CoreApiMitrans = () => {
  const core = new MidtransClient.CoreApi({
    isProduction: false,
    serverKey: process.env.SERVER_KEY,
    clientKey: process.env.CLIENT_KEY,
  });
  return core;
};

export const HandleTypesMidtrans = (
  req: any,
  paymnet_type: string,
  transaction_details: any,
  customer_details: any,
  destination_name: string
) => {
  if (paymnet_type === "cstore") {
    const parameter = {
      payment_type: paymnet_type,
      transaction_details: transaction_details,
      cstore: {
        store: destination_name,
      },
      customer_details: customer_details,
    };

    const core = CoreApiMitrans();
    core
      .charge(parameter)
      .then((Res: any) => {
        const Data = {
          status_code: Res?.status_code,
          status_message: Res?.status_message,
          gross_amount: Res?.gross_amount,
          currency: Res?.currency,
          transaction_time: Res?.transaction_time,
          transaction_status: Res?.transaction_status,
          merchant_id: Res?.merchant_id,
          va_numbers: Res?.payment_code,
          fraud_status: "accept",
          signature_key: Res?.transaction_id,
        };

        return (req.session.mits = sign(Data, process.env.SessionSecretkey, {
          expiresIn: "1h",
        }));
      })
      .catch((e) => {
        return {
          errors: {
            message: e.message,
          },
        };
      });
  } else if (paymnet_type === "bank_transfer") {
    const parameter = {
      payment_type: paymnet_type,
      transaction_details: transaction_details,
      bank_transfer: {
        bank: destination_name,
      },
      customer_details: customer_details,
    };
    const core = CoreApiMitrans();

    core
      .charge(parameter)
      .then((Res: any) => {
        const Data = {
          status_code: Res?.status_code,
          status_message: Res?.status_message,
          gross_amount: Res?.gross_amount,
          currency: Res?.currency,
          transaction_time: Res?.transaction_time,
          transaction_status: Res?.transaction_status,
          merchant_id: Res?.merchant_id,
          va_numbers: Res?.va_numbers[0].va_number,
          fraud_status: "accept",
          signature_key: Res?.transaction_id,
        };

        req.session.mits = sign(Data, process.env.SessionSecretkey, {
          expiresIn: "1h",
        });
        console.log(req.session.mits);
      })
      .catch((e) => {
        return {
          errors: {
            message: e.message,
          },
        };
      });
  } else {
    throw new Error("Payment Type Not Found !");
  }
};
