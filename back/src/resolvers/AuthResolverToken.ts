import { Arg, Ctx, InputType, Mutation, Field, Resolver } from "type-graphql";

import { MyContext } from "../types";
import { AuthUserTokens } from '../entities/Users';
@InputType()
class AuthTypeInput {
  @Field()
  user_id: string;
  @Field()
  token: string;
}
@Resolver()
export class AuthResolverToken {
  @Mutation(() => AuthUserTokens)
  async reqauthtoken(
    @Arg("options") options: AuthTypeInput,
    @Ctx() { em }: MyContext
  ): Promise<AuthUserTokens> {
    const NewTokenAuth = em.create(AuthUserTokens, {
      user_id: options.user_id,
      token: options.token,
    });
    try {
      await em.persistAndFlush(NewTokenAuth);
    } catch (err) {
      return err;
    }

    return NewTokenAuth;
  }
}
