import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetail = () => {

    const { id } = useParams();

    return ( 
        <div className="blog-detail">
            <h1>
                Blog detail- {id}
            </h1>
        </div>
     );
}
 
export default BlogDetail;