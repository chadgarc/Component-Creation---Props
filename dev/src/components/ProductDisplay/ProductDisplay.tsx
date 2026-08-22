import type React from "react"
import type { ProductDisplayProps } from "../../types"

/**
 * ProductDisplay Component
 * ------------------------
 * Displays product information in a card layout.
 *
 * Props:
 * @param {Product} product - The product data to display.
 * @param {boolean} [showDescription=false] - Whether to show the product description.
 * @param {boolean} [showStockStatus=false] - Whether to show the stock status.
 * @param {(productId: string) => void} [onAddToCart] - Callback fired when "Add to cart" is clicked.
 *
 * How it connects:
 * - Parent components pass a `product` object and optional flags (`showDescription`, `showStockStatus`).
 * - When the user clicks "Add to cart", the component calls `onAddToCart(product.id)`,
 *   allowing the parent to handle cart logic (alerts, state updates, etc.).
 */
export const ProductDisplay: React.FC<ProductDisplayProps> = ({
    product,
    showDescription = false,
    showStockStatus = false,
    onAddToCart
    }) => {
        
    return (
        <section>
            <div className="card w-96 bg-white shadow-sm">
                <div className="card-body">
                    <div className="flex justify-end">
                        <span className="badge badge-xs badge-warning p-2">Most Popular</span>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h2 className="font-extrabold text-black!">{product.name}</h2>
                        <h3 className="text-blue-600">{product.price}</h3>
                        {showDescription && <p>{product.description}</p>}
                        {/* Optional stock status, only shown when showStockStatus is true.
                            Uses product.inStock to decide which label to show. */}
                        {showStockStatus && (product.inStock ? <p className="text-green-600">{"In Stock"}</p> : <p className="text-red-600">{"Out Of Stock"}</p>)}
                    </div>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block"
                        // When clicked, call the onAddToCart callback with the product ID.
                        // The parent decides what to do (e.g., show an alert, update cart state).
                                onClick={() => onAddToCart?.(product.id)}
                        >Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
}