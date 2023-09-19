import prismadb from "@/lib/prismadb";
import React from "react";

interface DashboardPageProps {
  params: { storeId: string };
}
const Dashboard: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div>Active Store: {store?.name}</div>;
};

export default Dashboard;
