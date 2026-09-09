import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex-1 bg-slate-100">

        <Header />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}