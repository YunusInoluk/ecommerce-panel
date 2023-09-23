import prismadb from "@/lib/prismadb";
import BillboardForm from "./components/category-form";
import CategoryForm from "./components/category-form";

const CategoryPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <CategoryForm initialData={category} billboards={billboards} />
      </div>
    </div>
  );
};

export default CategoryPage;
