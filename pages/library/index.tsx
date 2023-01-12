import type { NextPage } from 'next'
import Layout from '~/layout'
import Link from 'next/link'

const Library: NextPage = () => {
  return (
    <Layout heading="Library" content="The archives of the legal engineering guild.">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex space-x-4">
          <div className="w-[200px] h-[80px] bg-gray-900 text-white px-8 py-4 rounded-md text-xl font-bold">
            <Link href="/library/collections">Collections</Link>
          </div>
          <div className="w-[200px] h-[80px] bg-gray-900 text-white px-8 py-4 rounded-md text-xl font-bold">
            <Link href="/library/catalogue">Catalogue</Link>
          </div>
          <div className="w-[200px] h-[80px] bg-gray-900 text-white px-8 py-4 rounded-md text-xl font-bold">
            <Link href="/library/submit-article">Submit your Article</Link>
          </div>
          <div className="w-[200px] h-[80px] bg-gray-900 text-white px-8 py-4 rounded-md text-xl font-bold">
            <Link href="/library/submit-review">Submit your Review</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Library