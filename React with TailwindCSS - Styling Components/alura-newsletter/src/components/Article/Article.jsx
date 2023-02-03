const Article = ({ alt, image, tags, text, title }) => {
	return (
		<article className="flex flex-col items-center gap-2 p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg">
			<h3 className="font-bold text-xl text-alura-200 dark:text-gray-200 ">{title}</h3>
			<div className="w-full pr-5 hidden sm:flex sm:flex-row sm:gap-2 sm:justify-end">
				{tags.map((tag) => (
					<span
						className="bg-alura-100  px-4 py-1 rounded-full text-gray-200 text-xs uppercase font-bold dark:bg-dark-100"
						key={tag}
					>
						{tag}
					</span>
				))}
			</div>
			<div className="grid gap-1">
				{text.map((content, index) => (
					<span className="text-alura-200 dark:text-gray-400" key={index}>
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
