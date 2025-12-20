import product1 from "../assets/images/product1.jpg";
import ProductCard from "../components/ProductCard.jsx";

const ProductGrid = () => {
    return (
        <div className="p-5">
            <h1 className="text-4xl font-bold mb-8">Products</h1>
            <div className="grid grid-cols-3 gap-6">
                <ProductCard
                    image={product1}
                    title="Lakme Beauty Plus Facewash"
                    oldPrice="433.90"
                    newPrice="299.90"
                    save="5"
                />
                <ProductCard
                    image={product1}
                    title="Lakme Shampoo"
                    oldPrice="599.90"
                    newPrice="449.90"
                    save="10"

                />

                <ProductCard
                    image={product1}
                    title="Lakme Lotion"
                    oldPrice="199.00"
                    newPrice="149.00"
                    save="15"
                />
                <ProductCard
                    image={product1}
                    title="Lakme Sunscreen"
                    oldPrice="349.00"
                    newPrice="299.00"
                    save="20"
                />
                <ProductCard
                    image={product1}
                    title="Lakme Kajal"
                    oldPrice="120.00"
                    newPrice="99.00"
                    save="25"
                />
                <ProductCard
                    image={product1}
                    title="Lakme Lipstick"
                    oldPrice="250.00"
                    newPrice="199.00"
                    save="30"
                />
                
                <ProductCard
                    image={product1}
                    title="Lakme Foundation"
                    oldPrice="600.00"
                    newPrice="499.00"
                    save="35"
                />
                <ProductCard
                    image={product1}
                    title="Lakme Compact"
                    oldPrice="300.00"
                    newPrice="249.00"
                    save="40"
                />
                <ProductCard
                    image={product1}
                    title="Lakme Nail Polish"
                    oldPrice="150.00"
                    newPrice="99.00"
                    save="45"
                />
                


            </div>
        </div>
    );
}

export default ProductGrid;