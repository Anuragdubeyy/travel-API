import axios from "axios";





export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data }} = await axios.get( `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
        {


            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
        
            },
            headers: {
                'X-RapidAPI-Key': '722e1b9e2amshb3f93bd4b54bdf1p1fb508jsn3553cd0b3d83',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',

            }
            
        });

        return data;


    } catch (error) {
        console.log(error)

    }
}


export const getWeatherData = async (lat, lng) => {
    try {
        const {data} = await axios.get('https://open-weather13.p.rapidapi.com/city/landon', {
            params: { lon: lng, lat: lat},
            headers: {
                'X-RapidAPI-Key': '722e1b9e2amshb3f93bd4b54bdf1p1fb508jsn3553cd0b3d83',
                'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
            }
        });

        return data;

    } catch ( error){
        console.log(error)

    }
}