import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import Client from "./client";
import { Suspense } from "react";

const Page = async () => {
  prefetch(trpc.getUsers.queryOptions());

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <HydrateClient>
        <Suspense fallback={<div>Loading...</div>}>
          <Client />
        </Suspense>
      </HydrateClient>
    </div>
  );
};

export default Page;
