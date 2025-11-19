import Link from "next/link"
import Image from "next/image"
import { Article } from "@/types"

interface ArticleCardProps {
    article: Article
    featured?: boolean
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
    return (
        <div className={`group flex flex-col ${featured ? 'md:flex-row gap-8' : 'gap-4'}`}>
            <div className={`relative overflow-hidden rounded-lg ${featured ? 'md:w-2/3 aspect-[16/9]' : 'aspect-[3/2]'}`}>
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className={`flex flex-col justify-center ${featured ? 'md:w-1/3' : ''}`}>
                <h3 className={`${featured ? 'text-3xl' : 'text-xl'} font-bold mb-2 group-hover:text-red-600 transition-colors`}>
                    <Link href={`/articles/${article.slug}`}>
                        {article.title}
                    </Link>
                </h3>
                {featured && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                    </p>
                )}
                <div className="flex items-center gap-2 mt-auto">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden">
                        <Image
                            src={article.author.avatar}
                            alt={article.author.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="text-sm">
                        <p className="font-medium text-gray-900">{article.author.name}</p>
                        <p className="text-gray-500">{article.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
