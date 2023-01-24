import Layout from '../components/Layout'
import Link from 'next/link'
import { posts } from '../profile'



const PostCard = ({post}) => (
    <div className="col-md-4">
        {/* bg-dark */}
        <div className="card ">
            <div className="overflow">
                    <img src={post.imageURL} className="card-img-top" alt="" />
            </div>

            <div className="card-body">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
                        <button className='btn btn-light'>Read</button>
                    </Link>
            </div>
        </div>
    </div>
)


const Blog = () =>  (
    <Layout footer={false}  title="My blog "> 
        <div className="row">
            {
                posts.map( (post, index) => (
                    <PostCard post={post} key={index}> </PostCard>
                ))
            }
        </div>
    </Layout>
    )
export default Blog