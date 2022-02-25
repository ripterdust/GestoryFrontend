export const getUrl = ( site : string ) : string => {

    const url = `http://localhost:3000/api/${site}`
    console.log(url)
    return url;
}