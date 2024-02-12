
import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts"
import { getAllPosts } from "../../lib/posts-utils"
import Head from "next/head";

export default function AllPostsPage(props){
    
    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <description>Browse all the posts and lets connect</description>
            </Head>
            <AllPosts posts={props.posts}/>
        </Fragment>
        
    )
}

export function getStaticProps(){
    const allPosts = getAllPosts();
    return {
        props:{
            posts : allPosts
        },
        revalidate: 600
    }
}