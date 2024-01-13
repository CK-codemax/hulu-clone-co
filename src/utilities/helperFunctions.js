

export function arrangeData(data) {
const newData = data?.filter(item => item.backdrop_path !== null || item.poster_path !== null);
return newData;
}