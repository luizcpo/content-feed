import type { PostsResponse } from "~/app/types/post";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const baseUrl =
  "https://stoplight.io/mocks/engine/fullstack-spec/52502230/content";
const requestHeaders: HeadersInit = new Headers();
requestHeaders.set("Content-Type", "application/json");
requestHeaders.set("Prefer", "code=200, dynamic=true");

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(async (): Promise<PostsResponse> => {
    const response = await fetch(`${baseUrl}`, {
      method: "GET",
      headers: requestHeaders,
    });
    return response.json() as Promise<PostsResponse>;
  }),
});
