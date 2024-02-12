import classes from './all-posts.module.css'
import PostGrid from './post-grid'

export default function AllPosts(props){
    return (
        <section className={classes.posts}>
            <PostGrid posts={props.posts}/>
        </section>
    )
}