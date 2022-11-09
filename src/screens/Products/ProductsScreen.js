import products from "../../assets/products.json"

function ProductsScreen(props) {

    // digitei x no campo de busca

    const filterProductsByText = () => {
        return products.filter((product) => product.name.includes("x"))
    }

    return (
        <div>
            {
                products
                // .filter((product) => product.name.toLowerCase().includes("a".toLowerCase()))
                // .filter((product) => product.price <= 499)
                .map((product) => (
                    <p>{product.name}</p>
                ))
            }
        </div>
    )
}

export default ProductsScreen
