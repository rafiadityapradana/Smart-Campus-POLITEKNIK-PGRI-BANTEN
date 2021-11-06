import {
  Resolver,
  Mutation,
  Arg,
  Ctx,
  InputType,
  Field,
  ObjectType,
  Query,
  UseMiddleware,
} from "type-graphql";
import {
  AuthUserTokens,
  submenu,
  pathurl,
  menu,
  Users,
} from "../entities/Users";
import { MyContext } from "../types";
import argon2 from "argon2";

import { CreateAccessToken, CreateRefreshToken } from "../Auth";

import {
  ThisAuthtorizationUsers,
  ApiMiddelware,
} from "../middleware/MeAuthtorization";

@InputType()
class UserInputLogin {
  @Field()
  username: string;
  @Field()
  password: string;
}

@InputType()
class InUserInputId {
  @Field()
  id: string;
}
@InputType()
class UserInputNewUser {
  @Field()
  username: string;
  @Field()
  password: string;
  @Field()
  email: string;
  @Field()
  role_id: string;
}
@ObjectType()
class FieldErrorRes {
  @Field()
  message: string;
}

@ObjectType()
class DataUser {
  @Field()
  user_id: string;
  @Field()
  username: string;
  @Field()
  email: string;
  @Field()
  name: string;
  @Field({ nullable: true })
  user_photo: string;
  @Field()
  user_status: string;
  @Field({ nullable: true })
  role?: string;
}
@ObjectType()
class RestToken {
  @Field({ nullable: true })
  token_id?: string;
  @Field({ nullable: true })
  accessToken?: string;
  @Field({ nullable: true })
  refreshToken?: string;
}

@ObjectType()
class RestAuthSession {
  @Field()
  user: DataUser;
  @Field()
  token: RestToken;
}
@ObjectType()
class UsersRespone {
  @Field(() => FieldErrorRes, { nullable: true })
  errors?: FieldErrorRes;
  @Field({ nullable: true })
  user?: DataUser;
  @Field({ nullable: true })
  token?: RestToken;
}
@ObjectType()
class usersRes {
  @Field()
  user_id: string;
  @Field()
  username: string;
  @Field()
  email: string;
  @Field({ nullable: true })
  user_photo: string;
  @Field()
  user_status: string;
  @Field({ nullable: true })
  role_id?: string;
  @Field({ nullable: true })
  role?: string;
}

@ObjectType()
class menuRespon {
  @Field()
  menu_id: string;
  @Field()
  menu_name: string;
  @Field()
  menu_icon: string;
  @Field()
  menu_type: string;
  @Field({ nullable: true })
  url: string;
}
@InputType()
class InputSubmenu {
  @Field()
  role_id!: string;
  @Field()
  sub_name_menu!: string;
  @Field()
  menu_name!: string;
  @Field()
  url!: string;
}
@ObjectType()
class SubmenuRespon {
  @Field()
  id_menu: string;
  @Field()
  submenu_id: string;
  @Field()
  sub_name_menu: string;
  @Field()
  menu_name: string;
  @Field()
  url: string;
}
@InputType()
class InputMenuSubmit {
  @Field()
  id_path!: string;
  @Field()
  role_id!: string;
  @Field()
  menu_name!: string;
  @Field()
  menu_icon!: string;
  @Field()
  menu_type!: string;
  @Field()
  menu_status!: string;
}
@ObjectType()
class menuListRespon {
  @Field()
  menu_id: string;
  @Field()
  role: string;
  @Field()
  menu_name: string;
  @Field({ nullable: true })
  menu_icon: string;
  @Field({ nullable: true })
  menu_type: string;
  @Field({ nullable: true })
  url: string;
  @Field()
  menu_status: string;
}

@Resolver()
export class UsersResolver {
  @Mutation(() => menu)
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async menusubmit(
    @Arg("options") options: InputMenuSubmit,
    @Ctx() { em }: MyContext
  ): Promise<menu> {
    const NewMenu = em.create(menu, {
      id_path: options.id_path,
      role_id: options.role_id,
      menu_name: options.menu_name,
      menu_icon: options.menu_icon,
      menu_type: options.menu_type,
      menu_status: options.menu_status,
    });
    try {
      await em.persistAndFlush(NewMenu);
    } catch (err) {
      return err;
    }
    return NewMenu;
  }

