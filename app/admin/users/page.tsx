"use client";

import { useEffect, useState } from "react";

import SearchBar from "@/components/admin/users/SearchBar";
import UsersTable from "@/components/admin/users/UsersTable";
import EmptyState from "@/components/admin/users/EmptyState";
import LoadingSkeleton from "@/components/admin/users/LoadingSkeleton";

type User = {
  id: string;
  name: string | null;
  email: string;
  createdAt: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch("/api/admin/users");

        if (!res.ok) {
          throw new Error("Failed to load users");
        }

        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    const keyword = search.toLowerCase();

    return (
      user.name?.toLowerCase().includes(keyword) ||
      user.email.toLowerCase().includes(keyword)
    );
  });

  return (
    <main>

      <h1 className="text-4xl font-bold">
        Users Management
      </h1>

      <p className="mt-2 text-slate-600">
        Manage registered BidAxis users.
      </p>

      <div className="my-8">
        <SearchBar
          value={search}
          onChange={setSearch}
        />
      </div>

      {loading ? (
        <LoadingSkeleton />
      ) : filteredUsers.length === 0 ? (
        <EmptyState />
      ) : (
        <UsersTable users={filteredUsers} />
      )}

    </main>
  );
}