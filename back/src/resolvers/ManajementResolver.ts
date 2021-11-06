import {
  Resolver,
  UseMiddleware,
  Ctx,
  Field,
  Query,
  Mutation,
} from "type-graphql";
import {
  ThisAuthtorizationUsers,
  ApiMiddelware,
} from "../middleware/MeAuthtorization";
import { MyContext } from "../types";

import { InputType, Arg, ObjectType } from "type-graphql";
import { UserRoles } from "../entities/Users";
import { ProspectiveStudents } from "../entities/EntitiesData";

// ------------------------------------- //
// ======== ManajementResolver  ======== //
// ------------------------------------- //
@InputType()
class InputProspectiveStudentsProses {
  @Field()
  id: string;
  @Field()
  further_process: string;
}
@InputType()
class InputID {
  @Field()
  id: string;
}
@InputType()
class InputNote {
  @Field()
  id: string;
  @Field({ nullable: true })
  note: string;
}
@InputType()
class InputIMark {
  @Field()
  id!: string;
  @Field()
  mark!: string;
}
@ObjectType()
class ProspectiveStudentsRespon {
  @Field()
  prospective_students_id?: string;
  @Field({ nullable: true })
  reg_code?: string;
  @Field()
  full_name?: string;
  @Field()
  place_of_birth?: string;
  @Field(() => Date)
  date_of_birth?: string;
  @Field()
  gender?: string;
  @Field({ nullable: true })
  email?: string;
  @Field()
  phone_number?: string;
  @Field()
  school_origin?: string;
  @Field()
  address?: string;
  @Field({ nullable: true })
  postal_code_number?: string;
  @Field()
  parents_name?: string;
  @Field()
  house_phone_number?: string;
  @Field()
  graduation_year?: string;
  @Field(() => Date)
  date_come?: string;
  @Field({ nullable: true })
  total_investment?: string;
  @Field()
  registration_status?: string;
  @Field(() => Date, { nullable: true })
  date_registration?: string;
  @Field()
  dp_status?: string;
  @Field(() => Date, { nullable: true })
  date_dp?: string;
  @Field()
  amount_dp?: string;
  @Field()
  school_year_value?: string;
  @Field()
  profession?: string;
  @Field()
  education?: string;
  @Field()
  province_name?: string;
  @Field()
  district_or_city_name?: string;
  @Field()
  religion_name?: string;
  @Field()
  source_information_name?: string;
  @Field()
  wave?: string;
  @Field()
  wave_desc?: string;
  @Field()
  class_campus_name?: string;
  @Field()
  major_code?: string;
  @Field()
  major?: string;
  @Field({ nullable: true })
  presenter_name?: string;
  @Field()
  further_process?: string;
  @Field({ nullable: true })
  date_finis_further_process?: string;
  @Field({ nullable: true })
  note?: string;
  @Field()
  mark?: string;
}

@Resolver()
export class ManajementResolver {
  @Query(() => [ProspectiveStudents])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async ProspectiveStudentsProsessWaiting(
    @Ctx() { em }: MyContext
  ): Promise<ProspectiveStudents[]> {
    return await em.find(ProspectiveStudents, {
      further_process: "-",
    });
  }
  @Query(() => [ProspectiveStudents])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async ProspectiveStudentsProsessWrite(
    @Ctx() { em }: MyContext
  ): Promise<ProspectiveStudents[]> {
    return await em.find(ProspectiveStudents, {
      further_process: "Writing Test",
    });
  }
  @Query(() => [ProspectiveStudents])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async ProspectiveStudentsProsessInterview(
    @Ctx() { em }: MyContext
  ): Promise<ProspectiveStudents[]> {
    return await em.find(ProspectiveStudents, {
      further_process: "Interview",
    });
  }
  @Query(() => [ProspectiveStudents])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async ProspectiveStudentsProsessUniform(
    @Ctx() { em }: MyContext
  ): Promise<ProspectiveStudents[]> {
    return await em.find(ProspectiveStudents, {
      further_process: "Uniform",
    });
  }
  @Query(() => [ProspectiveStudents])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async ProspectiveStudentsProsessDone(
    @Ctx() { em }: MyContext
  ): Promise<ProspectiveStudents[]> {
    return await em.find(ProspectiveStudents, {
      further_process: "Done",
    });
  }
  @Mutation(() => Boolean)
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async ProspectiveStudentsProsessDrakAndDrop(
    @Arg("options") options: InputProspectiveStudentsProses,
    @Ctx() { em }: MyContext
  ) {
    const Student = await em.findOne(ProspectiveStudents, {
      prospective_students_id: options.id,
    });
    if (!Student) {
      throw new Error("Not Student Data !");
    }
    const DrakAndDrop = await em
      .getConnection()
      .execute(
        `UPDATE prospective_students SET further_process='${options.further_process}' WHERE prospective_students_id='${options.id}'`
      );
    if (!DrakAndDrop) {
      return false;
    }
    return true;
  }

