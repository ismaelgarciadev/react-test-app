import type { User } from "types";

import { Button } from "~/components/ui/button";
import { PencilIcon } from "lucide-react";
import { EditUserDialog } from "./editUserDialog";
export function UserList({ users }: { users: User[] }) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {users?.map((user) => (
        <li key={user.id} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="size-12 flex-none rounded-full bg-gray-50"></div>
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">
                {user.name}
              </p>
              <p className="mt-1 truncate text-xs/5 text-gray-500">
                {user.email}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <p className="text-sm text-gray-500">
              {user.isActive ? "Active" : "Inactive"}
            </p>
            <EditUserDialog user={user}>
              <Button variant="outline">
                <PencilIcon className="h-4 w-4" />
              </Button>
            </EditUserDialog>
          </div>
        </li>
      ))}
    </ul>
  );
}
