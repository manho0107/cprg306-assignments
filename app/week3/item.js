export default function Item({name, quantity, category}) {
    return (
        <main>
            <div className="border ring-blue-300 bg-blue-300 w-1/3 mt-2 p-2">
                <h3 className="mt-5 font-bold text-2xl">Name: {name}</h3>
                <ul>
                    <li className="mt-2">Quantity: {quantity}</li>
                    <li className="mb-4">Category: {category}</li>
                </ul>
            </div>
        </main>
    );
}