const products = [
    { id: 1, name: 'Celeron N5095 Gaming Laptop', price: 'LKR 121,450.62', description: 'New Game Laptop 15.6-inch HD Screen Intel Celeron N5095 Windows 11 System Dual Band WiFi 16GB RAM 1TB SSD Business Office Laptop', image: 'images/1.webp' },
    { id: 2, name: 'MSI Pulse 15 Gaming Laptop', price: 'LKR 376,106.62', description: 'MSI Pulse 15 Gaming Laptop 15.6 Inch QHD 2.5K 165Hz IPS Screen Notebook i7-13700H 16GB 1TB RTX4060 Gaming Computer Netbook Win11', image: 'images/Screenshot 2024-08-01 052354.png' },
    { id: 3, name: '2020 MacBook Air M1 Laptop', price: 'LKR 507,119.76', description: '2020 MacBook Air M1 Laptop 13.3-inch 8-core CPU/8G/16 RAM 512/1TB/2TB SSD Touch IDMacBook Air Laptop M1 Original Genuine WIFI', image: 'images/Screenshot 2024-08-01 052956.png' },
    { id: 4, name: 'Apple iPhone 15 Pro Max', price: 'LKR 382,492.84', description: 'Apple iPhone 15 Pro Max A3108 APPLE A17 Pro Nano SIM IP68 CN version Brand new and inactive original genuine products', image: 'images/Screenshot 2024-08-01 053308.png' },
    { id: 5, name: 'Apple iPhone 11 ', price: 'LKR 73,841.54', description: 'Apple iPhone 11 64/128/256GB 6.1" Original Liquid Retina IPS LCD FACE ID A13 Genuine Unlocked 4G LTE 95% New Mobile Phone', image: 'images/Screenshot 2024-08-01 053645.png' },
    { id: 6, name: 'Samsung Galaxy S24 Ultra', price: 'LKR 414,839.20', description: 'Global Version Samsung Galaxy S24 Ultra 5G Smartphone Snapdragon 8 Gen 3 AMOLED Display 200MP IP68 120Hz', image: 'images/Screenshot 2024-08-01 053921.png' },
    { id: 7, name: 'Samsung Galaxy S21 ', price: 'LKR 72,142.53', description: 'Samsung Galaxy S21 FE 5G G990B G990B/DS Original phone 6.4 inches 6/8GB RAM 128/256GB ROM Dual card', image: 'images/Screenshot 2024-08-01 054238.png' },
    { id: 8, name: 'HOTWAV Cyber 15', price: 'LKR 59,873.76', description: 'HOTWAV Cyber 15 Rugged Phone 200MP PixSmart G99 6.6 FHD+ 120Hz 2K Smartphone 24(12+12)GB 256GB Ultra-thin Mobile Phone', image: 'images/Screenshot 2024-08-01 054505.png' },
    { id: 9, name: 'Google Pixel 8 Pro', price: 'LKR 190,076.31', description: 'Google Pixel 8 Pro 8Pro 5G 12GB RAM 128GB ROM 6.7" LTPO OLED NFC Google Tensor G3 Octa Core Unlocked Original Mobile Cell Phone', image: 'images/Screenshot 2024-08-01 054805.png' },
    { id: 10, name: 'Google Pixel 5', price: 'LKR 69,598.86', description: 'Google Pixel 5 5G bands 8GB RAM 128GB ROM 4080mAh 16MP NFC Fingerprint Smartphone Cell Phone Original Unlocked 99% New', image: 'images/Screenshot 2024-08-01 055044.png' },
    { id: 11, name: '55 Inch Curved Smart TV', price: 'LKR 133,996.24', description: 'Big Screen Ultra HD LED Television Smart TV 55 Inch Curved Smart TV 4K55 Inch TV', image: 'images/Screenshot 2024-08-01 055349.png' },
    { id: 12, name: 'Smart android Television', price: 'LKR 134,303.07', description: 'Wholesale 24 32 43 50 55 Inches 2K HD Wifi LED Tv, Smart android Television TV', image: 'images/Screenshot 2024-08-01 055701.png' },
    { id: 13, name: 'gaming monitor', price: 'LKR 84,695.63', description: 'MSI G32C4X 32 inch curved 250Hz 1Ms HDR display response VA screen 1500R curvature professional gaming monitor HDMI+DP', image: 'images/Screenshot 2024-08-01 055930.png' },
    { id: 14, name: 'Gaming Headset', price: 'LKR 12,159.59', description: 'FIFAR Dynamic RGB Gaming Headset with Mic Over-Ear Headphones 7.1 Surround Sound PC PS4 PS5 3 EQ Options Game Movie Music', image: 'images/Screenshot 2024-08-01 060151.png' },
    { id: 15, name: 'Lenovo GM2 Pro', price: 'LKR 2,336.46', description: 'Lenovo GM2 Pro True Wireless Bluetooth Earphones Headphones Mini Earpone Headset For Huawei Android Apple iPhone Earbuds', image: 'images/Screenshot 2024-08-01 060421.png' },
    { id: 16, name: 'Wired Mouse', price: 'LKR 577.74', description: 'Pc Accessories High-quality 4 Keys Portable Wired Mouse For Desktop Laptop Computer Gamer Mouse 1200dpi Matte Texture Usb Mice', image: 'images/Screenshot 2024-08-01 060737.png' },
    { id: 17, name: 'Wireless Mouse', price: 'LKR 4,586.36', description: 'Bluetooth 4.0 Wireless Mouse Rechargeable Silent Multi Arc Touch Mice Ultra-thin Magic Mouse For Laptop Ipad Mac PC Macbook', image: 'images/Screenshot 2024-08-01 061014.png' },
    { id: 18, name: 'Wireless Bluetooth Keyboard', price: 'LKR 1,373.28', description: 'Portable Slim Korean 78 Keys Wireless Bluetooth Keyboard', image: 'images/Screenshot 2024-08-01 061224.png' },
    { id: 19, name: 'Ultra Fast Charger', price: 'LKR 1,513.38', description: 'Xiaomi Mijia Original 120W Ultra Fast Charger For Xiaomi 14 13 12 11 Redmi Note 12T 13 Pro 6A Type-C USB Turbo Charging Cable', image: 'images/Screenshot 2024-08-01 061915.png' },
    { id: 20, name: 'AC Power Adapter', price: 'LKR 2,368.45', description: '0957-2269 0957-2242 0957-2289 AC Power Adapter Charger Supply 32V 625mA for HP F2410 F2420 F2423 F2430 F2460 F2476 F2480 F2483', image: 'images/Screenshot 2024-08-01 062333.png' },
    { id: 21, name: 'Haier Refrigerator ', price: 'LKR 135,755.00', description: 'Haier Refrigerator Double Door Freezing and preserving Suitable for kitchen Household Refrigerator mini fridge for room', image: 'images/Screenshot 2024-08-01 062644.png' },
    { id: 22, name: 'electric oven', price: 'LKR 66,152.78', description: 'Household new oven small baking special 38 liters of large-capacity electric oven multi-function all-in-one', image: 'images/Screenshot 2024-08-01 063015.png' },
    { id: 23, name: 'Bluetooth Speaker', price: 'LKR 12,329.75', description: 'JBL Flip 5 Bluetooth Speaker Flip5 Mini Portable Waterproof Wireless BT Speaker Bass Stereo Music Outdoor Travel Party Speaker', image: 'images/Screenshot 2024-08-01 063313.png' },
    { id: 24, name: 'Electric Iron', price: 'LKR 4,347.30', description: 'Electric Iron 1000W 5 Gear Adjustable Household Dry Ironing without Water Iron Hot Drilling Heat Transfer for Home Travel', image: 'images/Screenshot 2024-08-01 063522.png' },
    { id: 25, name: 'Drone Quadcopter 2024', price: 'LKR13,231.40', description: 'E88 drone4k professional rc plane remoto control fpv with camera rc novel killer most sold helicopter drone Quadcopter 2024', image: 'images/Screenshot 2024-08-01 063920.png' },
    { id: 26, name: 'Celeron N5095 Gaming Laptop', price: 'LKR 121,450.62', description: 'New Game Laptop 15.6-inch HD Screen Intel Celeron N5095 Windows 11 System Dual Band WiFi 16GB RAM 1TB SSD Business Office Laptop', image: 'images/1.webp' },
    { id: 27, name: 'MSI Pulse 15 Gaming Laptop', price: 'LKR 376,106.62', description: 'MSI Pulse 15 Gaming Laptop 15.6 Inch QHD 2.5K 165Hz IPS Screen Notebook i7-13700H 16GB 1TB RTX4060 Gaming Computer Netbook Win11', image: 'images/Screenshot 2024-08-01 052354.png' },
    { id: 28, name: '2020 MacBook Air M1 Laptop', price: 'LKR 507,119.76', description: '2020 MacBook Air M1 Laptop 13.3-inch 8-core CPU/8G/16 RAM 512/1TB/2TB SSD Touch IDMacBook Air Laptop M1 Original Genuine WIFI', image: 'images/Screenshot 2024-08-01 052956.png' },
    { id: 29, name: 'Apple iPhone 15 Pro Max', price: 'LKR 382,492.84', description: 'Apple iPhone 15 Pro Max A3108 APPLE A17 Pro Nano SIM IP68 CN version Brand new and inactive original genuine products', image: 'images/Screenshot 2024-08-01 053308.png' },
    { id: 30, name: 'Apple iPhone 11 ', price: 'LKR 73,841.54', description: 'Apple iPhone 11 64/128/256GB 6.1" Original Liquid Retina IPS LCD FACE ID A13 Genuine Unlocked 4G LTE 95% New Mobile Phone', image: 'images/Screenshot 2024-08-01 053645.png' },
    { id: 31, name: 'Samsung Galaxy S24 Ultra', price: 'LKR 414,839.20', description: 'Global Version Samsung Galaxy S24 Ultra 5G Smartphone Snapdragon 8 Gen 3 AMOLED Display 200MP IP68 120Hz', image: 'images/Screenshot 2024-08-01 053921.png' },
    { id: 32, name: 'Samsung Galaxy S21 ', price: 'LKR 72,142.53', description: 'Samsung Galaxy S21 FE 5G G990B G990B/DS Original phone 6.4 inches 6/8GB RAM 128/256GB ROM Dual card', image: 'images/Screenshot 2024-08-01 054238.png' },
    { id: 33, name: 'HOTWAV Cyber 15', price: 'LKR 59,873.76', description: 'HOTWAV Cyber 15 Rugged Phone 200MP PixSmart G99 6.6 FHD+ 120Hz 2K Smartphone 24(12+12)GB 256GB Ultra-thin Mobile Phone', image: 'images/Screenshot 2024-08-01 054505.png' },
    { id: 34, name: 'Google Pixel 8 Pro', price: 'LKR 190,076.31', description: 'Google Pixel 8 Pro 8Pro 5G 12GB RAM 128GB ROM 6.7" LTPO OLED NFC Google Tensor G3 Octa Core Unlocked Original Mobile Cell Phone', image: 'images/Screenshot 2024-08-01 054805.png' },
    { id: 35, name: 'Google Pixel 5', price: 'LKR 69,598.86', description: 'Google Pixel 5 5G bands 8GB RAM 128GB ROM 4080mAh 16MP NFC Fingerprint Smartphone Cell Phone Original Unlocked 99% New', image: 'images/Screenshot 2024-08-01 055044.png' },
    { id: 36, name: '55 Inch Curved Smart TV', price: 'LKR 133,996.24', description: 'Big Screen Ultra HD LED Television Smart TV 55 Inch Curved Smart TV 4K55 Inch TV', image: 'images/Screenshot 2024-08-01 055349.png' },
    { id: 37, name: 'Smart android Television', price: 'LKR 134,303.07', description: 'Wholesale 24 32 43 50 55 Inches 2K HD Wifi LED Tv, Smart android Television TV', image: 'images/Screenshot 2024-08-01 055701.png' },
    { id: 38, name: 'gaming monitor', price: 'LKR 84,695.63', description: 'MSI G32C4X 32 inch curved 250Hz 1Ms HDR display response VA screen 1500R curvature professional gaming monitor HDMI+DP', image: 'images/Screenshot 2024-08-01 055930.png' },
    { id: 39, name: 'Gaming Headset', price: 'LKR 12,159.59', description: 'FIFAR Dynamic RGB Gaming Headset with Mic Over-Ear Headphones 7.1 Surround Sound PC PS4 PS5 3 EQ Options Game Movie Music', image: 'images/Screenshot 2024-08-01 060151.png' },
    { id: 43, name: 'Lenovo GM2 Pro', price: 'LKR 2,336.46', description: 'Lenovo GM2 Pro True Wireless Bluetooth Earphones Headphones Mini Earpone Headset For Huawei Android Apple iPhone Earbuds', image: 'images/Screenshot 2024-08-01 060421.png' },
    { id: 41, name: 'Wired Mouse', price: 'LKR 577.74', description: 'Pc Accessories High-quality 4 Keys Portable Wired Mouse For Desktop Laptop Computer Gamer Mouse 1200dpi Matte Texture Usb Mice', image: 'images/Screenshot 2024-08-01 060737.png' },
    { id: 42, name: 'Wireless Mouse', price: 'LKR 4,586.36', description: 'Bluetooth 4.0 Wireless Mouse Rechargeable Silent Multi Arc Touch Mice Ultra-thin Magic Mouse For Laptop Ipad Mac PC Macbook', image: 'images/Screenshot 2024-08-01 061014.png' },
    { id: 43, name: 'Wireless Bluetooth Keyboard', price: 'LKR 1,373.28', description: 'Portable Slim Korean 78 Keys Wireless Bluetooth Keyboard', image: 'images/Screenshot 2024-08-01 061224.png' },
    { id: 44, name: 'Ultra Fast Charger', price: 'LKR 1,513.38', description: 'Xiaomi Mijia Original 120W Ultra Fast Charger For Xiaomi 14 13 12 11 Redmi Note 12T 13 Pro 6A Type-C USB Turbo Charging Cable', image: 'images/Screenshot 2024-08-01 061915.png' },
    { id: 45, name: 'AC Power Adapter', price: 'LKR 2,368.45', description: '0957-2269 0957-2242 0957-2289 AC Power Adapter Charger Supply 32V 625mA for HP F2410 F2420 F2423 F2430 F2460 F2476 F2480 F2483', image: 'images/Screenshot 2024-08-01 062333.png' },
    { id: 46, name: 'Haier Refrigerator ', price: 'LKR 135,755.00', description: 'Haier Refrigerator Double Door Freezing and preserving Suitable for kitchen Household Refrigerator mini fridge for room', image: 'images/Screenshot 2024-08-01 062644.png' },
    { id: 47, name: 'electric oven', price: 'LKR 66,152.78', description: 'Household new oven small baking special 38 liters of large-capacity electric oven multi-function all-in-one', image: 'images/Screenshot 2024-08-01 063015.png' },
    { id: 48, name: 'Bluetooth Speaker', price: 'LKR 12,329.75', description: 'JBL Flip 5 Bluetooth Speaker Flip5 Mini Portable Waterproof Wireless BT Speaker Bass Stereo Music Outdoor Travel Party Speaker', image: 'images/Screenshot 2024-08-01 063313.png' },
    { id: 49, name: 'Electric Iron', price: 'LKR 4,347.30', description: 'Electric Iron 1000W 5 Gear Adjustable Household Dry Ironing without Water Iron Hot Drilling Heat Transfer for Home Travel', image: 'images/Screenshot 2024-08-01 063522.png' },
    { id: 50, name: 'Drone Quadcopter 2024', price: 'LKR13,231.40', description: 'E88 drone4k professional rc plane remoto control fpv with camera rc novel killer most sold helicopter drone Quadcopter 2024', image: 'images/Screenshot 2024-08-01 063920.png' },
];

const productsPerPage = 16;
let currentPage = 1;

function displayProducts(page) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const paginatedProducts = products.slice(start, end);

    paginatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <div class="buttons">
                <button>Add to Wishlist</button>
                <button>Add to Cart</button>
                <button>Buy</button>
            </div>
        `;
        productContainer.appendChild(productCard);
    });
}

function displayPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(products.length / productsPerPage);

    // Create previous arrow
    const prevButton = document.createElement('button');
    prevButton.innerText = '←';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayProducts(currentPage);
            displayPagination();
        }
    });
    pagination.appendChild(prevButton);

    // Create page numbers
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.className = currentPage === i ? 'active' : '';
        button.addEventListener('click', () => {
            currentPage = i;
            displayProducts(currentPage);
            displayPagination();
        });
        pagination.appendChild(button);
    }

    // Create next arrow
    const nextButton = document.createElement('button');
    nextButton.innerText = '→';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayProducts(currentPage);
            displayPagination();
        }
    });
    pagination.appendChild(nextButton);
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(currentPage);
    displayPagination();
});
