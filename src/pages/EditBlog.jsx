import React,{useEffect, useState} from 'react'
import { useNavigate,  useParams } from 'react-router-dom';
import { BlogForm, Container } from '../components'
import queryService from '../appwrite/query';

const EditBlog = () => {
    const [blog, setBlog] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            queryService.getBlog(slug).then((blog) => {
                if (blog) {
                    console.log(blog)
                    setBlog(blog)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate]) 
  return (
    <div className='my-10'>
    <Container>{
      blog &&  <BlogForm blog={blog}/>
        }
    </Container>
</div>
  )
}

export default EditBlog
