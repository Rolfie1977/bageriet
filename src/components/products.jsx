import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductsStyle, ProductNews } from "./products.style";

export const Products = () => {
	const url = "https://api.mediehuset.net/bakeonline/products";
	const [products, setProducts] = useState([]);
	useEffect(() => {
		axios.get(url).then((data) => {
			console.log(data.data.items);
			setProducts(data.data.items.slice(0, 8));
		});
	}, []);

	return (
		<ProductsStyle>
			<h2> Nyeste bagværk </h2>

			<ProductNews>
				{products.map((data) => {
					return (
						<>
							<div>{data.title}</div>
							<div> {data.teaser}</div>
						</>
					)
				})}
			</ProductNews>
		</ProductsStyle>
	);
};
