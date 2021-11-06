import {
  Query,
  Resolver,
  Ctx,
  Arg,
  InputType,
  Field,
  UseMiddleware,
  Mutation,
} from "type-graphql";
import {
  Transactions,
  Account,
  SubAccount,
  GroupAccount,
} from "../entities/EntitiesData";
import { MyContext } from "../types";
import { ObjectType } from "type-graphql";

import { MoneyMovement } from "../entities/EntitiesData";
import { v4 } from "uuid";

import {
  ThisAuthtorizationUsers,
  ApiMiddelware,
} from "../middleware/MeAuthtorization";
@InputType()
class IDTransactionsTypeInput {
  @Field()
  id!: string;
}
@InputType()
class MoneyOption {
  @Field()
  id!: string;
  @Field({ nullable: true })
  from!: string;
  @Field({ nullable: true })
  to!: string;
}
@InputType()
class MarkMoneyOption {
  @Field()
  id!: string;
  @Field()
  mark!: string;
}
@InputType()
class UpdtateAccountOption {
  @Field()
  id!: string;
  @Field()
  account!: string;
  @Field()
  desc!: string;
}
@InputType()
class AccountOption {
  @Field()
  account!: string;
  @Field()
  desc!: string;
}
@InputType()
class DateFromAndTo {
  @Field({ nullable: true })
  from!: string;
  @Field({ nullable: true })
  to!: string;
}

@ObjectType()
class SumMoneyMovement {
  @Field({ nullable: true })
  blance!: string;
  @Field({ nullable: true })
  debit!: string;
  @Field({ nullable: true })
  kredit!: string;
}
@ObjectType()
class ResTrasOne {
  @Field()
  transaction_id: string;
  @Field()
  id_payment!: string;
  @Field()
  concerned_id!: string;
  @Field()
  merchant_id!: string;
  @Field()
  gross_amount!: string;
  @Field()
  amount!: string;
  @Field()
  va_number!: string;
  @Field()
  currency!: string;
  @Field()
  status_code!: string;
  @Field()
  fraund_status!: string;
  @Field()
  transaction_status!: string;
  @Field()
  transaction_type!: string;
  @Field()
  status_message!: string;
  @Field(() => Date)
  transaction_time!: string;
  @Field(() => Date)
  transaction_expired!: string;
  @Field()
  signature_key!: string;
  @Field()
  payment_type!: string;
  @Field()
  destination_pay!: string;
  @Field()
  destination_name!: string;
  @Field()
  destination_image!: string;
  @Field()
  full_name!: string;
  @Field({ nullable: true })
  email!: string;
  @Field()
  phone_number!: string;
  @Field()
  gender!: string;
  @Field()
  address!: string;
}
@ObjectType()
class ResLedger {
  @Field()
  money_movement_id!: string;
  @Field()
  account!: string;
  @Field({ nullable: true })
  ref!: string;
  @Field({ nullable: true })
  connected!: string;
  @Field()
  posted!: boolean;
  @Field()
  mark!: string;
  @Field()
  proof!: string;
  @Field()
  amount!: number;
  @Field()
  return_amount!: number;
  @Field()
  money_movement_des!: string;
  @Field()
  money_movement_type!: string;
  @Field()
  group_account_value!: string;
  @Field()
  group_account_des!: string;
  @Field(() => Date)
  created_at!: string;
  @Field(() => Date)
  updated_at!: string;
}
@ObjectType()
class ConnectedResMoneyMovementOne {
  @Field()
  full_name!: string;
  @Field({ nullable: true })
  email!: string;
  @Field()
  phone_number!: string;
  @Field()
  gender!: string;
  @Field()
  address!: string;
  @Field()
  place_of_birth?: string;
  @Field(() => Date)
  date_of_birth?: string;
  @Field()
  school_year_value?: string;
  @Field()
  profession?: string;
  @Field()
  province_name?: string;
  @Field()
  district_or_city_name?: string;
  @Field()
  religion_name?: string;
  @Field()
  total_investment!: number;
  @Field()
  class_campus_name?: string;
  @Field()
  major_code?: string;
  @Field()
  major?: string;
  @Field({ nullable: true })
  class_name?: string;
  @Field(() => Date)
  created_at!: string;
  @Field(() => Date)
  updated_at!: string;
}
@ObjectType()
class ResMoneyMovementOneFinance {
  @Field({ nullable: true })
  money_movement?: ResLedger;
  @Field({ nullable: true })
  connected_value?: ConnectedResMoneyMovementOne;
}

