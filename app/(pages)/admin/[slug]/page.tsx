"use client";
import { useRouter } from "next/navigation";
import { ArrowLeftCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
const UpdateEdit = () => {
  const router = useRouter();
  return (
    <main>
      <Button
        variant="outline"
        onClick={() => router.push("/admin")}
        className="rounded-full p-0 w-10 h-10 hover:shadow-xl"
      >
        <ArrowLeftCircleIcon className="w-8 h-8" />
      </Button>
      <h1>Create New | Update here</h1>
    </main>
  );
};

export default UpdateEdit;
