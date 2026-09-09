type User = {
  id: string;
  name: string | null;
  email: string;
  createdAt: string;
};

type Props = {
  user: User;
};

export default function UserRow({ user }: Props) {
  return (
    <tr className="border-b hover:bg-slate-50">

      <td className="px-6 py-4">
        {user.name || "No Name"}
      </td>

      <td className="px-6 py-4">
        {user.email}
      </td>

      <td className="px-6 py-4">
        {new Date(user.createdAt).toLocaleDateString()}
      </td>

      <td className="px-6 py-4">

        <button className="rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800">
          View
        </button>

      </td>

    </tr>
  );
}