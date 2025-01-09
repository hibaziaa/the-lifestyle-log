"use client";

// import { useRouter } from "next/navigation";
// import { useSyncExternalStore, useTransition } from "react";

// import { disableDraftMode } from "./actions";

// const emptySubscribe = () => () => {};

export default function AlertBanner() {
  // const router = useRouter();
  // const [pending, startTransition] = useTransition();

  // const shouldShow = useSyncExternalStore(
  //   emptySubscribe,
  //   () => window.top === window,
  //   () => false,
  // );

  // if (!shouldShow) return null;

  return (
    <div className="flex items-center justify-center bg-gray-800 text-white py-4">
    <p className="text-center text-lg font-bold tracking-tight">
      Stay tuned for our latest tips on content strategies and lifestyle improvements!
    </p>
  </div>
  
  );
}
