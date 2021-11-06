import {
  Query,
  Resolver,
  Ctx,
  Mutation,
  Arg,
  InputType,
  Field,
  ObjectType,
  UseMiddleware,
} from "type-graphql";
import {
  District,
  Province,
  ClassCampus,
  Religion,
  ListMajors,
  SchoolYear,
  ProspectiveStudents,
  EducationList,
  WaveRegistration,
  ListPrice,
  Discounts,
  Payments,
  Transactions,
  presenter,
  Profession,
  SourceInformation,
} from "../entities/EntitiesData";
import { MyContext } from "../types";
import { Property } from "@mikro-orm/core";

import {
  RegCode,
  ThisSendMail,
  ToRp,
  ExpiredOneDay,
  HandleTypesMidtrans,
  RanNumberOrder,
} from "../conts";
import { infegister, infVanumbers } from "../mail/mailThemes";
import { sign, verify } from "jsonwebtoken";

import { v4 } from "uuid";
import { ReqCodeCreateAccessToken } from "../Auth";
import { ThisAuthReqCode } from "../ThisAuthReqCode";
import { IndoDayFormat } from "../conts";

@InputType()
class ReqProvID {
  @Field()
  province_id!: string;
}

@InputType()
class ProvinceTypeInput {
  @Field()
  province_name!: string;
}

@ObjectType()
class ResProv {
  @Field({ nullable: true })
  province_id?: string;
  @Field()
  province_name?: string;
}

@Resolver()
export class ProvinceResolver {
  @Query(() => ResProv, { nullable: true })
  async Province(
    @Arg("options") options: ReqProvID,
    @Ctx() { em }: MyContext
  ): Promise<ResProv> {
    const Prov = await em.findOne(Province, {
      province_id: options.province_id,
    });
    return {
      province_id: Prov?.province_id,
      province_name: Prov?.province_name,
    };
  }
  @Mutation(() => Province)
  async ProvineCreate(
    @Arg("options") options: ProvinceTypeInput,
    @Ctx() { em }: MyContext
  ): Promise<Province> {
    const NewProvince = em.create(Province, {
      province_name: options.province_name,
    });
    try {
      await em.persistAndFlush(NewProvince);
    } catch (err) {
      return err;
    }
    return NewProvince;
  }
}

// @InputType()
// class DistrictTypeInput {
//   @Field()
//   province_id!: string;
//   @Field()
//   district_or_city_name!: string;
// }

@Resolver()
export class DistrictResolver {
  // @Query(() => [District])
  // async District(@Ctx() { em }: MyContext): Promise<District[]> {
  //   return await em.find(District, {});
  // }
  // @Mutation(() => District)
  // async DistrictCreate(
  //   @Arg("options") options: DistrictTypeInput,
  //   @Ctx() { em }: MyContext
  // ): Promise<District> {
  //   const NewDistrict = em.create(District, {
  //     province_id: options.province_id,
  //     district_or_city_name: options.district_or_city_name,
  //   });
  //   try {
  //     await em.persistAndFlush(NewDistrict);
  //   } catch (err) {
  //     return err;
  //   }
  //   return NewDistrict;
  // }
}

// ------------------------------------- //
// ======== PublicResolver  ======== //
// ------------------------------------- //

