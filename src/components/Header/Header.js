import { HeaderContainer } from "./Header.styled"
import searchIcon from "../../assets/search.svg"
import productIcon from "../../assets/product.svg"
import cartIcon from "../../assets/cart.svg"

function Header(props) {
    const { goToCartScreen, goToProductsScreen } = props

    return (
        <HeaderContainer>
            <a>
                BlueShop
            </a>

            <div>
                <input placeholder="Search" />
                <button>
                    <img src={searchIcon} alt="Search icon" />
                </button>
            </div>

            <div className="button-group">
                <button onClick={goToProductsScreen}>
                    <img src={productIcon} alt="Product icon" />
                </button>

                <button onClick={goToCartScreen}>
                    <img src={cartIcon} alt="Cart icon" />
                </button>
            </div>
        </HeaderContainer>
    )
}

export default Header
