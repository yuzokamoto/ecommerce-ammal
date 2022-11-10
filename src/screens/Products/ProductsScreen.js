import products from "../../assets/products.json"
import ProductCard from "../../components/ProductCard/ProductCard"
import { Main } from "./ProductsScreen.styled"

function ProductsScreen(props) {

    const { addToCart } = props

    // digitei x no campo de busca

    const filterProductsByText = () => {
        return products.filter((product) => product.name.includes("x"))
    }

    return (
        <Main>
            <section>
                <h1>Products</h1>
                <hr />
                {
                    products
                    // .filter((product) => product.name.toLowerCase().includes("a".toLowerCase()))
                    // .filter((product) => product.price <= 499)
                    .map((product) => (
                        <ProductCard
                            product={product}
                            addToCart={addToCart}
                            key={product.id}
                            isOnProductsScreen={true}
                        />
                    ))
                }
            </section>
        </Main>
    )
}

export default ProductsScreen
