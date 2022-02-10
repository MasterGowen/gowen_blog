import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import { IconSearch } from '@tabler/icons'
import { RoughNotation } from 'react-rough-notation'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="divide-y">
        <div className="pt-6 pb-6 space-y-2 md:space-y-5">
          <h1 className="text-3xl pb-8 font-display leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            <RoughNotation type="underline" show={true}>
              {title}
            </RoughNotation>
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Поиск по записям"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Поиск по записям"
              className="block w-full px-4 py-2 text-theme-dark bg-white border border-stone-300 rounded-md dark:border-stone-900 focus:ring-theme-500 focus:border-theme-500 dark:bg-stone-700 dark:text-stone-100"
            />
            <div className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300">
              <IconSearch color={'#9ca3af'} size={18} />
            </div>
          </div>
        </div>
        <ul>
          {!filteredBlogPosts.length && <div className="pt-6 pb-8">Записи не найдены.</div>}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                  <dl>
                    <dt className="sr-only">Опубликован</dt>
                    <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className=" pb-2 text-3xl font-thin leading-12">
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                      {summary}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
