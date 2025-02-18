import axios from 'axios';
const searchImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID FxG2YAuFFzHCR9a11NiRbjvLKxMx9Ft65ohl8nfti9s'
        },
        params:{
            query: term
        }
    })
    return response.data.results
}

export default searchImage