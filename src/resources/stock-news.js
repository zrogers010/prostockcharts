

// https://cloud.iexapis.com/stable/stock/coin/news/last/20?token=pk_ed2c04cd7023450d8454cb7fd45ee267


import { iex } from '../config/iex.js';

export const stockNews = {

	getLatestNews: (symbol, callback) => {
		const url = stockNews.latestNewsURL(symbol)
		console.log(url);
		fetch(url)
		.then((response) => response.json())
		.then((data) => {
			callback(stockNews.formatNewsData(data));
		})
	}, 
	
	latestNewsURL: (symbol) => {
		return `${iex.base_url}/stock/${symbol}/news?token=${iex.api_token}`
	},
	
	formatNewsData: (data) => {
		// console.log("format news data")
		// console.log(data)
		// console.log(data.length)
		
		const news = []
		for (let i=0; i<data.length; i++) {
			//console.log(data[i]);
			const formattedData = {}
			formattedData.headline = data[i].headline;
			formattedData.summary = data[i].summary
			formattedData.image = data[i].image
			formattedData.source = data[i].source
			formattedData.url = data[i].url
			//console.log("formattedData :", formattedData)
			news.push(formattedData);
		}

		//console.log("NEWS[]: ", news);
		return news;
	}
}