import axios from "axios";
const API_KEY = '28190509-ff23f124c1d07477982e37228';

export const getImages = async (search, page) => {
    const response = await axios.get(
        `https://pixabay.com/api/?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        if (response.status !== 200) {
            throw new Error(`Bad response, ${response.status}`);
        }
        return response.data.hits.map(formatImage);
    };

const formatImage = image => ({
        id: image.id,
        tags: image.tags,
        webformatURL: image.webformatURL,
        largeImageURL: image.largeImageURL,
    });