@InputType()
class IDMajorsTypeInput {
  @Field()
  id_major!: string;
}
@InputType()
class RegisterationTypeInput {
  @Field()
  @Property({ length: 200 })
  full_name!: string;
  @Field()
  place_of_birth!: string;
  @Field()
  @Property({ length: 200 })
  date_of_birth!: string;
  @Field()
  gender!: string;
  @Field()
  @Property({ nullable: true })
  email!: string;
  @Field()
  @Property({ length: 20 })
  phone_number!: string;
  @Field()
  @Property({ length: 200 })
  school_origin!: string;
  @Field()
  address!: string;
  @Field()
  @Property({ length: 10 })
  postal_code_number!: string;
  @Field()
  @Property({ length: 200 })
  parents_name!: string;
  @Field()
  @Property({ length: 30, nullable: true })
  house_phone_number!: string;
  @Field()
  @Property({ length: 6, nullable: true })
  graduation_year!: string;
  @Field()
  @Property({ length: 80 })
  id_school_year!: string;
  @Field()
  @Property({ length: 80 })
  parents_profession!: string;
  @Field()
  @Property({ length: 80 })
  id_education_list!: string;
  @Field()
  @Property({ length: 80 })
  id_district_or_city!: string;
  @Field()
  @Property({ length: 80 })
  id_religion!: string;
  @Field()
  @Property({ length: 80 })
  id_source_info!: string;
  @Field()
  @Property({ length: 80 })
  id_wave_register!: string;
  @Field()
  @Property({ length: 80 })
  id_major!: string;
  @Field()
  @Property({ length: 80, nullable: true })
  id_presenter!: string;
}
@InputType()
class TransactionsTypeInput {
  @Field()
  @Property({ length: 80 })
  id_payment!: string;
}
@ObjectType()
class FieldError {
  @Field()
  message: string;
}
@ObjectType()
class ResponeRegTrans {
  @Field({ nullable: true })
  tr_id?: string;
  @Field({ nullable: true })
  reg_code?: string;
  @Field({ nullable: true })
  va_number?: string;
  @Field({ nullable: true })
  amount?: string;
  @Field({ nullable: true })
  expired?: string;
  @Field(() => FieldError, { nullable: true })
  errors?: FieldError;
}
@ObjectType()
class ResponsePublicAuth {
  @Field(() => FieldError, { nullable: true })
  errors?: FieldError;
  @Field({ nullable: true })
  stateToken?: string;
}
@InputType()
class PublicAuthTypeInput {
  @Field()
  reg_code!: string;
}
@ObjectType()
class InfoRreCodes {
  @Field()
  prospective_students_id: string;
  @Field()
  reg_code: string;
  @Field()
  full_name: string;
  @Field({ nullable: true })
  email: string;
  @Field()
  phone_number: string;
  @Field({ nullable: true })
  religion: string;
  @Field({ nullable: true })
  district_or_city: string;
  @Field()
  address: string;
  @Field()
  graduation_year: string;
  @Field()
  school_origin: string;
  @Field({ nullable: true })
  major: string;
  @Field({ nullable: true })
  school_year: string;
  @Field()
  date_registration: string;
  @Field()
  total_investment: string;
}
@ObjectType()
class ProspectiveStudentsaInfoCost {
  @Field()
  prospective_students_id: string;
  @Field()
  reg_code: string;
  @Field()
  id_class_campus: string;
  @Field()
  class_campus: string;
  @Field()
  wave: string;
  @Field()
  wave_desc: string;
  @Field({ nullable: true })
  year: string;
}
@ObjectType()
class DataFromReqCode {
  @Field()
  inforeq: InfoRreCodes;
  @Field()
  stateToken?: string;
  @Field()
  error?: FieldError;
}
@ObjectType()
class ResDisttrictProv {
  @Field({ nullable: true })
  district_or_city_id?: string;
  @Field({ nullable: true })
  district_or_city_name?: string;
}
@ObjectType()
class InfoNewProspectiveStudents {
  @Field()
  reg_code?: string;
  @Field()
  concerned_id?: string;
}
@ObjectType()
class TPrices {
  @Field()
  Total: string;
  @Field({ nullable: true })
  discount: string;
  @Field()
  TotAndDis: string;
}
@ObjectType()
class TransactionsVa {
  @Field({ nullable: true })
  transaction_id?: string;

  @Field({ nullable: true })
  concerned_id?: string;

  @Field({ nullable: true })
  amount?: string;

  @Field({ nullable: true })
  va_number?: string;

  @Field({ nullable: true })
  currency?: string;

  @Field({ nullable: true })
  merchant_id?: string;

  @Field({ nullable: true })
  payment_type?: string;

  @Field({ nullable: true })
  destination_pay?: string;

  @Field({ nullable: true })
  destination_name?: string;

  @Field({ nullable: true })
  transaction_expired?: string;
}
@InputType()
class IDClassCampusTypeInput {
  @Field()
  id_class_campus!: string;
}
@InputType()
class IDTypeInput {
  @Field()
  id!: string;
}

