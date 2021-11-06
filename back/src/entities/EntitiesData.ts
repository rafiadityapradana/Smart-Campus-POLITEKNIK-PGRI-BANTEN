import { Entity, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import { v4 } from "uuid";
export const enum StatusEnableAndDisable {
  NotAktif = "Disable",
  Aktif = "Enable",
}

export const enum EnumGender {
  Male = "Male",
  Female = "Female",
}
export const enum EnumYesNo {
  Yes = "Yes",
  No = "NO",
}

export const enum EnumSchoolYear {
  NotAktif = "Disable",
  Aktif = "Enable",
  Walk = "Walk",
  Done = "Done",
}
export const enum EnumRegistrationDownPaymentInstallmentEtc {
  Registration = "Registration",
  DownPayment = "Down Payment",
  Installment = "Installment",
  Etc = "Etc",
}

export const enum EnumPendingSttlementExpired {
  pending = "pending",
  settlement = "settlement",
  expired = "expired",
}

export const enum MoneyMovementType {
  Kredit = "Kredit",
  Debit = "Debit",
}

@ObjectType()
@Entity()
export class Province {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  province_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80 })
  @Unique()
  province_name!: string;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class District {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  district_or_city_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80 })
  province_id!: string;

  @Field(() => String)
  @Property({ length: 100 })
  @Unique()
  district_or_city_name!: string;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class Religion {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  religion_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80 })
  @Unique()
  religion_name!: string;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class SourceInformation {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  source_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80 })
  @Unique()
  source_information_name!: string;

  @Field(() => String)
  @Property({ type: "enum", default: "Disable" })
  source_status!: StatusEnableAndDisable;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class EducationList {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  education_list_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 30 })
  education!: string;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class WaveRegistration {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  wave_registration_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 30 })
  wave!: string;

  @Field(() => String)
  @Property({ type: "text" })
  wave_desc!: string;

  @Field(() => String)
  @Property({ type: "enum", default: "Disable" })
  wave_status!: StatusEnableAndDisable;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class ListMajors {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  list_major_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80 })
  id_class_campus!: string;

  @Field(() => String)
  @Property({ length: 6 })
  major_code!: string;

  @Field(() => String)
  @Property({ length: 80 })
  major!: string;

  @Field(() => String)
  @Property({ length: 200, default: "-" })
  major_image!: string;

  @Field(() => String)
  @Property({ type: "text", default: "-" })
  major_desc!: string;

  @Field(() => String)
  @Property({ type: "enum", default: "Disable" })
  list_major_status!: StatusEnableAndDisable;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class presenter {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  presenter_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 150 })
  presenter_name!: string;

  @Field(() => String)
  @Property({ length: 250 })
  presenter_photo!: string;

  @Field(() => String)
  @Property({ type: "enum", default: "Disable" })
  status_presenter!: StatusEnableAndDisable;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class Discounts {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  discounts_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80 })
  id_wave!: string;

  @Field(() => String)
  @Property({ length: 80 })
  id_major!: string;

  @Field(() => String)
  @Property({ length: 2 })
  discount_value!: number;

  @Field(() => String)
  @Property({ type: "enum", default: "Disable" })
  discount_status!: StatusEnableAndDisable;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class ListPrice {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  list_price_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80 })
  id_major!: string;

  @Field(() => String)
  @Property({ length: 150 })
  list_price_desc!: string;

  @Field(() => String)
  @Property({ length: 150 })
  list_price_value!: number;

  @Field(() => String)
  @Property({ type: "enum", default: "Disable" })
  list_price_status!: StatusEnableAndDisable;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class ClassCampus {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  class_campus_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80 })
  class_campus_name!: string;

  @Field(() => String)
  @Property({ type: "enum", default: "Disable" })
  class_campus_status!: StatusEnableAndDisable;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class Profession {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  profession_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 100 })
  profession!: string;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class SchoolYear {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  school_year_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80 })
  school_year_value!: string;

  @Field(() => String)
  @Property({ type: "enum", default: "Disable" })
  status_school_year!: EnumSchoolYear;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class ProspectiveStudents {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  prospective_students_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 60 })
  @Unique()
  reg_code!: string;

  @Field(() => String)
  @Property({ length: 200 })
  full_name!: string;

  @Field(() => String)
  @Property({ length: 200 })
  place_of_birth!: string;

  @Field(() => Date)
  @Property({ type: "date" })
  date_of_birth!: string;

  @Field(() => String)
  @Property({ type: "enum", default: "Male" })
  gender!: EnumGender;

  @Field(() => String)
  @Property({ length: 150, nullable: true })
  email!: string;

  @Field(() => String)
  @Property({ length: 20 })
  phone_number!: string;

  @Field(() => String)
  @Property({ length: 200 })
  school_origin!: string;

  @Field(() => String)
  @Property({ type: "text" })
  address!: string;

  @Field(() => String)
  @Property({ length: 10, nullable: true })
  postal_code_number!: string;

  @Field(() => String)
  @Property({ length: 200 })
  parents_name!: string;

  @Field(() => String)
  @Property({ length: 20, nullable: true })
  house_phone_number!: string;

  @Field(() => String)
  @Property({ length: 6, nullable: true })
  graduation_year!: string;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  date_come = new Date();

  @Field(() => String)
  @Property({ length: 200, default: 0 })
  total_investment!: string;

  @Field(() => String)
  @Property({ type: "enum", default: "No" })
  registration_status!: EnumYesNo;

  @Field(() => Date)
  @Property({ type: "date", nullable: true })
  date_registration: string;

  @Field(() => String)
  @Property({ type: "enum", default: "No" })
  dp_status!: EnumYesNo;

  @Field(() => Date)
  @Property({ type: "date", nullable: true })
  date_dp: string;

  @Field(() => String)
  @Property({ length: 200, default: 0 })
  amount_dp!: string;

  @Field(() => String)
  @Property({ length: 80 })
  id_school_year!: string;

  @Field(() => String)
  @Property({ length: 80 })
  parents_profession!: string;

  @Field(() => String)
  @Property({ length: 80 })
  id_education_list!: string;

  @Field(() => String)
  @Property({ length: 80 })
  id_district_or_city!: string;

  @Field(() => String)
  @Property({ length: 80 })
  id_religion!: string;

  @Field(() => String)
  @Property({ length: 80 })
  id_source_info!: string;

  @Field(() => String)
  @Property({ length: 80 })
  id_wave_register!: string;

  @Field(() => String)
  @Property({ length: 80 })
  id_major!: string;

  @Field(() => String)
  @Property({ length: 80, nullable: true })
  id_presenter!: string;

  @Field(() => String)
  @Property({ length: 80, default: "-" })
  further_process!: string;

  @Field(() => String)
  @Property({ length: 80, nullable: true })
  date_finis_further_process!: string;

  @Field(() => String)
  @Property({ type: "text", nullable: true })
  note!: string;

  @Field(() => String)
  @Property({ length: 10, default: "No" })
  mark: string;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class CollegeStudents {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  college_student_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 60 })
  @Unique()
  nim!: number;

  @Field(() => String)
  @Property({ length: 200 })
  full_name!: string;

  @Field(() => String)
  @Property({ length: 200 })
  place_of_birth!: string;

  @Field(() => Date)
  @Property({ type: "date" })
  date_of_birth!: string;

  @Field(() => String)
  @Property({ type: "enum", default: "Male" })
  gender!: EnumGender;

  @Field(() => String)
  @Property({ length: 150, nullable: true })
  email!: string;

  @Field(() => String)
  @Property({ length: 20 })
  phone_number!: string;

  @Field(() => String)
  @Property({ length: 80 })
  id_education_list!: string;

  @Field(() => String)
  @Property({ length: 200 })
  school_origin!: string;

  @Field(() => String)
  @Property({ type: "text" })
  address!: string;

  @Field(() => String)
  @Property({ length: 10, nullable: true })
  postal_code_number!: string;

  @Field(() => String)
  @Property({ length: 200 })
  parents_name!: string;

  @Field(() => String)
  @Property({ length: 20, nullable: true })
  house_phone_number!: string;

  @Field(() => String)
  @Property({ length: 200, default: 0 })
  total_investment!: string;

  @Field(() => String)
  @Property({ length: 80 })
  id_school_year!: string;

  @Field(() => String)
  @Property({ length: 80 })
  parents_profession!: string;

  @Field(() => String)
  @Property({ length: 80 })
  id_district_or_city!: string;

  @Field(() => String)
  @Property({ length: 80 })
  id_religion!: string;

  @Field(() => String)
  @Property({ length: 80 })
  id_class_learning!: string;

  @Field(() => String)
  @Property({ type: "text", nullable: true })
  note!: string;

  @Field(() => String)
  @Property({ length: 10, default: "No" })
  mark: string;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class Payments {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  payment_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 50 })
  payment_type!: string;

  @Field(() => String)
  @Property({ length: 50 })
  destination_pay!: string;

  @Field(() => String)
  @Property({ length: 50 })
  @Unique()
  destination_name!: string;

  @Field(() => String)
  @Property({ length: 200 })
  destination_image!: string;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class Account {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  account_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 50 })
  @Unique()
  account_value!: string;

  @Field(() => String)
  @Property({ length: 50 })
  account_des!: string;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class SubAccount {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  sub_account_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 50 })
  id_account!: string;

  @Field(() => String)
  @Property({ length: 50 })
  @Unique()
  sub_account_value!: string;

  @Field(() => String)
  @Property({ length: 50 })
  sub_account_des!: string;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class GroupAccount {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  group_account_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 50 })
  id_sub_account!: string;

  @Field(() => String)
  @Property({ length: 50 })
  @Unique()
  group_account_value!: string;

  @Field(() => String)
  @Property({ length: 50 })
  group_account_des!: string;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class MoneyMovement {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  money_movement_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80, nullable: true })
  connected!: string;

  @Field(() => String)
  @Property({ length: 80, default: false })
  posted!: boolean;

  @Field(() => String)
  @Property({ length: 80 })
  account!: string;

  @Field(() => String)
  @Property({ length: 30, nullable: true })
  ref!: string;

  @Field(() => String)
  @Property({ length: 80 })
  @Unique()
  proof!: string;

  @Field(() => String)
  @Property({ length: 200 })
  amount!: number;

  @Field(() => String)
  @Property({ length: 200, default: "0" })
  return_amount!: number;

  @Field(() => String)
  @Property({ type: "text" })
  money_movement_des!: string;

  @Field(() => String)
  @Property({ length: 10 })
  money_movement_type!: MoneyMovementType;

  @Field(() => String)
  @Property({ length: 30, default: "Etc" })
  movement_to_type!: EnumRegistrationDownPaymentInstallmentEtc;

  @Field(() => String)
  @Property({ length: 30, default: "No" })
  mark!: string;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class Transactions {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  transaction_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80 })
  id_payment!: string;

  @Field(() => String)
  @Property({ length: 80 })
  concerned_id!: string;

  @Field(() => String)
  @Property({ length: 80 })
  merchant_id!: string;

  @Field(() => String)
  @Property({ length: 100 })
  gross_amount!: string;

  @Field(() => String)
  @Property({ length: 100 })
  amount!: string;

  @Field(() => String)
  @Property({ length: 100 })
  @Unique()
  va_number!: string;

  @Field(() => String)
  @Property({ length: 30 })
  currency!: string;

  @Field(() => String)
  @Property({ length: 5 })
  status_code!: string;

  @Field(() => String)
  @Property({ length: 30 })
  fraund_status!: string;

  @Field(() => String)
  @Property({ type: "enum" })
  transaction_status!: string;

  @Field(() => String)
  @Property({ type: "enum" })
  transaction_type!: EnumPendingSttlementExpired;

  @Field(() => String)
  @Property({ type: "text", default: "Etc" })
  status_message!: EnumRegistrationDownPaymentInstallmentEtc;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  transaction_time = new Date();

  @Field(() => Date)
  @Property({ type: "date" })
  transaction_expired = new Date();

  @Field(() => String)
  @Property({ type: "text" })
  signature_key!: string;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class ClassesLearning {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  class_learning_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80 })
  id_major!: string;

  @Field(() => String)
  @Property({ length: 50 })
  @Unique()
  class_name!: string;

  @Field(() => String)
  @Property({ length: 50, default: "Disable" })
  class_status!: StatusEnableAndDisable;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class Mk {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  mk_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80 })
  id_lesson!: string;

  @Field(() => String)
  @Property({ length: 50 })
  @Unique()
  mk_name!: string;

  @Field(() => String)
  @Property({ length: 50, default: "Disable" })
  mk_status!: StatusEnableAndDisable;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class LessonTimetable {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  lesson_timetable_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80 })
  id_lecturer!: string;

  @Field(() => String)
  @Property({ length: 80 })
  id_mk!: string;

  @Field(() => String)
  @Property({ length: 200 })
  lesson_timetable_name!: string;

  @Field(() => String)
  @Property({ length: 50, default: "Disable" })
  lesson_timetable_status!: StatusEnableAndDisable;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class Lecturer {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  lecturer_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80 })
  @Unique()
  no_registration!: number;

  @Field(() => String)
  @Property({ length: 80, nullable: true })
  nidn!: number;

  @Field(() => String)
  @Property({ length: 200 })
  full_name!: string;

  @Field(() => String)
  @Property({ length: 30, nullable: true })
  title!: string;

  @Field(() => String)
  @Property({ length: 100, default: "-" })
  academic_position!: string;

  @Field(() => String)
  @Property({ length: 80 })
  id_education_list!: string;

  @Field(() => String)
  @Property({ length: 100 })
  study_program!: string;

  @Field(() => String)
  @Property({ length: 80 })
  id_district_or_city!: string;

  @Field(() => String)
  @Property({ length: 80 })
  id_religion!: string;

  @Field(() => String)
  @Property({ length: 200 })
  place_of_birth!: string;

  @Field(() => Date)
  @Property({ type: "date" })
  date_of_birth!: string;

  @Field(() => String)
  @Property({ type: "enum", default: "Male" })
  gender!: EnumGender;

  @Field(() => String)
  @Property({ length: 100, nullable: true })
  email!: string;

  @Field(() => String)
  @Property({ length: 20, nullable: true })
  phone_number!: string;

  @Field(() => String)
  @Property({ type: "text" })
  address!: string;

  @Field(() => String)
  @Property({ length: 10, nullable: true })
  postal_code_number!: string;

  @Field(() => String)
  @Property({ length: 80, default: false })
  permanent!: boolean;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

// @Unique()
//npx mikro-orm migration:create
