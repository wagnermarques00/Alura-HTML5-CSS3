import data from "../../mocks/articles.json";

import Article from "../Article/Article";

const ArticleList = () => {
	return (
		<section className="mt-5 grid gap-5 m-auto max-w-2xl sm:mt-0 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000px]">
			{data.map((article, index) => (
				<Article key={index} {...article} />
			))}
		</section>
	);
};

export default ArticleList;
