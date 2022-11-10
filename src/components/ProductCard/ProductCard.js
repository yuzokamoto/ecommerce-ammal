import { ProductCardContainer } from "./ProductCard.styled"

const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  
function ProductCard(props) {
    const { product } = props

    return (
        <ProductCardContainer>
            <img src={product.imageUrl} alt={product.imageAlt} />
            <div>
                <div className="card-header">
                    <h2>{product.name}</h2>
                    <span>{product.rating}</span>
                </div>
                <div className="card-price-and-cart-action">
                    <span>{priceFormatter.format(product.price)}</span>
                    <button>+ Add to cart</button>
                </div>
            </div>
        </ProductCardContainer>
    )
}

export default ProductCard