  @Query(() => [UserRoles])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async roles(@Ctx() { em }: MyContext): Promise<UserRoles[]> {
    return await em.find(UserRoles, {}, { orderBy: { role: "ASC" } });
  }

  @Mutation(() => UserRoles, { nullable: true })
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async RoleCgangeStatus(
    @Arg("options") options: InputID,
    @Ctx() { em }: MyContext
  ): Promise<UserRoles | null> {
    const Roles = await em.findOne(UserRoles, {
      role_id: options.id,
    });
    if (!Roles) {
      return null;
    }
    try {
      (Roles.role_status =
        Roles.role_status === "Disable" ? "Enable" : "Disable"),
        await em.persistAndFlush(Roles);
    } catch (error) {
      return error.message;
    }

    return Roles;
  }

  @Query(() => [ProspectiveStudentsRespon])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async prospectivestudents(
    @Ctx() { em }: MyContext
  ): Promise<ProspectiveStudentsRespon[]> {
    const DataProspectiveStudents = await em
      .getConnection()
      .execute(
        "SELECT * FROM prospective_students ps JOIN wave_registration wr ON ps.id_wave_register = wr.wave_registration_id JOIN list_majors lm ON ps.id_major = lm.list_major_id JOIN class_campus cc ON lm.id_class_campus =cc.class_campus_id JOIN school_year sy ON ps.id_school_year = sy.school_year_id JOIN profession pn ON ps.parents_profession = pn.profession_id JOIN education_list el ON ps.id_education_list = el.education_list_id JOIN district dc ON ps.id_district_or_city = dc.district_or_city_id JOIN province pce ON dc.province_id = pce.province_id JOIN religion re ON ps.id_religion = re.religion_id JOIN source_information si ON ps.id_source_info = si.source_id "
      );
    return DataProspectiveStudents;
  }

  @Query(() => ProspectiveStudentsRespon, { nullable: true })
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async prospectivestudentsone(
    @Arg("options") options: InputID,
    @Ctx() { em }: MyContext
  ): Promise<ProspectiveStudentsRespon | null> {
    const DataProspectiveStudents = await em
      .getConnection()
      .execute(
        "SELECT * FROM prospective_students ps JOIN wave_registration wr ON ps.id_wave_register = wr.wave_registration_id JOIN list_majors lm ON ps.id_major = lm.list_major_id JOIN class_campus cc ON lm.id_class_campus = cc.class_campus_id JOIN school_year sy ON ps.id_school_year = sy.school_year_id JOIN profession pn ON ps.parents_profession = pn.profession_id JOIN education_list el ON ps.id_education_list = el.education_list_id JOIN district dc ON ps.id_district_or_city = dc.district_or_city_id JOIN province pce ON dc.province_id = pce.province_id JOIN religion re ON ps.id_religion = re.religion_id JOIN source_information si ON ps.id_source_info = si.source_id WHERE prospective_students_id =? ",
        [options.id]
      );
    if (!DataProspectiveStudents) {
      throw new Error("Not Student Data !");
    }
    return DataProspectiveStudents[0];
  }
  @Mutation(() => Boolean)
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async noteprospectivestudents(
    @Arg("options") options: InputNote,
    @Ctx() { em }: MyContext
  ) {
    const Student = await em.findOne(ProspectiveStudents, {
      prospective_students_id: options.id,
    });
    if (!Student) {
      throw new Error("Not Student Data !");
    }
    const Note = await em
      .getConnection()
      .execute(
        `UPDATE prospective_students SET note='${options.note}' WHERE prospective_students_id='${options.id}'`
      );
    if (!Note) {
      return false;
    }
    return true;
  }
  @Mutation(() => Boolean)
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async markprospectivestudents(
    @Arg("options") options: InputIMark,
    @Ctx() { em }: MyContext
  ) {
    const Student = await em.findOne(ProspectiveStudents, {
      prospective_students_id: options.id,
    });
    if (!Student) {
      throw new Error("Not Student Data !");
    }
    const Mark = await em
      .getConnection()
      .execute(
        `UPDATE prospective_students SET mark='${options.mark}' WHERE prospective_students_id='${options.id}'`
      );
    if (!Mark) {
      return false;
    }
    return true;
  }
}