@ObjectType()
class ResSubAccount {
  @Field()
  sub_account_id!: string;
  @Field()
  id_account!: string;
  @Field()
  sub_account_value!: string;
  @Field()
  sub_account_des!: string;
  @Field({ nullable: true })
  account_value?: string;
}

@Resolver()
export class TransactionssData {
  @Query(() => [Transactions])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async gettransaction(@Ctx() { em }: MyContext): Promise<Transactions[]> {
    return await em.find(Transactions, {}, { orderBy: { createdAt: "DESC" } });
  }
  @Query(() => ResTrasOne, { nullable: true })
  async trasactionone(
    @Arg("options") options: IDTransactionsTypeInput,
    @Ctx() { em }: MyContext
  ): Promise<ResTrasOne | null> {
    const One = await em
      .getConnection()
      .execute(
        "SELECT * FROM transactions ts JOIN payments py ON ts.id_payment = py.payment_id LEFT JOIN prospective_students ps ON ts.concerned_id = ps.reg_code WHERE ts.transaction_id = ?",
        [options.id]
      );
    if (!One[0]) {
      throw new Error("Not Transaction Data !");
    }
    return One[0];
  }
  @Query(() => [Transactions])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async gethistorytransaction(
    @Arg("options") options: IDTransactionsTypeInput,
    @Ctx() { em }: MyContext
  ): Promise<Transactions[]> {
    return await em.find(
      Transactions,
      { concerned_id: options.id },
      { orderBy: { createdAt: "DESC" } }
    );
  }

  @Query(() => [Account])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async getaccount(@Ctx() { em }: MyContext): Promise<Account[]> {
    return await em.find(Account, {}, { orderBy: { account_value: "ASC" } });
  }

  @Query(() => Account)
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async getaccountone(
    @Arg("options") options: IDTransactionsTypeInput,
    @Ctx() { em }: MyContext
  ): Promise<Account> {
    return await em.findOneOrFail(Account, {
      account_id: options.id,
    });
  }

  @Mutation(() => Boolean)
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async removeaccountone(
    @Arg("options") options: IDTransactionsTypeInput,
    @Ctx() { em }: MyContext
  ) {
    const Acc = await em.findOneOrFail(Account, {
      account_id: options.id,
    });
    if (!Acc) {
      throw new Error("Not Data !");
    }
    em.nativeDelete(Account, { account_id: options.id });

    return true;
  }

  @Mutation(() => Account)
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async submitaccount(
    @Arg("options") options: AccountOption,
    @Ctx() { em }: MyContext
  ): Promise<Account> {
    const newAccount = em.create(Account, {
      account_id: "id-" + v4(),
      account_value: options.account,
      account_des: options.desc,
    });
    if (!newAccount) {
      throw new Error("Not Data !");
    }
    try {
      await em.persistAndFlush(newAccount);
    } catch (err) {
      return err;
    }
    return newAccount;
  }

  @Mutation(() => Account)
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async submitupdateaccount(
    @Arg("options") options: UpdtateAccountOption,
    @Ctx() { em }: MyContext
  ): Promise<Account> {
    const Acn = await em.findOneOrFail(Account, {
      account_id: options.id,
    });
    if (!Acn) {
      throw new Error("Not Data !");
    }
    Acn.account_value = options.account;
    Acn.account_des = options.desc;

    try {
      await em.persistAndFlush(Acn);
    } catch (err) {
      return err;
    }
    return Acn;
  }

