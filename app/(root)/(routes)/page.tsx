"use client";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

export default function MainPage() {
  const isOpen = useStoreModal((state) => state.isOpen);
  const onOpen = useStoreModal((state) => state.onOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return <div>Main Page</div>;
}