  @Mutation(() => submenu)
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async submenusubmit(
    @Arg("options") options: InputSubmenu,
    @Ctx() { em }: MyContext
  ): Promise<submenu> {
    const NewSubmenu = em.create(submenu, {
      id_path: options.url,
      id_menu: options.menu_name,
      sub_name_menu: options.sub_name_menu,
    });
    try {
      await em.persistAndFlush(NewSubmenu);
    } catch (err) {
      return err;
    }
    return NewSubmenu;
  }

  @Query(() => [pathurl])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async paths(@Ctx() { em }: MyContext): Promise<pathurl[]> {
    return await em.find(pathurl, {});
  }
  @Query(() => [menuListRespon])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async menulist(
    @Arg("options") options: InUserInputId,
    @Ctx() { em }: MyContext
  ): Promise<menuListRespon[]> {
    const menu = await em
      .getConnection()
      .execute(
        "SELECT * FROM menu mu LEFT JOIN pathurl pt ON mu.id_path= pt.path_url_id JOIN user_roles ur ON mu.role_id = ur.role_id WHERE ur.role_id=?",
        [options.id]
      );
    return menu;
  }
  @Query(() => [SubmenuRespon])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async submenulist(
    @Arg("options") options: InUserInputId,
    @Ctx() { em }: MyContext
  ): Promise<SubmenuRespon[]> {
    const Submenu = await em
      .getConnection()
      .execute(
        "SELECT su.submenu_id, su.id_menu, su.sub_name_menu,mu.menu_name, pt.url FROM submenu as su INNER JOIN menu as mu ON su.id_menu = mu.menu_id INNER JOIN pathurl as pt ON su.id_path = pt.path_url_id INNER JOIN user_roles as ur ON mu.role_id = ur.role_id WHERE ur.role_id=? ORDER BY su.sub_name_menu ASC",
        [options.id]
      );

    return Submenu;
  }

  @Query(() => [menuRespon])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async menus(@Ctx() { spid, em }: MyContext): Promise<menuRespon[]> {
    const ResultUser = await em
      .getConnection()
      .execute(
        "SELECT * FROM users as us INNER JOIN auth_user_tokens as tk ON us.user_id = tk.user_id INNER JOIN user_roles as ur ON us.role_id = ur.role_id WHERE us.user_id=? AND us.user_status=?",
        [spid?.user_id, "Enable"]
      );
    if (!ResultUser[0]) {
      throw new Error("user data not found !");
    }
    const menu = await em
      .getConnection()
      .execute(
        "SELECT * FROM menu as mu LEFT JOIN pathurl as pt ON mu.id_path = pt.path_url_id INNER JOIN user_roles as ur ON mu.role_id = ur.role_id WHERE mu.role_id=? AND mu.menu_status =? AND ur.role_status =?",
        [ResultUser[0]?.role_id, "Enable", "Enable"]
      );
    return menu;
  }

  @Query(() => [SubmenuRespon])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async submenu(
    @Arg("options") options: InUserInputId,
    @Ctx() { spid, em }: MyContext
  ): Promise<SubmenuRespon[]> {
    const ResultUser = await em
      .getConnection()
      .execute(
        "SELECT * FROM users as us INNER JOIN auth_user_tokens as tk ON us.user_id = tk.user_id INNER JOIN user_roles as ur ON us.role_id = ur.role_id WHERE us.user_id=? AND us.user_status=?",
        [spid?.user_id, "Enable"]
      );
    if (!ResultUser[0]) {
      throw new Error("user data not found !");
    }
    const Submenu = await em
      .getConnection()
      .execute(
        "SELECT su.submenu_id, su.id_menu, su.sub_name_menu, pt.url FROM submenu as su INNER JOIN menu as mu ON su.id_menu = mu.menu_id INNER JOIN pathurl as pt ON su.id_path = pt.path_url_id INNER JOIN user_roles as ur ON mu.role_id = ur.role_id WHERE mu.role_id=? AND su.id_menu =?  ORDER BY su.sub_name_menu ASC",
        [ResultUser[0]?.role_id, options.id]
      );

    return Submenu;
  }
  @Query(() => [usersRes])
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async users(@Ctx() { em }: MyContext): Promise<usersRes[]> {
    return await em
      .getConnection()
      .execute(
        "SELECT * FROM users as us INNER JOIN user_roles as ur ON us.role_id = ur.role_id"
      );
  }

