import axios from 'axios';

const WIKIVOYAGE_API_URL = 'https://wikivoyage.org/wiki/en/api.php';

export const fetchRecommendations = async (query: string) => {
    const response = await axios.get(WIKIVOYAGE_API_URL, {
        params: {
            action: 'query',
            list: 'search',
            srsearch: query,
            format: 'json',
        },
    });
    return response.data.query.search;
};
