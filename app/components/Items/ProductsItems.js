

export default function ProductItems() {
    return (
        <div class="items_card">
            <div>
                <Image src={products.picture}></Image>
            </div>
            <div>
                <h3>{products.name}</h3>
                <p>{products.price}</p>
            </div>
        </div>
    )
};