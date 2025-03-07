import type { Route } from "./+types/home";

import { useQuery } from "@tanstack/react-query";

import { Spinner } from "~/components/ui/spinner";
import { Card } from "~/components/Card";
import { UserList } from "~/components/user/usersList";
import { Button } from "~/components/ui/button";  
import { getUsers } from "~/lib/api/usersApi";
import { PlusIcon } from "lucide-react";
import { EditUserDialog } from "~/components/user/editUserDialog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Demo React app" },
    { name: "description", content: "Demo React app" },
  ];
}

export default function Home() {
  // TODO: refactor to custom hook
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  return (
    <div className=" w-full md:w-1/2 mx-auto">
      <Card>
        <div className="flex flex-col gap-4">
          <div className="border-b border-border pb-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Users</h1>
              <p className="text-sm text-muted-foreground">
                User management system
              </p>
            </div>
            <div>
              <EditUserDialog>
                <Button variant="outline">
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </EditUserDialog>
            </div>
          </div>
          {isLoading && <Spinner className="mx-auto my-4" />}
          {users && <UserList users={users} />}
        </div>
      </Card>
    </div>
  );
}
