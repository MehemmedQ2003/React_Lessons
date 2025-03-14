import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const products = [
        {
            id: 1,
            name: "Laptop",
            description: "A high-performance laptop better than phone",
            price: 1200,
            image: "https://irshad.az/cdn-cgi/image/width=315/storage/products/101376/mc8k4ru.png"
        },
        {
            id: 2,
            name: "Phone",
            description: "A high-performance phone better than laptop",
            price: 800,
            image: "https://bytelecom.az//media/2022/10/01/product_images/12555/blue1.webp"
        },
        {
            id: 3,
            name: "Tablet",
            description: "A high-performance tablet better than all",
            price: 500,
            image: "https://cdn0.it4profit.com/s3size/rt:fill/w:900/h:900/g:no/el:1/f:webp/plain/s3://cms/product/2c/6a/2c6a3c67ea0184d5a6548d33c790dabe/240508140013624550.webp"
        },
        {
            id: 4,
            name: "Smartwatch",
            description: "A stylish smartwatch with multiple features",
            price: 300,
            image: "https://kontakt.az/media/catalog/product/cache/a404967cc40694dc557cd869288440a4/t/m/tm-dg-smw-1106-sw-0423_1.png"
        },
        {
            id: 5,
            name: "Headphones",
            description: "Noise-canceling wireless headphones",
            price: 150,
            image: "https://morpheus360.com/cdn/shop/products/HP9550HDSidecopy.png?v=1629469208&width=1946"
        },
        {
            id: 6,
            name: "Gaming Console",
            description: "Next-gen gaming console for ultimate entertainment",
            price: 500,
            image: "https://www.jbhifi.com.au/cdn/shop/files/670110-Product-0-I-638469162014000767_grande.jpg"
        },
        {
            id: 7,
            name: "Wireless Mouse",
            description: "Ergonomic wireless mouse for smooth navigation",
            price: 50,
            image: "https://m.media-amazon.com/images/I/61qpQ7ZsSmL.jpg"
        },
        {
            id: 8,
            name: "Mechanical Keyboard",
            description: "High-quality mechanical keyboard with RGB lighting",
            price: 120,
            image: "https://www.keychron.id/cdn/shop/products/Keychron-K6-compact-65-percent-wireless-mechanical-keyboard-for-Mac-Windows-iOS-keychron-switch-red-with-type-C-non-backlight_9b82e62e-48b9-4ec2-a21c-9775ab9ced60.jpg?v=1661500750&width=1214"
        },
        {
            id: 9,
            name: "Monitor",
            description: "4K Ultra HD monitor with stunning clarity",
            price: 600,
            image: "https://bermud.az/181222-medium_default/monitor-xiaomi-mi-desktop-monitor-27-.jpg"
        },
        {
            id: 10,
            name: "Drone",
            description: "High-speed drone with 4K camera",
            price: 900,
            image: "https://m.media-amazon.com/images/I/61al5gk0FyL._AC_UF1000,1000_QL80_.jpg"
        },
    ];

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductList products={products} />} />
                    <Route path="/product/:id" element={<ProductDetails products={products} />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
