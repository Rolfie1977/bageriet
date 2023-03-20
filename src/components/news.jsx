import axios from "axios";
import { useEffect, useState } from "react";
import { NewsStyle, PictureNews, PictureText } from "./news.style";
export const News = () => {
	const url = "https://api.mediehuset.net/bakeonline/news";
	const [news, setNews] = useState([]);
	useEffect(() => {
		axios.get(url).then((data) => {
			console.log(data.data.items);
			setNews(data.data.items.slice(0, 3));
		});
	}, []);

	return (
		<NewsStyle>
			<h2>Nyheder</h2>
			<PictureNews>
				{news.map((data) => {
					return (
						<PictureText key={data.id}>
							<img src={data.image} alt="billeder" />
							<h5>{data.title}</h5>
							<p>{data.teaser}</p>
						</PictureText>
					);
				})}
			</PictureNews>
		</NewsStyle>
	);
};