@Resolver()
export class PublicResolver {
  @Query(() => [ListMajors])
  async majorFromClassCampus(
    @Arg("options") options: IDClassCampusTypeInput,
    @Ctx() { em }: MyContext
  ): Promise<ListMajors[]> {
    return await em.find(ListMajors, {
      id_class_campus: options.id_class_campus,
      list_major_status: "Enable",
    });
  }
  @Query(() => [presenter])
  async Presenters(@Ctx() { em }: MyContext): Promise<presenter[]> {
    return await em.find(presenter, {
      status_presenter: "Enable",
    });
  }
  @Query(() => [Province])
  async Provinces(@Ctx() { em }: MyContext): Promise<Province[]> {
    return await em.find(Province, {});
  }

  @Query(() => [ResDisttrictProv], { nullable: true })
  async ProvinceDistrict(
    @Arg("options") options: ReqProvID,
    @Ctx() { em }: MyContext
  ): Promise<ResDisttrictProv[]> {
    const Prov = await em.findOne(Province, {
      province_id: options.province_id,
    });
    const ResData = await em.find(District, {
      province_id: Prov?.province_id,
    });

    return ResData;
  }
  @Query(() => ProspectiveStudentsaInfoCost)
  @UseMiddleware(ThisAuthReqCode)
  async prospectiveInfo(@Ctx() { reqcode, em }: MyContext) {
    const DataProspectiveStudents = await em
      .getConnection()
      .execute(
        "SELECT * FROM prospective_students ps JOIN wave_registration wr ON ps.id_wave_register  = wr.wave_registration_id  JOIN list_majors lm ON ps.id_major = lm.list_major_id  JOIN class_campus cc ON lm.id_class_campus =cc.class_campus_id JOIN school_year sy ON ps.id_school_year = sy.school_year_id WHERE ps.prospective_students_id=?",
        [reqcode?.stateToken]
      );

    if (!DataProspectiveStudents[0]) {
      throw new Error("Req code not Found !");
    }
    return {
      prospective_students_id:
        DataProspectiveStudents[0].prospective_students_id,
      reg_code: DataProspectiveStudents[0].reg_code,
      id_class_campus: DataProspectiveStudents[0].id_class_campus,
      class_campus: DataProspectiveStudents[0].class_campus_name,
      wave: DataProspectiveStudents[0].wave,
      wave_desc: DataProspectiveStudents[0].wave_desc,
      year: DataProspectiveStudents[0].school_year_value,
    };
  }

  @Query(() => TPrices)
  @UseMiddleware(ThisAuthReqCode)
  async totalPrices(
    @Arg("options") options: IDTypeInput,
    @Ctx() { reqcode, em }: MyContext
  ) {
    const Amount = await em
      .getConnection()
      .execute(
        "SELECT sum(list_price_value) FROM list_price WHERE id_major=? AND list_price_status=?",
        [options.id, "Enable"]
      );

    const Data = await em.findOne(ProspectiveStudents, {
      prospective_students_id: reqcode?.stateToken,
      // registration_status: "Yes",
    });
    if (!Data) {
      throw new Error("Req code not Found !");
    }
    const DC = await em.findOne(Discounts, {
      id_major: options.id,
      id_wave: Data.id_wave_register,
      discount_status: "Enable",
    });
    // (35/100) x 36.000
    let DiscontValue;
    if (DC) {
      DiscontValue = (DC?.discount_value / 100) * Amount[0].sum;
    }

    console.log(Amount[0].sum);
    return {
      discount: DiscontValue,
      Total: Amount[0].sum,
      TotAndDis: DiscontValue ? Amount[0].sum - DiscontValue : Amount[0].sum,
    };
  }
  @Query(() => [Payments])
  @UseMiddleware(ThisAuthReqCode)
  async paymenttypes(@Ctx() { em }: MyContext): Promise<Payments[]> {
    return await em.find(
      Payments,
      {},
      {
        orderBy: { created_at: "ASC" },
      }
    );
  }
  @Query(() => DataFromReqCode)
  @UseMiddleware(ThisAuthReqCode)
  async StataeCode(@Ctx() { reqcode, em }: MyContext) {
    // if (!req.session.reqinfo) {
    //   throw new Error("not authtorization");
    // }

    const Data = await em.findOne(ProspectiveStudents, {
      prospective_students_id: reqcode?.stateToken,
      // registration_status: "Yes",
    });
    if (!Data) {
      throw new Error("Req code not Found !");
    }

    return {
      inforeq: Data,
      stateToken: ReqCodeCreateAccessToken(Data?.prospective_students_id),
      error: {
        message: "",
      },
    };
  }

