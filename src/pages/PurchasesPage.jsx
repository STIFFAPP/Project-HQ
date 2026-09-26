import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import PurchaseQueue from "../components/purchases/PurchaseQueue";
import { loadState } from "../lib/storage";

export default function PurchasesPage() {
  const data = loadState();

  return (
    <>
      <PageHeader title="Purchases" />
      <Card title="Prioritised Purchase Queue">
        <PurchaseQueue projects={data.projects} purchases={data.purchases} />
      </Card>
    </>
  );
}
