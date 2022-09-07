export const getData = (key) => {

    try{
        return JSON.parse(localStorage.getItem(key));
    } catch (err) {
        console.error(`Error getting item ${key} from localStorage`, err);
    }
};

export const storeData = (key, item) => {
    try{
        return localStorage.setItem(key, JSON.stringify(item))
    } catch (err) {
        console.error('Error storing item ${key} to localStorage', err)
    }
};