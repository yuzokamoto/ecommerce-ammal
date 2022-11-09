import { useState } from "react"
import Header from "./components/Header/Header"
import CartScreen from "./screens/Cart/CartScreen"
import ProductsScreen from "./screens/Products/ProductsScreen"

function App() {

    const [ activeScreen, setActiveScreen ] = useState("ProductsScreen")

    const goToProductsScreen = () => {
        setActiveScreen("ProductsScreen")
    }

    const goToCartScreen = () => {
        setActiveScreen("CartScreen")
    }

    const renderScreen = () => {
        switch (activeScreen) {
            case "ProductsScreen":
                return <ProductsScreen />
            case "CartScreen":
                return <CartScreen />
            default:
                return <div>Tela não existe</div>
        }
    }

    return (
        <>
            <Header
                goToProductsScreen={goToProductsScreen}
                goToCartScreen={goToCartScreen}
            />
            {renderScreen()}
        </>
    )
}

export default App
