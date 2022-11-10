import styled from "styled-components"

export const ProductCardContainer = styled.article`
    border: 1px solid black;
    margin: 8px 0;
    margin-right: 8px;
    border-radius: 10px;
    overflow: hidden;

    > div {
        padding: 8px;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card-price-and-cart-action {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;

        button {
            padding: 4px;
        }
    }
`