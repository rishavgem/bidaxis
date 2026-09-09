import { Suspense } from "react";
import TendersContent from "./TendersContent";

export default function TendersPage() {
  return (
    <Suspense fallback={<div>Loading tenders...</div>}>
      <TendersContent />
    </Suspense>
  );
}