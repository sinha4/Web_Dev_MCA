import axios from "axios"
const SearchImages=async (term)=>{
    const response=await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID 5cgFu4VxgY9XdDE2VY8hfPZSrTqBoLvLfxBadtMjclI'
        },
        params:{
            query:term
        }
                
    })
    
    return response.data.results
}
export default SearchImages