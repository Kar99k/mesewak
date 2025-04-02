"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/thread";
import { ThreadList } from "@/components/thread-list";

export const Assistant = () => {
  const runtime = useChatRuntime({
    api: "/api/chat",
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="grid h-dvh grid-cols-[200px_1fr] gap-x-2 px-4 py-4">
        <div className="flex flex-col gap-y-2">
          <div className="text-lg font-bold">Mesewak</div>
          <ThreadList />
        </div>
        <Thread />
      </div>
    </AssistantRuntimeProvider>
  );
};
