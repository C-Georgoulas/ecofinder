import { server } from '../config'
import ArticleList from '../components/ArticleList'
import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/Layout'

export default function Home({ articles }) {
  return (
    <Layout>
    <Header/>
    <div class="grid grid-cols-2 gap-10">
    <Link href='/maps'>
      <div class="max-w-sm rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
  <img class="object-contain h-48 w-full" src="https://techcrunch.com/wp-content/uploads/2020/06/google-maps-ios-icon.jpg" alt="Sunset in the mountains"></img>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2"><span class="text-green-600">Green</span> Maps</div>
    <p class="text-gray-700 text-base">
      Want to perhaps take a walk or a drive around your city and visit eco-friendly businesses? We'll take care of the searching for you.
    </p>
  </div>
</div>
</Link>
<Link href='/news'>
<div class="max-w-sm rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer	">
  <img class="object-contain h-48 w-full" src="https://magazineclonerepub.blob.core.windows.net/mcepub/2535/177722/image/dcd9baf5-5805-4b90-a7bf-36b5f08cd9e0.jpg" alt="Sunset in the mountains"></img>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2"><span class="text-green-600">Green</span> News</div>
    <p class="text-gray-700 text-base">
      Want to perhaps take a walk or a drive around your city and visit eco-friendly businesses? We'll take care of the searching for you.
    </p>
  </div>
</div>
</Link>
    </div>
    </Layout>
      )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

