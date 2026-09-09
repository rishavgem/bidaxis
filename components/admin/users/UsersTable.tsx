import UserRow from "./UserRow";

type User = {
  id: string;
  name: string | null;
  email: string;
  createdAt: string;
};

type Props = {
  users: User[];
};

export default function UsersTable({ users }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow-lg">
      <table className="min-w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="px-6 py-4 text-left font-semibold">
              Name
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Email
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Joined
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
            />
          ))}

        </tbody>

      </table>
    </div>
  );
}