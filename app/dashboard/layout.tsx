import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-slate-100">

      <Sidebar />

      <main className="flex-1 p-8">

        <Topbar />

        <div className="mt-8">
          {children}
        </div>

      </main>

    </div>
  );
}