  @Query(() => [SubAccount])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async subaccountwhereaccount(
    @Arg("options") options: IDTransactionsTypeInput,
    @Ctx() { em }: MyContext
  ): Promise<SubAccount[]> {
    return await em.find(
      SubAccount,
      { id_account: options.id },
      { orderBy: { sub_account_value: "ASC" } }
    );
  }

  @Query(() => [ResSubAccount])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async subaccountaccountall(
    @Ctx() { em }: MyContext
  ): Promise<ResSubAccount[]> {
    return await em
      .getConnection()
      .execute(
        "SELECT * FROM sub_account sa LEFT JOIN account at ON sa.id_account = at.account_id ORDER BY sa.sub_account_value ASC"
      );
  }

  @Query(() => [GroupAccount])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async groupaccountwhereaccount(
    @Arg("options") options: IDTransactionsTypeInput,
    @Ctx() { em }: MyContext
  ): Promise<GroupAccount[]> {
    return await em.find(
      GroupAccount,
      { id_sub_account: options.id },
      { orderBy: { group_account_value: "ASC" } }
    );
  }

  @Query(() => SumMoneyMovement, { nullable: true })
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async moneymovementsum(
    @Arg("options") options: MoneyOption,
    @Ctx() { em }: MyContext
  ): Promise<SumMoneyMovement | null> {
    if (options.from && options.to) {
      const Blance = await em
        .getConnection()
        .execute(
          "SELECT SUM(amount-return_amount) FROM money_movement WHERE account = ?  AND updated_at >= ? AND updated_at <= ? AND posted = ?",
          [options.id, options.from, options.to, true]
        );
      const Debit = await em
        .getConnection()
        .execute(
          "SELECT SUM(amount-return_amount) FROM money_movement WHERE account = ? AND money_movement_type = ? AND updated_at >= ? AND updated_at <= ? AND posted = ?",
          [options.id, "Debit", options.from, options.to, true]
        );
      const Kredit = await em
        .getConnection()
        .execute(
          "SELECT SUM(amount-return_amount) FROM money_movement WHERE  account = ? AND money_movement_type = ? AND updated_at >= ? AND updated_at <= ? AND posted = ?",
          [options.id, "Kredit", options.from, options.to, true]
        );
      return {
        blance: Blance[0].sum,
        debit: Debit[0].sum,
        kredit: Kredit[0].sum,
      };
    } else {
      const Blance = await em
        .getConnection()
        .execute(
          "SELECT SUM(amount-return_amount) FROM money_movement WHERE  account = ? AND posted = ?",
          [options.id, true]
        );
      const Debit = await em
        .getConnection()
        .execute(
          "SELECT SUM(amount-return_amount) FROM money_movement WHERE account = ? AND money_movement_type = ? AND posted = ?",
          [options.id, "Debit", true]
        );
      const Kredit = await em
        .getConnection()
        .execute(
          "SELECT SUM(amount-return_amount) FROM money_movement WHERE account = ? AND money_movement_type = ? AND posted = ?",
          [options.id, "Kredit", true]
        );
      return {
        blance: Blance[0].sum,
        debit: Debit[0].sum,
        kredit: Kredit[0].sum,
      };
    }
  }

