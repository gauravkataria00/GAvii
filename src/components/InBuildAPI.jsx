export default function InBuildAPI() {

    const _ClothData = [
        {
            id: 1,
            productName: "Classic Cotton T-Shirt",
            brandName: "Roadster",
            price: 499,
            img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
        },
        {
            id: 2,
            productName: "Slim Fit Jeans",
            brandName: "Levis",
            price: 1499,
            img: "https://images.unsplash.com/photo-1542272604-787c3835535d"
        },
        {
            id: 3,
            productName: "Regular Fit Shirt",
            brandName: "Allen Solly",
            price: 999,
            img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
        },
        {
            id: 4,
            productName: "Solid Polo T-Shirt",
            brandName: "U.S. Polo Assn.",
            price: 899,
            img: "https://images.unsplash.com/photo-1625910513413-5fc45c6f1e8d"
        },
        {
            id: 5,
            productName: "Oversized Graphic T-Shirt",
            brandName: "H&M",
            price: 799,
            img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1"
        },
        {
            id: 6,
            productName: "Straight Fit Trousers",
            brandName: "Van Heusen",
            price: 1299,
            img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a"
        },
        {
            id: 7,
            productName: "Casual Denim Jacket",
            brandName: "Pepe Jeans",
            price: 1999,
            img: "https://images.unsplash.com/photo-1551028719-00167b16eac5"
        },
        {
            id: 8,
            productName: "Printed Casual Shirt",
            brandName: "Flying Machine",
            price: 1099,
            img: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab"
        },
        {
            id: 9,
            productName: "Slim Fit Chinos",
            brandName: "Peter England",
            price: 1199,
            img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80"
        },
        {
            id: 10,
            productName: "Basic Hoodie",
            brandName: "Bewakoof",
            price: 999,
            img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7"
        },
        {
            id: 11,
            productName: "Floral Summer Dress",
            brandName: "Mango",
            price: 1599,
            img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446"
        },
        {
            id: 12,
            productName: "Women Cotton Kurti",
            brandName: "Biba",
            price: 899,
            img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2"
        },
        {
            id: 13,
            productName: "High Rise Skinny Jeans",
            brandName: "Levis",
            price: 1699,
            img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
        },
        {
            id: 14,
            productName: "Women's Crop Top",
            brandName: "H&M",
            price: 699,
            img: "https://images.unsplash.com/photo-1564257577054-7e3f3c5d8f6f"
        },
        {
            id: 15,
            productName: "Printed Anarkali Kurta",
            brandName: "Libas",
            price: 1299,
            img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c"
        },
        {
            id: 16,
            productName: "Women Casual Shirt",
            brandName: "ONLY",
            price: 1199,
            img: "https://images.unsplash.com/photo-1598554747436-c9293d6a5888"
        },
        {
            id: 17,
            productName: "Pleated Midi Skirt",
            brandName: "Zara",
            price: 1799,
            img: "https://images.unsplash.com/photo-1583496661160-fb5886a13d27"
        },
        {
            id: 18,
            productName: "Women's Oversized Hoodie",
            brandName: "Bewakoof",
            price: 1099,
            img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3"
        },
        {
            id: 19,
            productName: "Solid Palazzo Pants",
            brandName: "W for Woman",
            price: 999,
            img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1"
        },
        {
            id: 20,
            productName: "Embroidered Kurta Set",
            brandName: "Aurelia",
            price: 1499,
            img: "https://images.unsplash.com/photo-1597983073493-88cd35cf93f0"
        },
        {
            id: 21,
            productName: "Men's Formal Shirt",
            brandName: "Louis Philippe",
            price: 1399,
            img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c"
        },
        {
            id: 22,
            productName: "Men's Formal Trousers",
            brandName: "Raymond",
            price: 1599,
            img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a"
        },
        {
            id: 23,
            productName: "Checked Casual Shirt",
            brandName: "Levis",
            price: 1199,
            img: "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114"
        },
        {
            id: 24,
            productName: "Men's Bomber Jacket",
            brandName: "Jack & Jones",
            price: 2299,
            img: "https://images.unsplash.com/photo-1551028719-00167b16eac5"
        },
        {
            id: 25,
            productName: "Graphic Print Sweatshirt",
            brandName: "Campus Sutra",
            price: 899,
            img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2"
        },
        {
            id: 26,
            productName: "Men's Cargo Pants",
            brandName: "Highlander",
            price: 1099,
            img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
        },
        {
            id: 27,
            productName: "Denim Joggers",
            brandName: "Flying Machine",
            price: 1299,
            img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3"
        },
        {
            id: 28,
            productName: "Men's Linen Shirt",
            brandName: "Mufti",
            price: 1399,
            img: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176"
        },
        {
            id: 29,
            productName: "Striped Polo T-Shirt",
            brandName: "U.S. Polo Assn.",
            price: 999,
            img: "https://images.unsplash.com/photo-1586363104868-1a5e2a2b2e0a"
        },
        {
            id: 30,
            productName: "Men's Track Pants",
            brandName: "Puma",
            price: 1199,
            img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea"
        },
        {
            id: 31,
            productName: "Women's Denim Jacket",
            brandName: "ONLY",
            price: 1899,
            img: "https://images.unsplash.com/photo-1543076447-215ad9ba6923"
        },
        {
            id: 32,
            productName: "Ribbed Bodycon Dress",
            brandName: "H&M",
            price: 1299,
            img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae"
        },
        {
            id: 33,
            productName: "Women's Mom Jeans",
            brandName: "Levis",
            price: 1599,
            img: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec"
        },
        {
            id: 34,
            productName: "Women's Printed Top",
            brandName: "Vero Moda",
            price: 899,
            img: "https://images.unsplash.com/photo-1564257577054-7e3f3c5d8f6f"
        },
        {
            id: 35,
            productName: "Women's Wide Leg Pants",
            brandName: "Zara",
            price: 1999,
            img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1"
        },
        {
            id: 36,
            productName: "Cotton Tunic Top",
            brandName: "W for Woman",
            price: 799,
            img: "https://images.unsplash.com/photo-1566206091558-7f218b696731"
        },
        {
            id: 37,
            productName: "Women's Sweatshirt",
            brandName: "Puma",
            price: 1099,
            img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27"
        },
        {
            id: 38,
            productName: "Party Wear Maxi Dress",
            brandName: "Mango",
            price: 2499,
            img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae"
        },
        {
            id: 39,
            productName: "Women's Straight Kurta",
            brandName: "Biba",
            price: 999,
            img: "https://images.unsplash.com/photo-1597983073493-88cd35cf93f0"
        },
        {
            id: 40,
            productName: "Women's Jogger Pants",
            brandName: "HRX",
            price: 1199,
            img: "https://images.unsplash.com/photo-1506629905607-d9c297d4e4c4"
        },
        {
            id: 41,
            productName: "Classic Denim Shirt",
            brandName: "Pepe Jeans",
            price: 1299,
            img: "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114"
        },
        {
            id: 42,
            productName: "Men's Oversized T-Shirt",
            brandName: "Bewakoof",
            price: 599,
            img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
        },
        {
            id: 43,
            productName: "Men's Checked Trousers",
            brandName: "Peter England",
            price: 1399,
            img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a"
        },
        {
            id: 44,
            productName: "Casual Henley T-Shirt",
            brandName: "Roadster",
            price: 699,
            img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27"
        },
        {
            id: 45,
            productName: "Men's Winter Jacket",
            brandName: "Jack & Jones",
            price: 2499,
            img: "https://images.unsplash.com/photo-1548883354-7622d03aca27"
        },
        {
            id: 46,
            productName: "Women's Cardigan",
            brandName: "Vero Moda",
            price: 1399,
            img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105"
        },
        {
            id: 47,
            productName: "Women's Denim Shorts",
            brandName: "Levis",
            price: 1199,
            img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1"
        },
        {
            id: 48,
            productName: "Cotton Printed Saree",
            brandName: "Libas",
            price: 1599,
            img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c"
        },
        {
            id: 49,
            productName: "Men's Casual Blazer",
            brandName: "Van Heusen",
            price: 2999,
            img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf"
        },
        {
            id: 50,
            productName: "Unisex Fleece Hoodie",
            brandName: "Nike",
            price: 2999,
            img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7"
        }
    ];

    return (
        <div>
            {/* Your component */}
        </div>
    );
}

