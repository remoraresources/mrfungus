import { Article, Product } from "@/types"

export const articles: Article[] = [
    {
        id: "1",
        title: "The Magic of Lion's Mane: Brain Food from Nature",
        slug: "magic-of-lions-mane",
        excerpt: "Discover the cognitive benefits of this unique mushroom and how you can grow it at home.",
        content: `
## What is Lion's Mane?
Lion's Mane (Hericium erinaceus) is a distinctive mushroom that looks like a cascading white waterfall of icicles. It has been used for centuries in traditional medicine for its potential to support brain health and cognitive function.

## Cognitive Benefits
Studies suggest that Lion's Mane may contain compounds that stimulate the growth of brain cells. It is often used to improve focus, memory, and clarity. Many people describe it as a natural nootropic.

## Culinary Uses
Beyond its health benefits, Lion's Mane is delicious! When cooked, it has a texture similar to crab or lobster meat. It absorbs flavors well and is perfect for stir-fries, soups, or simply sautéed with butter and garlic.

## Growing Your Own
Growing Lion's Mane at home is easier than you think. Our grow kits come fully colonized and ready to fruit. Just cut a slit in the bag, mist it daily, and watch your mushrooms grow!
    `,
        image: "/images/lions-mane.png",
        author: {
            name: "Fungi Expert",
            avatar: "https://demo.next-drupal.org/sites/default/files/styles/thumbnail/public/2022-06/user_icon_0.png"
        },
        date: "19 Nov 2025",
        tags: ["Medicinal", "Grow Your Own", "Lion's Mane"]
    },
    {
        id: "2",
        title: "A Beginner's Guide to Growing Oyster Mushrooms",
        slug: "beginners-guide-oyster-mushrooms",
        excerpt: "Oyster mushrooms are the perfect starting point for aspiring mycologists. Learn why.",
        content: "Oyster mushrooms are aggressive colonizers and can grow on a variety of substrates, including coffee grounds, straw, and sawdust. They are resilient and fast-growing, making them the ideal choice for your first grow.",
        image: "/images/oyster.png",
        author: {
            name: "Myco Mike",
            avatar: "https://demo.next-drupal.org/sites/default/files/styles/thumbnail/public/2022-06/user_icon_0.png"
        },
        date: "18 Nov 2025",
        tags: ["Guide", "Oyster Mushrooms"]
    },
    {
        id: "3",
        title: "Sustainable Farming: Why Mushrooms Matter",
        slug: "sustainable-farming-mushrooms",
        excerpt: "Mushrooms play a crucial role in our ecosystem and sustainable agriculture.",
        content: "Fungi are nature's recyclers. They break down organic matter and return nutrients to the soil. By cultivating mushrooms, we can turn waste products like agricultural byproducts into nutritious food.",
        image: "/images/farming.png",
        author: {
            name: "Eco Warrior",
            avatar: "https://demo.next-drupal.org/sites/default/files/styles/thumbnail/public/2022-06/user_icon_0.png"
        },
        date: "17 Nov 2025",
        tags: ["Sustainability", "Environment"]
    }
]

export const products: Product[] = [
    {
        id: "1",
        title: "Blue Oyster Mushroom Grow Kit",
        slug: "blue-oyster-grow-kit",
        image: "/images/oyster.png",
        price: "$24.99",
        category: "Grow Kits"
    },
    {
        id: "2",
        title: "Lion's Mane Grow Kit",
        slug: "lions-mane-grow-kit",
        image: "/images/lions-mane.png",
        price: "$29.99",
        category: "Grow Kits"
    },
    {
        id: "3",
        title: "Fresh Shiitake Mushrooms (1lb)",
        slug: "fresh-shiitake",
        image: "/images/shiitake.png",
        price: "$12.00",
        category: "Fresh Mushrooms"
    },
    {
        id: "4",
        title: "Reishi Mushroom Tincture",
        slug: "reishi-tincture",
        image: "/images/reishi.png",
        price: "$35.00",
        category: "Supplements"
    }
]