  @Mutation(() => ResponsePublicAuth)
  async PublicAuth(
    @Arg("options") options: PublicAuthTypeInput,
    @Ctx() { em, req }: MyContext
  ): Promise<ResponsePublicAuth> {
    const Prospective = await em.findOne(ProspectiveStudents, {
      reg_code: options.reg_code,
    });

    if (!Prospective) {
      return {
        stateToken: "",
        errors: {
          message: "Your Req Code Not Found !",
        },
      };
    }
    req.session!.reqinfo = sign(
      { reqinfo: Prospective?.prospective_students_id },
      process.env.SessionSecretkey,
      {
        expiresIn: "1h",
      }
    );

    return {
      stateToken: ReqCodeCreateAccessToken(
        Prospective?.prospective_students_id
      ),
      errors: {
        message: "",
      },
    };
  }

  @Query(() => SourceInformation, { nullable: true })
  async SourceInfoOne(
    @Arg("options") options: IDTypeInput,
    @Ctx() { em }: MyContext
  ): Promise<SourceInformation | null> {
    console.log(
      ReqCodeCreateAccessToken("id-584d4b7e-7a8f-4c82-97b9-e293e6ec8494")
    );
    return await em.findOne(
      SourceInformation,
      {
        source_id: options.id,
        source_status: "Enable",
      },
      {
        orderBy: { created_at: "ASC" },
      }
    );
  }

  @Query(() => [SourceInformation])
  async SourceInfo(@Ctx() { em }: MyContext): Promise<SourceInformation[]> {
    return await em.find(
      SourceInformation,
      {
        source_status: "Enable",
      },
      {
        orderBy: { created_at: "ASC" },
      }
    );
  }
  @Query(() => [ClassCampus])
  async ClassOpenRegister(@Ctx() { em }: MyContext): Promise<ClassCampus[]> {
    return await em.find(
      ClassCampus,
      {
        class_campus_status: "Enable",
      },
      {
        orderBy: { created_at: "ASC" },
      }
    );
  }
  @Query(() => [Profession])
  async Profession(@Ctx() { em }: MyContext): Promise<Profession[]> {
    return await em.find(
      Profession,
      {},
      {
        orderBy: { created_at: "ASC" },
      }
    );
  }
  @Query(() => [Religion])
  async ReligionRegister(@Ctx() { em }: MyContext): Promise<Religion[]> {
    return await em.find(
      Religion,
      {},
      {
        orderBy: { created_at: "ASC" },
      }
    );
  }
  @Query(() => [EducationList])
  async EducationListRegister(
    @Ctx() { em }: MyContext
  ): Promise<EducationList[]> {
    return await em.find(
      EducationList,
      {},
      {
        orderBy: { created_at: "ASC" },
      }
    );
  }
  @Query(() => WaveRegistration)
  async WavetRegister(
    @Ctx() { em }: MyContext
  ): Promise<WaveRegistration | null> {
    return await em.findOne(WaveRegistration, {
      wave_status: "Enable",
    });
  }
  @Query(() => SchoolYear)
  async SchoolYearRegister(
    @Ctx() { em }: MyContext
  ): Promise<SchoolYear | null> {
    return await em.findOne(SchoolYear, {
      status_school_year: "Enable",
    });
  }
  @Query(() => TransactionsVa)
  /// new auth
  //SELECT * FROM transactions ts JOIN payments py ON ts.id_payment = py.payment_id
  async TransactionsState(
    @Arg("options") options: IDTypeInput,
    @Ctx() { em }: MyContext
  ): Promise<TransactionsVa> {
    const Trs = await em
      .getConnection()
      .execute(
        "SELECT * FROM transactions ts JOIN payments py ON ts.id_payment = py.payment_id WHERE transaction_id=? AND status_code=? AND transaction_status=?",
        [options.id, "201", "pending"]
      );

    return {
      transaction_id: Trs[0].transaction_id,
      amount: Trs[0].amount,
      concerned_id: Trs[0].concerned_id,
      currency: Trs[0].currency,
      destination_pay:
        Trs[0].destination_pay === "store" ? "" : Trs[0].destination_pay,
      va_number: Trs[0].va_number,
      merchant_id: Trs[0].merchant_id,
      destination_name: Trs[0].destination_name,
      payment_type:
        Trs[0].payment_type === "bank_transfer"
          ? Trs[0].payment_type.split("_")[0] +
            " " +
            Trs[0].payment_type.split("_")[1]
          : Trs[0].destination_pay,

      transaction_expired: IndoDayFormat(Trs[0].transaction_expired),
    };
  }
  @Mutation(() => [ListMajors])
  async ListMajorsRegister(
    @Arg("options") options: IDClassCampusTypeInput,
    @Ctx() { em }: MyContext
  ): Promise<ListMajors[]> {
    return await em.find(ListMajors, {
      id_class_campus: options.id_class_campus,
      list_major_status: "Enable",
    });
  }
  @Query(() => [ListMajors])
  async ListMajorSite(@Ctx() { em }: MyContext): Promise<ListMajors[]> {
    return await em.find(ListMajors, {
      id_class_campus: "id-5900c482-31ef-4423-b28d-cbfad0081239",
    });
  }
  @Query(() => [ListPrice], { nullable: true })
  async ListPricesRegister(
    @Arg("options") options: IDMajorsTypeInput,
    @Ctx() { em }: MyContext
  ): Promise<ListPrice[]> {
    const Major = await em.find(ListMajors, {
      list_major_id: options.id_major,
      list_major_status: "Enable",
    });
    if (Major) {
      return await em.find(
        ListPrice,
        {
          id_major: options.id_major,
          list_price_status: "Enable",
        },
        {
          orderBy: { created_at: "ASC" },
        }
      );
    } else {
      return await em.find(
        ListPrice,
        {
          list_price_status: "Enable",
        },
        {
          orderBy: { created_at: "ASC" },
        }
      );
    }
  }