  @Query(() => SumMoneyMovement, { nullable: true })
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async totalmoneymovementsum(
    @Arg("options") options: DateFromAndTo,
    @Ctx() { em }: MyContext
  ): Promise<SumMoneyMovement | null> {
    if (options.from && options.to) {
      const Blance = await em
        .getConnection()
        .execute(
          "SELECT SUM(amount-return_amount) FROM money_movement WHERE updated_at >= ? AND updated_at <= ? AND posted = ?",
          [options.from, options.to, true]
        );
      const Debit = await em
        .getConnection()
        .execute(
          "SELECT SUM(amount-return_amount) FROM money_movement WHERE money_movement_type = ? AND updated_at >= ? AND updated_at <= ? AND posted = ?",
          ["Debit", options.from, options.to, true]
        );
      const Kredit = await em
        .getConnection()
        .execute(
          "SELECT SUM(amount-return_amount) FROM money_movement WHERE money_movement_type = ? AND updated_at >= ? AND updated_at <= ? AND posted = ?",
          ["Kredit", options.from, options.to, true]
        );
      return {
        blance: Blance[0].sum,
        debit: Debit[0].sum,
        kredit: Kredit[0].sum,
      };
    } else {
      const Blance = await em
        .getConnection()
        .execute(
          "SELECT SUM(amount-return_amount) FROM money_movement WHERE posted = ?",
          [true]
        );
      const Debit = await em
        .getConnection()
        .execute(
          "SELECT SUM(amount-return_amount) FROM money_movement WHERE money_movement_type = ? AND posted = ?",
          ["Debit", true]
        );
      const Kredit = await em
        .getConnection()
        .execute(
          "SELECT SUM(amount-return_amount) FROM money_movement WHERE money_movement_type = ? AND posted = ?",
          ["Kredit", true]
        );
      return {
        blance: Blance[0].sum,
        debit: Debit[0].sum,
        kredit: Kredit[0].sum,
      };
    }
  }

  @Query(() => [ResLedger])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async ledger(
    @Arg("options") options: DateFromAndTo,
    @Ctx() { em }: MyContext
  ): Promise<ResLedger[]> {
    if (options.from && options.to) {
      return await em
        .getConnection()
        .execute(
          "SELECT * FROM money_movement mt JOIN group_account ga ON mt.account = ga.group_account_id WHERE mt.updated_at >= ? AND mt.updated_at <= ? AND mt.posted = ?",
          [options.from, options.to, true]
        );
    } else {
      return await em
        .getConnection()
        .execute(
          "SELECT * FROM money_movement mt JOIN group_account ga ON mt.account = ga.group_account_id WHERE mt.posted =?",
          [true]
        );
    }
  }

  @Query(() => [ResLedger])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async moneymovement(
    @Arg("options") options: DateFromAndTo,
    @Ctx() { em }: MyContext
  ): Promise<ResLedger[]> {
    if (options.from && options.to) {
      return await em
        .getConnection()
        .execute(
          "SELECT mt.money_movement_id,mt.connected,mt.posted,mt.account, mt.ref,mt.proof, mt.amount,mt.return_amount, mt.money_movement_des, mt.money_movement_type, ga.group_account_value, ga.group_account_des,mt.mark, mt.created_at,mt.updated_at FROM money_movement mt JOIN group_account ga ON mt.account = ga.group_account_id WHERE mt.created_at >= ? AND mt.created_at <= ? ORDER BY mt.posted ASC, created_at ASC",
          [options.from, options.to]
        );
    } else {
      return await em
        .getConnection()
        .execute(
          "SELECT mt.money_movement_id,mt.connected,mt.posted,mt.account, mt.ref,mt.proof, mt.amount,mt.return_amount, mt.money_movement_des, mt.money_movement_type, ga.group_account_value, ga.group_account_des,mt.mark, mt.created_at,mt.updated_at FROM money_movement mt JOIN group_account ga ON mt.account = ga.group_account_id ORDER BY mt.posted ASC,created_at ASC"
        );
    }
  }
  @Query(() => ResMoneyMovementOneFinance, { nullable: true })
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async moneymovementone(
    @Arg("options") options: IDTransactionsTypeInput,
    @Ctx() { em }: MyContext
  ): Promise<ResMoneyMovementOneFinance | null> {
    const Money = await em
      .getConnection()
      .execute(
        "SELECT * FROM money_movement mt JOIN group_account ga ON mt.account = ga.group_account_id WHERE money_movement_id = ?",
        [options.id]
      );
    const newstudent = await em
      .getConnection()
      .execute(
        "SELECT * FROM money_movement mt JOIN prospective_students ps ON mt.connected = prospective_students_id  JOIN list_majors lm ON ps.id_major = lm.list_major_id JOIN class_campus cc ON lm.id_class_campus =cc.class_campus_id JOIN school_year sy ON ps.id_school_year = sy.school_year_id JOIN profession pn ON ps.parents_profession = pn.profession_id JOIN district dc ON ps.id_district_or_city = dc.district_or_city_id JOIN province pce ON dc.province_id = pce.province_id JOIN religion re ON ps.id_religion = re.religion_id WHERE ps.prospective_students_id =?",
        [Money[0].connected]
      );
    const student = await em
      .getConnection()
      .execute(
        "SELECT * FROM money_movement mt JOIN college_students ps ON mt.connected = ps.college_student_id JOIN classes_learning lm ON ps.id_class_learning  = lm.class_learning_id  JOIN list_majors cc ON lm.id_major  =cc.list_major_id  JOIN school_year sy ON ps.id_school_year = sy.school_year_id JOIN profession pn ON ps.parents_profession = pn.profession_id JOIN district dc ON ps.id_district_or_city = dc.district_or_city_id JOIN province pce ON dc.province_id = pce.province_id JOIN religion re ON ps.id_religion = re.religion_id WHERE ps.college_student_id =?",
        [Money[0].connected]
      );

    return {
      money_movement: Money[0],
      connected_value: newstudent[0] ? newstudent[0] : student[0],
    };
  }

