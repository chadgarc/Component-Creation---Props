import type React from "react"
import type { ProductDisplayProps } from "../../types"

/**
 * ProductDisplay Component
 * ------------------------
 * Renders a product card with name, price, optional description,
 * optional stock status, and an "Add to cart" action button.
 *
 * Props:
 * @param {Product} product
 *   The product object containing id, name, price, description,
 *   imageUrl, and inStock status.
 *
 * @param {boolean} [showDescription=false]
 *   When true, displays the product description below the price.
 *
 * @param {boolean} [showStockStatus=false]
 *   When true, displays a stock indicator:
 *   - "In Stock" (green) when product.inStock is true
 *   - "Out Of Stock" (red) when product.inStock is false
 *
 * @param {(productId: string) => void} [onAddToCart]
 *   Callback fired when the "Add to cart" button is clicked.
 *   The component passes `product.id` to the parent so the parent
 *   can update cart state, trigger alerts, or perform other logic.
 *
 * @param {React.ReactNode} [children]
 *   Optional additional UI content rendered below the button.
 *   Useful for showing dynamic information such as:
 *   - Cart count
 *   - Extra product details
 *   - Alerts or badges
 *
 * Component Interaction:
 * ----------------------
 * - Parent components pass product data and flags to control what is shown.
 * - When the user clicks "Add to cart", the component calls:
 *       onAddToCart(product.id)
 *   allowing the parent to update state.
 *
 * - Because React re-renders when parent state changes,
 *   any dynamic children (like an AlertBox showing cart count)
 *   will update automatically.
 *
 * Why children re-render:
 * -----------------------
 * - React re-renders the entire ProductDisplay component whenever
 *   its parent re-renders.
 * - If the parent updates state (e.g., countProducts),
 *   the new children are passed again into ProductDisplay.
 * - ProductDisplay simply renders whatever children it receives.
 *
 * This makes the component flexible and predictable:
 * - ProductDisplay does NOT manage cart state.
 * - ProductDisplay does NOT manage alerts.
 * - ProductDisplay ONLY displays what the parent gives it.
 *
 * This separation of responsibilities is a core React pattern.
 */
export const ProductDisplay: React.FC<ProductDisplayProps> = ({
    product,
    showDescription = false,
    showStockStatus = false,
    onAddToCart,
    children
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
                    {children}
                </div>
            </div>
        </section>
    );
}