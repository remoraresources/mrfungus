import { articles } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }))
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params
    const article = articles.find((a) => a.slug === slug)

    if (!article) {
        notFound()
    }

    return (
        <div className="pb-12">
            {/* Hero */}
            <div className="relative h-[400px] w-full">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                    <div className="container mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="relative h-8 w-8 rounded-full overflow-hidden">
                                    <Image
                                        src={article.author.avatar}
                                        alt={article.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <span>{article.author.name}</span>
                            </div>
                            <span>{article.date}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <article className="lg:col-span-2 prose prose-lg max-w-none">
                        <div className="whitespace-pre-wrap">{article.content}</div>
                    </article>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-lg mb-4">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {article.tags.map((tag) => (
                                    <Link
                                        key={tag}
                                        href={`/tags/${tag.toLowerCase()}`}
                                        className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm hover:border-red-600 hover:text-red-600 transition-colors"
                                    >
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}
