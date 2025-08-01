import axios from "axios"
const SearchImages=async (term)=>{
    const response=await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID aMC7BmCxb7cjidnl7RQoV6Vj29lllq76GXQc2S2SeyI'
        },
        params:{
            query:term
        }
                
    })
    
    return response.data.results
}
export default SearchImages