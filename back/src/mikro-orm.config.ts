import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { submenu } from "./entities/Users";
import {
  CollegeStudents,
  ClassesLearning,
  Lecturer,
  LessonTimetable,
  Mk,
} from "./entities/EntitiesData";

import {
  District,
  Province,
  Religion,
  SourceInformation,
  ProspectiveStudents,
  Profession,
  EducationList,
  WaveRegistration,
  ListMajors,
  presenter,
  Discounts,
  ListPrice,
  ClassCampus,
  SchoolYear,
  Payments,
  Transactions,
  Account,
  SubAccount,
  GroupAccount,
  MoneyMovement,
} from "./entities/EntitiesData";
import {
  Users,
  UserRoles,
  AuthUserTokens,
  menu,
  pathurl,
} from "./entities/Users";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [
    Province,
    District,
    Religion,
    SourceInformation,
    ProspectiveStudents,
    Profession,
    EducationList,
    WaveRegistration,
    ListMajors,
    presenter,
    Discounts,
    ListPrice,
    ClassCampus,
    SchoolYear,
    Payments,
    Transactions,
    Users,
    UserRoles,
    AuthUserTokens,
    menu,
    pathurl,
    submenu,
    Account,
    SubAccount,
    GroupAccount,
    MoneyMovement,
    CollegeStudents,
    ClassesLearning,
    Lecturer,
    LessonTimetable,
    Mk,
  ],
  dbName: "app_db",
  password: "root",
  type: "postgresql",

  debug: true,
} as Parameters<typeof MikroORM.init>[0];
//npx mikro-orm migration:create
