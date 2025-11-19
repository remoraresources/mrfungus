export interface Article {
    id: string
    title: string
    slug: string
    excerpt: string
    content: string
    image: string
    author: {
        name: string
        avatar: string
    }
    date: string
    tags: string[]
}

export interface Product {
    id: string
    title: string
    slug: string
    image: string
    price: string
    category: string
}
