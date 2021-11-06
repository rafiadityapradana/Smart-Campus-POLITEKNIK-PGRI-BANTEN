import { Entity, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import { v4 } from "uuid";

export const enum UsersStatus {
  NotAktif = "Disable",
  Aktif = "Enable",
}
export const enum MenuType {
  Submenu = "Submenu",
  DefaultMenu = "-",
}
@ObjectType()
@Entity()
export class Users {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  user_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80 })
  @Unique()
  username!: string;

  @Field(() => String)
  @Property({ length: 80 })
  @Unique()
  email!: string;

  @Field(() => String)
  @Property()
  password!: string;

  @Field(() => String)
  @Property({ default: "NULL", nullable: true })
  name!: string;

  @Field(() => String)
  @Property({ default: "NULL" })
  photo!: string;

  @Field(() => String)
  @Property({ default: "Disable", length: 80 })
  user_status!: UsersStatus;

  @Field(() => String)
  @Property({ length: 80 })
  role_id!: string;

  @Field(() => String)
  @Property({ length: 80, default: "-" })
  id_lecturer!: string;

  @Field(() => String)
  @Property({ length: 80, default: "-" })
  id_student!: string;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class UserRoles {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  role_id: string = "id-" + v4();

  @Field(() => String)
  @Unique()
  @Property({ length: 80 })
  role!: string;

  @Field(() => String)
  @Property({ default: "Enable", length: 80 })
  role_status!: string;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class AuthUserTokens {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  token_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80 })
  @Unique()
  user_id!: string;

  @Field(() => String)
  @Property({ type: "text" })
  token!: string;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}
@ObjectType()
@Entity()
export class menu {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  menu_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80 })
  id_path!: string;

  @Field(() => String)
  @Property({ length: 80 })
  role_id!: string;

  @Field(() => String)
  @Property({ length: 80 })
  menu_name!: string;

  @Field(() => String)
  @Property({ length: 80 })
  menu_icon!: string;

  @Field(() => String)
  @Property({ default: "Enable", length: 80 })
  menu_status!: UsersStatus;

  @Field(() => String)
  @Property({ default: "-", length: 80 })
  menu_type!: MenuType;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

@ObjectType()
@Entity()
export class pathurl {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  path_url_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80 })
  @Unique()
  url!: string;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}
@ObjectType()
@Entity()
export class submenu {
  @Field(() => String)
  @PrimaryKey({ length: 80 })
  submenu_id: string = "id-" + v4();

  @Field(() => String)
  @Property({ length: 80 })
  id_menu!: string;

  @Field(() => String)
  @Property({ length: 80 })
  id_path!: string;

  @Field(() => String)
  @Property({ length: 80 })
  sub_name_menu!: string;

  @Field(() => Date)
  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}

// @Property({length:})
// @Unique()
// type
// npx mikro-orm migration:create
//id-e2010751-a434-4b5c-9d6e-8d676d9e9a4f
