import { useRef, useState } from 'react'

import siteMetadata from '@/data/siteMetadata'

const NewsletterForm = ({ title = 'Подпишитесь на оповещения' }) => {
  const inputEl = useRef(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/${siteMetadata.newsletter.provider}`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setError(true)
      setMessage('Ваш адрес электронной почты недействителен или вы уже подписаны.')
      return
    }

    inputEl.current.value = ''
    setError(false)
    setSubscribed(true)
    setMessage('Вы успешно подписаны.')
  }

  return (
    <div>
      <div className="pb-3 text-lg font-light text-gray-800 dark:text-white">{title}</div>
      <form className="flex flex-col sm:flex-row" onSubmit={subscribe}>
        <div>
          <label className="sr-only" htmlFor="email-input">
            Email
          </label>
          <input
            autoComplete="email"
            className="px-4 rounded-md font-thin w-72 dark:bg-black border-transparent  focus:outline-none focus:ring-2 focus:border-transparent focus:ring-theme-600"
            id="email-input"
            name="email"
            placeholder={subscribed ? 'Вы подписаны!' : 'Введите адрес электронной почты'}
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
          />
        </div>
        <div className="flex w-full mt-2 rounded-md shadow-sm sm:mt-0 sm:ml-3">
          <button
            className={`py-2 sm:py-0 w-full bg-theme-600 px-4 rounded-md font-light text-theme-50 ${
              subscribed ? 'cursor-default' : 'hover:bg-theme-400 dark:hover:bg-theme-600'
            } focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-theme-600 dark:ring-offset-theme-500`}
            type="submit"
            disabled={subscribed}
          >
            {subscribed ? 'Пожалуйте' : 'Извольте'}
          </button>
        </div>
      </form>
      {error && (
        <div className="pt-2 text-sm text-red-500 w-72 sm:w-96 dark:text-red-400">{message}</div>
      )}
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="p-6 bg-gray-100 dark:bg-gray-800 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
)
