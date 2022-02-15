const axios = require('axios') 

exports.ytmp3 = async (url) => {
	w = /youtu(?:.*\/v\/|.*v\=|\.be\/)([A-Za-z0-9_\-]{11})/
	q = await axios({
		method: 'get',
		url: `https://ytmp4.buzz/api/json/mp3/${w.exec(url)[1]}`,
	})
	return q.data
}
