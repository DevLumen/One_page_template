import React from "react";
import '../styles/collections.css';

export default function CollectionsPage() {

    const products = ["product1", "product2", "product3", "product4", "product5", "product6", "product7", "product8"];

    return (
        <div id="collections" className="collections_container">
            {products.map((product, i) => (
                <div className="product_card">
                    <h1>{product}</h1>
                </div>
            ))}
        </div>
    )
}