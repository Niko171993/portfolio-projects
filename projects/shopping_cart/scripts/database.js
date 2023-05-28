// TODO => SQL -> Database -> Table -> col -> row
// TODO => MONGO -> Database -> Collection -> document -> property
// TODO => https://www.datastax.com/learn/data-modeling-by-example/shopping-cart
// TODO => https://www.youtube.com/watch?v=cT_ZYrS3tKc&t=3708s
const database = {
    users: [
        {
            id: "",
            email: "",
            password:""
        }
    ],
    carts: [
        {
            id: "",
            user_id: ""
        }
    ],
    items: [
        {
            id: "",
            cart_id: "",
            product_id: "",
            title: "",
            price: "",
            icon: "",
            quantity: ""
        }
    ],
    products : [
        {
            id: "e4bf66c4-6ff3-4c36-a794-ff1abc4fd3ac",
            title: "Apple iPhone 13 Pro | 128GB Alpine Green",
            price: 3799,
            icon: "0163120_apple-iphone-13-pro-128gb-alpine-green_550.jpeg"
        },
        {
            id: "6b70c236-6df7-4ac8-80d2-20964b16b9b3",
            title: "Samsung SM-T225 Galaxy Tab A7 Lite Single Sim 32GB LTE Grey",
            price: 499,
            icon: "0148653_samsung-sm-t225-galaxy-tab-a7-lite-single-sim-32gb-lte-grey_550.jpeg"
        },
        {
            id: "568a123b-ae8d-42d3-8a8c-a1894e10d881",
            title: "Xiaomi Redmi Note 11 Pro LTE 8/128GB Blue",
            price: 899,
            icon: "0164031_xiaomi-redmi-note-11-pro-lte-8128gb-blue_550.jpeg"
        },
        {
            id: "268d0e69-cbd6-43d6-b157-c3114180a75c",
            title: "Realme GT Master 5G 6/128GB Grey",
            price: 999,
            icon: "0153052_realme-gt-master-5g-6128gb-grey_550.jpeg"
        },
        {
            id: "5da3816f-65a5-42c2-a5b8-df874841b658",
            title: "Apple iPhone 11 2020 | 64GB Purple",
            price: 1799,
            icon: "0128196_apple-iphone-11-2020-64gb-purple_550.png"
        }
    ],

}