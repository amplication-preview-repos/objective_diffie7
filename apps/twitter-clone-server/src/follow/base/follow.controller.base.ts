/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FollowService } from "../follow.service";
import { FollowCreateInput } from "./FollowCreateInput";
import { Follow } from "./Follow";
import { FollowFindManyArgs } from "./FollowFindManyArgs";
import { FollowWhereUniqueInput } from "./FollowWhereUniqueInput";
import { FollowUpdateInput } from "./FollowUpdateInput";

export class FollowControllerBase {
  constructor(protected readonly service: FollowService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Follow })
  async createFollow(@common.Body() data: FollowCreateInput): Promise<Follow> {
    return await this.service.createFollow({
      data: data,
      select: {
        createdAt: true,
        followee: true,
        follower: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Follow] })
  @ApiNestedQuery(FollowFindManyArgs)
  async follows(@common.Req() request: Request): Promise<Follow[]> {
    const args = plainToClass(FollowFindManyArgs, request.query);
    return this.service.follows({
      ...args,
      select: {
        createdAt: true,
        followee: true,
        follower: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Follow })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async follow(
    @common.Param() params: FollowWhereUniqueInput
  ): Promise<Follow | null> {
    const result = await this.service.follow({
      where: params,
      select: {
        createdAt: true,
        followee: true,
        follower: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Follow })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFollow(
    @common.Param() params: FollowWhereUniqueInput,
    @common.Body() data: FollowUpdateInput
  ): Promise<Follow | null> {
    try {
      return await this.service.updateFollow({
        where: params,
        data: data,
        select: {
          createdAt: true,
          followee: true,
          follower: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Follow })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFollow(
    @common.Param() params: FollowWhereUniqueInput
  ): Promise<Follow | null> {
    try {
      return await this.service.deleteFollow({
        where: params,
        select: {
          createdAt: true,
          followee: true,
          follower: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
