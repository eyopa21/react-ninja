
import {useState, useEffect} from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsloading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

   

        fetch(url).then(res => {
            if (!res.ok) {
                throw Error('Cannot fetch this data');
            }
           return res.json()
        }).then(data => {
            console.log("data", data)
            setError(null)
            setData(data)
            setIsloading(false)
        }).catch(err => {
            if (err.name === 'AbortError') {
                console.log("fetch aborted")
            } else {
                
                setError(err.message)
                setIsloading(false)
            }
        })
      
    }, [])

    return {data, isLoading, error}
}

export default useFetch;