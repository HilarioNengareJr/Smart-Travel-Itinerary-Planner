import axios from 'axios';

const WIKITRAVEL_API_URL = 'https://wikitravel.org/wiki/en/api.php';

export const fetchRecommendations = async (query: string) => {
    const response = await axios.get(WIKITRAVEL_API_URL, {
        params: {
            action: 'query',
            list: 'search',
            srsearch: query,
            format: 'json',
        },
    });
    return response.data.query.search;
};
