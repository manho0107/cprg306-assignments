export default function Item({ name, quantity, category, onSelect }) {
    const handleItemClick = () => {
        onSelect(name);
    };

    return (
        <>
        <div className="border ring-blue-300 bg-blue-300 w-[40rem] mt-1 mb-2 ml-5 p-2">
            <h3 className="mt-5 font-bold text-2xl ml-5 hover:bg-yellow-200 mr-10 rounded" onClick={handleItemClick} style={{ cursor: 'pointer' }}>Name: {name}</h3>
            <ul className="ml-5">
                <li className="mt-2">Quantity: {quantity}</li>
                <li className="mb-4">Category: {category}</li>
            </ul>
        </div>
        </>
    );
}