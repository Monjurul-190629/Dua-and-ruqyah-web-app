export const getCategories = async () => {
    const response = await fetch('https://dua-and-ruqyah-web-app-production.up.railway.app/categories');
    const result = response.json();
    return result;
}