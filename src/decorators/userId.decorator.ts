import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { decode } from 'jsonwebtoken';
import { LoginPayload } from "src/auth/dtos/loginPayload.dto";

export const UserId = createParamDecorator(
  (_, ctx: ExecutionContext) => {
    const {authorization} = ctx.switchToHttp().getRequest().headers;
    const loginPayload = decode(authorization) as LoginPayload;
    return loginPayload?.id;
  }
);