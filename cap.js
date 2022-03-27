const axios = require('axios');
const cheerio = require('cheerio');




const getCapInfo = async () => {
	try {
		const { data } = await axios.get(
			'https://overthecap.com/salary-cap/cincinnati-bengals/'
		);
		const $ = cheerio.load(data);
		const capInfo = [];

		$("tr > td").each((_idx, el) => {
			const cap = $(el).text()
			capInfo.push(cap)
		});

		let names = []
		let salary = []
		
		for (let i = 0; i< 714; i+=14){
		names.push(capInfo[i])
		}

		for (let i = 10; i< 724; i+=14){
		salary.push(capInfo[i])
		}

        exports.capInfo = capInfo

		exports.names = names
		exports.salary = salary
		console.log(module.exports.names)
		exports.GetCapInfo = getCapInfo
		return capInfo;
	} catch (error) {
		throw error;
	}
};

getCapInfo()
//.then(capInfo => {
   //console.log(capInfo)
//})







