type StatCardProps = {
  title: string;
  value: string | number;
  color: string;
};

export default function StatCard({
  title,
  value,
  color,
}: StatCardProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">

      <p className="text-slate-500">
        {title}
      </p>

      <h2 className={`mt-3 text-4xl font-bold ${color}`}>
        {value}
      </h2>

    </div>
  );
}