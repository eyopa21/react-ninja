
import BlogList from "./BlogList";
import useFetch from './useFetch'
const Home = () => {

  const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            
            <div> 
                {error && <div>{ error}</div>}
               {isLoading&& <div>loading...</div>}
                {blogs && <BlogList blogs={blogs} title="All Blogs!"  />}
            </div>
            
           
        </div>
    );
}
 
export default Home;