import Item from "./item";

export default function ItemList() {
    const item1 = {
        name: "MacBook Pro 16 💻",
        quantity: 100,
        category: "Electronics",
    };
    
    const item2 = {
        name: "iPhone 15 Pro 📱",
        quantity: 50,
        category: "Electronics",
    };
    
    const item3 = {
        name: "Printer 🖨️",
        quantity: 80,
        category: "Electronics",
    };
    
    const item4 = {
        name: "Wireless Keyboard ⌨️",
        quantity: 200,
        category: "Accessories",
    };

    const item5 = {
        name: "Wireless Mouse 🖱️",
        quantity: 200,
        category: "Accessories",
    };
    
    const item6 = {
        name: "Smartwatch ⌚",
        quantity: 500,
        category: "Jewelry",
    };
    
    const item7 = {
        name: "Camera 📷",
        quantity: 80,
        category: "Filming Device",
    };
    
    const item8 = {
        name: "Video Camera 📹",
        quantity: 90,
        category: "Filming Device",
    };
    
    const item9 = {
        name: "Microphone 🎙️",
        quantity: 40,
        category: "Accessories",
    };
    
    const item10 = {
        name: "Power Bank 🔋",
        quantity: 50,
        category: "Accessories",
    };
    
    const item11 = {
        name: "Adapter🔌",
        quantity: 50,
        category: "Accessories",
    };
    
    const item12 = {
        name: "Wifi Transmitter📡",
        quantity: 30,
        category: "Communication",
    };

    return (
        <>
            <Item
                name={item1.name}
                quantity={item1.quantity}
                category={item1.category}
            />
            <Item
                name={item2.name}
                quantity={item2.quantity}
                category={item2.category}
            />
            <Item
                name={item3.name}
                quantity={item3.quantity}
                category={item3.category}
            />
            <Item
                name={item4.name}
                quantity={item4.quantity}
                category={item4.category}
            />
            <Item
                name={item5.name}
                quantity={item5.quantity}
                category={item5.category}
            />
            <Item
                name={item6.name}
                quantity={item6.quantity}
                category={item6.category}
            />
            <Item
                name={item7.name}
                quantity={item7.quantity}
                category={item7.category}
            />
            <Item
                name={item8.name}
                quantity={item8.quantity}
                category={item8.category}
            />
            <Item
                name={item9.name}
                quantity={item9.quantity}
                category={item9.category}
            />
            <Item
                name={item10.name}
                quantity={item10.quantity}
                category={item10.category}
            />
            <Item
                name={item11.name}
                quantity={item11.quantity}
                category={item11.category}
            />
            <Item
                name={item12.name}
                quantity={item12.quantity}
                category={item12.category}
            />
        </>
    );            
}