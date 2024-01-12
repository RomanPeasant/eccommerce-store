import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("95edfa36-18b4-412c-83f8-8f8d01c373f3");
    const products = await getProducts(({ isFeatured: true }))
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />

                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Produtos em Destaque" items={products} />
                </div>
            </div>
        </Container>
    );
}

export default HomePage;