  @Mutation(() => InfoNewProspectiveStudents)
  async RegistrationSubmit(
    @Arg("options") options: RegisterationTypeInput,
    @Ctx() { em, req }: MyContext
  ): Promise<InfoNewProspectiveStudents> {
    const MC = await em.findOne(ListMajors, {
      list_major_id: options.id_major,
      list_major_status: "Enable",
    });

    if (!MC) {
      throw new Error("Major Not Found !");
    }

    const Amount = await em
      .getConnection()
      .execute(
        "SELECT sum(list_price_value) FROM list_price WHERE id_major=? AND list_price_status=?",
        [options.id_major, "Enable"]
      );
    if (!Amount) {
      throw new Error("Total Ammount Not Found !");
    }
    const DC = await em.findOne(Discounts, {
      id_wave: options.id_wave_register,
      id_major: options.id_major,
      discount_status: "Enable",
    });
    // (35/100) x 36.000
    let DiscontValue;
    if (DC) {
      DiscontValue = (DC?.discount_value / 100) * Amount[0].sum;
    }
    const NewProspectiveStudents = em.create(ProspectiveStudents, {
      prospective_students_id: "id-" + v4(),
      reg_code: RegCode(MC.major_code),
      full_name: options.full_name,
      place_of_birth: options.place_of_birth,
      date_of_birth: options.date_of_birth,
      email: options.email,
      phone_number: options.phone_number,
      gender: options.gender,
      school_origin: options.school_origin,
      address: options.address,
      postal_code_number: options.postal_code_number,
      parents_name: options.parents_name,
      house_phone_number: options.house_phone_number,
      graduation_year: options.graduation_year,
      total_investment: DiscontValue
        ? Amount[0].sum - DiscontValue
        : Amount[0].sum,
      id_school_year: options.id_school_year,
      parents_profession: options.parents_profession,
      id_education_list: options.id_education_list,
      id_district_or_city: options.id_district_or_city,
      id_religion: options.id_religion,
      id_source_info: options.id_source_info,
      id_wave_register: options.id_wave_register,
      id_major: options.id_major,
      id_presenter: options.id_presenter,
      id_further_process: "-",
    });
    try {
      await em.persistAndFlush(NewProspectiveStudents);
      const info = {
        reg_code: NewProspectiveStudents.reg_code,
        header: "PMB",
        total_investment: ToRp(NewProspectiveStudents.total_investment),
      };
      ThisSendMail(
        NewProspectiveStudents.email,
        "Registration information ✔",
        infegister(info)
      );
    } catch (err) {
      console.log(err);
      return err;
    }
    req.session.prospective = ReqCodeCreateAccessToken(
      NewProspectiveStudents.prospective_students_id
    );
    req.session.pay = "true";
    return {
      concerned_id: ReqCodeCreateAccessToken(
        NewProspectiveStudents.prospective_students_id
      ),
      reg_code: NewProspectiveStudents.reg_code,
    };
  }
  @Mutation(() => ResponeRegTrans)
  @UseMiddleware(ThisAuthReqCode)
  async RegistrationTransactionsCreate(
    @Arg("options") options: TransactionsTypeInput,
    @Ctx() { em, reqcode, req }: MyContext
  ): Promise<ResponeRegTrans> {
    const Prospective = await em.findOne(ProspectiveStudents, {
      prospective_students_id: reqcode?.stateToken,
      registration_status: "No",
    });
    if (!Prospective) {
      throw new Error("Prospective Students Not Found !");
    }

    const Payment = await em.findOne(Payments, {
      payment_id: options.id_payment,
    });

    if (!Payment) {
      throw new Error("Payment Type Not Found !");
    }
    const transaction_details = {
      gross_amount: 350000,
      order_id: RanNumberOrder(),
    };
    const customer_details = {
      first_name: Prospective.full_name,
      email: Prospective.email,
      phone: Prospective.phone_number,
    };
    HandleTypesMidtrans(
      req,
      Payment.payment_type,
      transaction_details,
      customer_details,
      Payment.destination_name
    );

    const ResMiGen = verify(
      req.session.mits,
      process.env.SessionSecretkey
    ) as any;

    const NewTransaction = em.create(Transactions, {
      transaction_id: "id-" + v4(),
      id_payment: options.id_payment,
      concerned_id: Prospective?.reg_code,
      merchant_id: ResMiGen?.merchant_id,
      gross_amount: ResMiGen?.gross_amount,
      amount: "350000",
      va_number: ResMiGen?.va_numbers,
      currency: ResMiGen?.currency,
      status_code: ResMiGen?.status_code,
      fraund_status: ResMiGen?.fraud_status,
      transaction_status: ResMiGen?.transaction_status,
      transaction_type: "Registration",
      status_message: ResMiGen?.status_message,
      transaction_time: ResMiGen?.transaction_time,
      transaction_expired: ExpiredOneDay(ResMiGen?.transaction_time),
      signature_key: ResMiGen.signature_key,
    });
    const info = {
      va_number: NewTransaction?.va_number,
      reg_code: NewTransaction?.merchant_id,
      destination: Payment.destination_name.toUpperCase(),
      header: "Virtual Account",
      total_investment: ToRp(transaction_details.gross_amount),
      expired: ExpiredOneDay(NewTransaction.transaction_time),
      desc: "Biaya Pendaftaran Mahasiswa Baru " + Prospective.reg_code,
    };
    try {
      await em.persistAndFlush(NewTransaction);
      await ThisSendMail(
        customer_details.email,
        "Virtual Account information ✔",
        infVanumbers(info)
      );
    } catch (e) {
      return {
        errors: {
          message: e.message,
        },
      };
    }
    req.session.destroy.mits;
    req.session.pay = false;
    req.session.trid = sign(
      { tr: NewTransaction.transaction_id },
      process.env.SessionSecretkey,
      {
        expiresIn: "1h",
      }
    );
    return {
      tr_id: NewTransaction?.transaction_id,
      reg_code: NewTransaction?.merchant_id,
      va_number: NewTransaction?.va_number,
      amount: ToRp(NewTransaction?.amount),
      expired: ExpiredOneDay(NewTransaction?.transaction_time),
    };
  }
}
