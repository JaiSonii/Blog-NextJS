import PostGrid from '../posts/post-grid'
import classes from './featured-posts.module.css'

export default function FeaturedPosts(props){
    return(
        <section className={classes.latest}>
            <h1>Featured Posts</h1>
            <PostGrid posts={props.posts}/>
        </section>
    )
}