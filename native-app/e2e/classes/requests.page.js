import axios from "axios";

export default class Requests {
  async postMachineHealthScore(options) {
		try {
			const { data } = await axios.post('http://localhost:3001/machine-health', options, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			});
			return data;
		} catch (e) {
			console.log(e);
		}
	}
}
