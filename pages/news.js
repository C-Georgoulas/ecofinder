import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=Eco-friendly&from=2021-05-10&sortBy=popularity&apiKey=ed011802f56845f1afefc7258fb2d501`
  );
  const response = await res.json();
  const articles = response.articles;
  return {
    props: {
      articles,
    },
  };
};