  @Mutation(() => MoneyMovement, { nullable: true })
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async markmoneymovement(
    @Arg("options") options: MarkMoneyOption,
    @Ctx() { em }: MyContext
  ): Promise<MoneyMovement | null> {
    const MoneyExis = await em.findOne(MoneyMovement, {
      money_movement_id: options.id,
    });
    if (MoneyExis) {
      MoneyExis.mark = options.mark;
    } else {
      throw new Error("Not Data !");
    }
    try {
      await em.persistAndFlush(MoneyExis);
    } catch (error) {
      return error.message;
    }
    return MoneyExis;
  }

  @Mutation(() => MoneyMovement, { nullable: true })
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async postedmoneymovement(
    @Arg("options") options: IDTransactionsTypeInput,
    @Ctx() { em }: MyContext
  ): Promise<MoneyMovement | null> {
    const MoneyExis = await em.findOne(MoneyMovement, {
      money_movement_id: options.id,
    });
    if (MoneyExis) {
      MoneyExis.posted = true;
    } else {
      throw new Error("Not Data !");
    }
    try {
      await em.persistAndFlush(MoneyExis);
    } catch (error) {
      return error.message;
    }
    return MoneyExis;
  }

  @Query(() => [ResLedger])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async moneymovementhistory(
    @Arg("options") options: IDTransactionsTypeInput,
    @Ctx() { em }: MyContext
  ): Promise<ResLedger[]> {
    const MoneyExis = await em.findOne(MoneyMovement, {
      money_movement_id: options.id,
    });
    if (MoneyExis) {
      MoneyExis.posted = true;
    } else {
      throw new Error("Not Data !");
    }
    return await em
      .getConnection()
      .execute(
        "SELECT mt.money_movement_id,mt.connected,mt.posted,mt.account, mt.ref,mt.proof, mt.amount,mt.return_amount, mt.money_movement_des, mt.money_movement_type, ga.group_account_value, ga.group_account_des,mt.mark, mt.created_at,mt.updated_at FROM money_movement mt JOIN group_account ga ON mt.account = ga.group_account_id WHERE mt.connected = ? AND mt.money_movement_id != ? ORDER BY mt.posted ASC",
        [MoneyExis?.connected, options.id]
      );
  }
  @Mutation(() => MoneyMovement, { nullable: true })
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async changereturnamountmoney(
    @Arg("options") options: MarkMoneyOption,
    @Ctx() { em }: MyContext
  ): Promise<MoneyMovement | null> {
    const MoneyExis = await em.findOne(MoneyMovement, {
      money_movement_id: options.id,
    });
    if (MoneyExis) {
      MoneyExis.return_amount = parseInt(options.mark);
    } else {
      throw new Error("Not Data !");
    }
    try {
      await em.persistAndFlush(MoneyExis);
    } catch (error) {
      return error.message;
    }
    return MoneyExis;
  }
}