  @Query(() => RestAuthSession, { nullable: true })
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async userdataAuth(@Ctx() { spid, em }: MyContext) {
    const ResultUser = await em
      .getConnection()
      .execute(
        "SELECT * FROM users as us INNER JOIN auth_user_tokens as tk ON us.user_id = tk.user_id INNER JOIN user_roles as ur ON us.role_id = ur.role_id WHERE us.user_id=? AND us.user_status=?",
        [spid?.user_id, "Enable"]
      );
    if (!ResultUser[0]) {
      throw new Error("user data not found !");
    }
    return {
      user: ResultUser[0],
      token: {
        token_id: ResultUser[0].token_id,
        accessToken: CreateAccessToken(ResultUser[0]),
        refreshToken: CreateRefreshToken(ResultUser[0]),
      },
    };
  }

  @Mutation(() => UsersRespone, { nullable: true })
  @UseMiddleware(ApiMiddelware)
  async login(
    @Arg("options") options: UserInputLogin,
    @Ctx() { em, req }: MyContext
  ): Promise<UsersRespone> {
    const User = await em
      .getConnection()
      .execute(
        "SELECT * FROM users as us INNER JOIN user_roles as ur ON us.role_id = ur.role_id WHERE us.username=?",
        [options.username]
      );
    if (User[0]) {
      if (User[0].user_status !== "Enable") {
        return {
          errors: {
            message: "Your Account Not Enabled Yet",
          },
        };
      }
      const Vlide = await argon2.verify(User[0].password, options.password);
      if (Vlide) {
        const TokenExisi = await em.findOne(AuthUserTokens, {
          user_id: User[0].user_id,
        });
        if (TokenExisi) {
          TokenExisi.token = CreateRefreshToken(User[0]);
          await em.persistAndFlush(TokenExisi);
        } else {
          const NewToken = em.create(AuthUserTokens, {
            user_id: User[0].user_id,
            token: CreateRefreshToken(User[0]),
          });
          await em.persistAndFlush(NewToken);
        }
        req.session.sid = CreateAccessToken(User[0]);
        req.session.rid = CreateRefreshToken(User[0]);

        return {
          user: User[0],
          token: {
            token_id: User[0].token_id,
            accessToken: CreateAccessToken(User[0]),
            refreshToken: CreateRefreshToken(User[0]),
          },
        };
      } else {
        return {
          errors: {
            message: "Your Password Incorrect !",
          },
        };
      }
    } else {
      return {
        errors: {
          message: "Your Account Incorrect !",
        },
      };
    }
  }
  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err: any) => {
        res.clearCookie("psid");
        if (err) {
          resolve(false);
          return;
        }

        resolve(true);
      })
    );
  }
  @Mutation(() => Users)
  @UseMiddleware(ApiMiddelware)
  @UseMiddleware(ThisAuthtorizationUsers)
  async newuser(
    @Arg("options") options: UserInputNewUser,
    @Ctx() { em }: MyContext
  ): Promise<Users> {
    const HashPassword = await argon2.hash(options.password);
    const NewUser = em.create(Users, {
      name: options.username,
      username: options.username,
      password: HashPassword,
      email: options.email,
      role_id: options.role_id,
    });
    try {
      await em.persistAndFlush(NewUser);
    } catch (err) {
      return err;
    }
    return NewUser;
  }
}
