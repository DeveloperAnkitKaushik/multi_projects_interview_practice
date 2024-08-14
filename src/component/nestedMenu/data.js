const menuData = [
    {
        title: 'Home',
        url: '/home',
    },
    {
        title: 'Products',
        url: '/products',
        subMenu: [
            {
                title: 'Electronics',
                url: '/products/electronics',
                subMenu: [
                    {
                        title: 'Mobile Phones',
                        url: '/products/electronics/mobile-phones',
                    },
                    {
                        title: 'Laptops',
                        url: '/products/electronics/laptops',
                    },
                ],
            },
            {
                title: 'Furniture',
                url: '/products/furniture',
                subMenu: [
                    {
                        title: 'Living Room',
                        url: '/products/furniture/living-room',
                    },
                    {
                        title: 'Bedroom',
                        url: '/products/furniture/bedroom',
                    },
                ],
            },
        ],
    },
    {
        title: 'About Us',
        url: '/about-us',
    },
    {
        title: 'Contact',
        url: '/contact',
        subMenu: [
            {
                title: 'Support',
                url: '/contact/support',
            },
            {
                title: 'Sales',
                url: '/contact/sales',
            },
        ],
    },
];

export default menuData;