import { Migration } from '@mikro-orm/migrations';

export class Migration20210830100635 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "mk" ("mk_id" varchar(80) not null, "id_lesson" varchar(80) not null, "mk_name" varchar(50) not null, "mk_status" varchar(50) not null default \'Disable\', "created_at" timestamptz(0) not null default \'NOW()\', "updated_at" timestamptz(0) not null);');
    this.addSql('alter table "mk" add constraint "mk_pkey" primary key ("mk_id");');
    this.addSql('alter table "mk" add constraint "mk_mk_name_unique" unique ("mk_name");');

    this.addSql('create table "lesson_timetable" ("lesson_timetable_id" varchar(80) not null, "id_lecturer" varchar(80) not null, "id_mk" varchar(80) not null, "lesson_timetable_name" varchar(200) not null, "lesson_timetable_status" varchar(50) not null default \'Disable\', "created_at" timestamptz(0) not null default \'NOW()\', "updated_at" timestamptz(0) not null);');
    this.addSql('alter table "lesson_timetable" add constraint "lesson_timetable_pkey" primary key ("lesson_timetable_id");');

    this.addSql('create table "lecturer" ("lecturer_id" varchar(80) not null, "no_registration" int4 not null, "nidn" int4 null, "full_name" varchar(200) not null, "title" varchar(30) null, "academic_position" varchar(100) not null default \'-\', "id_education_list" varchar(80) not null, "study_program" varchar(100) not null, "id_district_or_city" varchar(80) not null, "id_religion" varchar(80) not null, "place_of_birth" varchar(200) not null, "date_of_birth" timestamptz(0) not null, "gender" text not null default \'Male\', "email" varchar(100) null, "phone_number" varchar(20) null, "address" text not null, "postal_code_number" varchar(10) null, "permanent" bool not null default false, "created_at" timestamptz(0) not null default \'NOW()\', "updated_at" timestamptz(0) not null);');
    this.addSql('alter table "lecturer" add constraint "lecturer_pkey" primary key ("lecturer_id");');
    this.addSql('alter table "lecturer" add constraint "lecturer_no_registration_unique" unique ("no_registration");');

    this.addSql('alter table "classes_learning" drop constraint if exists "classes_learning_created_at_check";');
    this.addSql('alter table "classes_learning" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "classes_learning" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "college_students" drop constraint if exists "college_students_created_at_check";');
    this.addSql('alter table "college_students" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "college_students" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "money_movement" drop constraint if exists "money_movement_return_amount_check";');
    this.addSql('alter table "money_movement" alter column "return_amount" type int4 using ("return_amount"::int4);');
    this.addSql('alter table "money_movement" alter column "return_amount" set default \'0\';');
    this.addSql('alter table "money_movement" drop constraint if exists "money_movement_created_at_check";');
    this.addSql('alter table "money_movement" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "money_movement" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "group_account" drop constraint if exists "group_account_created_at_check";');
    this.addSql('alter table "group_account" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "group_account" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "sub_account" drop constraint if exists "sub_account_created_at_check";');
    this.addSql('alter table "sub_account" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "sub_account" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "account" drop constraint if exists "account_created_at_check";');
    this.addSql('alter table "account" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "account" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "submenu" drop constraint if exists "submenu_created_at_check";');
    this.addSql('alter table "submenu" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "submenu" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "pathurl" drop constraint if exists "pathurl_created_at_check";');
    this.addSql('alter table "pathurl" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "pathurl" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "menu" drop constraint if exists "menu_created_at_check";');
    this.addSql('alter table "menu" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "menu" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "auth_user_tokens" drop constraint if exists "auth_user_tokens_created_at_check";');
    this.addSql('alter table "auth_user_tokens" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "auth_user_tokens" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "user_roles" drop constraint if exists "user_roles_created_at_check";');
    this.addSql('alter table "user_roles" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "user_roles" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "users" drop constraint if exists "users_created_at_check";');
    this.addSql('alter table "users" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "users" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "transactions" drop constraint if exists "transactions_transaction_time_check";');
    this.addSql('alter table "transactions" alter column "transaction_time" type timestamptz(0) using ("transaction_time"::timestamptz(0));');
    this.addSql('alter table "transactions" alter column "transaction_time" set default \'NOW()\';');
    this.addSql('alter table "transactions" drop constraint if exists "transactions_created_at_check";');
    this.addSql('alter table "transactions" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "transactions" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "payments" drop constraint if exists "payments_created_at_check";');
    this.addSql('alter table "payments" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "payments" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "school_year" drop constraint if exists "school_year_created_at_check";');
    this.addSql('alter table "school_year" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "school_year" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "class_campus" drop constraint if exists "class_campus_created_at_check";');
    this.addSql('alter table "class_campus" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "class_campus" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "list_price" drop constraint if exists "list_price_created_at_check";');
    this.addSql('alter table "list_price" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "list_price" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "discounts" drop constraint if exists "discounts_created_at_check";');
    this.addSql('alter table "discounts" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "discounts" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "presenter" drop constraint if exists "presenter_created_at_check";');
    this.addSql('alter table "presenter" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "presenter" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "list_majors" drop constraint if exists "list_majors_created_at_check";');
    this.addSql('alter table "list_majors" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "list_majors" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "wave_registration" drop constraint if exists "wave_registration_created_at_check";');
    this.addSql('alter table "wave_registration" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "wave_registration" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "education_list" drop constraint if exists "education_list_created_at_check";');
    this.addSql('alter table "education_list" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "education_list" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "profession" drop constraint if exists "profession_created_at_check";');
    this.addSql('alter table "profession" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "profession" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "prospective_students" drop constraint if exists "prospective_students_date_come_check";');
    this.addSql('alter table "prospective_students" alter column "date_come" type timestamptz(0) using ("date_come"::timestamptz(0));');
    this.addSql('alter table "prospective_students" alter column "date_come" set default \'NOW()\';');
    this.addSql('alter table "prospective_students" drop constraint if exists "prospective_students_created_at_check";');
    this.addSql('alter table "prospective_students" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "prospective_students" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "source_information" drop constraint if exists "source_information_created_at_check";');
    this.addSql('alter table "source_information" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "source_information" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "religion" drop constraint if exists "religion_created_at_check";');
    this.addSql('alter table "religion" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "religion" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "district" drop constraint if exists "district_created_at_check";');
    this.addSql('alter table "district" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "district" alter column "created_at" set default \'NOW()\';');

    this.addSql('alter table "province" drop constraint if exists "province_created_at_check";');
    this.addSql('alter table "province" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "province" alter column "created_at" set default \'NOW()\';');
  }

}
