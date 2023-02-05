const Article = ({ alt, image, tags, text, title }) => {
	return (
		<article className="alura-card ">
			<h3 className="font-bold text-xl text-alura-200 dark:text-gray-200 ">{title}</h3>
			<div className="w-full pr-5 hidden sm:flex sm:flex-row sm:gap-2 sm:justify-end">
				{tags.map((tag) => (
					<span className="alura-tag" key={tag}>
						{tag}
					</span>
				))}
			</div>
			<div className="grid gap-1">
				{text.map((content, index) => (
					<span className="text-alura-200 line-clamp-2 sm:line-clamp-none dark:text-gray-400" key={index}>
						{content}
					</span>
				))}
			</div>
			{image && <img className="sm:p-4" src={image} />}
			{image && alt && <span className="sr-only">{alt}</span>}
		</article>
	);
};

export default Article;
