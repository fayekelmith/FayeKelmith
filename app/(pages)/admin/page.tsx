import Stories from "../main-page-components/Stories";
import Updates from "../main-page-components/Updates";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
const Admin = () => {
  return (
    <main className="flex flex-col">
      <h1 className="text-center">Admin Panel</h1>
      <section className="my-8">
        <div className="flex justify-between p-8">
          <h2>Essay Management</h2>
          <Button
            variant="outline"
            className="rounded-full p-0 w-10 h-10 hover:shadow-xl"
          >
            <Link href={`/admin/essay`}>
              <Plus className="w-8 h-8" />
            </Link>
          </Button>
        </div>

        <Updates />
      </section>
      <section className="my-8">
        <div className="flex justify-between p-8">
          <h2>Project Management</h2>
          <Button
            variant="outline"
            className="rounded-full p-0 w-10 h-10 hover:shadow-xl"
          >
            <Link href={`/admin/project`}>
              <Plus className="h-8 w-8" />
            </Link>
          </Button>
        </div>

        <Updates />
      </section>
      <section className="my-8">
        <div className="flex justify-between p-8">
          <h2>Story Management</h2>
          <Button
            variant="outline"
            className="rounded-full w-10 h-10 p-0 hover:shadow-xl"
          >
            <Link href={`/admin/story`}>
              <Plus className="h-8 w-8" />
            </Link>
          </Button>
        </div>
        <Stories />
      </section>
    </main>
  );
};

export default Admin;
