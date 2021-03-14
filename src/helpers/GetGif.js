
export const getGif =async(category)=>{
        const url = `https://api.giphy.com/v1/gifs/search?api_key=mOfj8RRUunH3r5LIpejzoraehFH3lOFn&q=${category}&limit=10`

        const respuesta = await fetch(url)
        const {data} = await respuesta.json()

        const gif = data.map( img => (
            {
                id: img.id,
                title:img.title,
                url : img.images.downsized_medium.url
            }
        ))

        return gif
    }
