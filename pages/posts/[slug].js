import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/post-content"
import { getPostdata, getPostFiles } from "../../lib/posts-utils";
import Head from "next/head";


export default function PostPage(props){
    return(
        <Fragment>
        <Head>
            <title>{props.post.title}</title>
            <description>{props.post.excerpt}</description>
        </Head>
        <PostContent post={props.post}/>
        </Fragment>
    )
}

export function getStaticProps(context){
    const {params} = context;
    const {slug} = params;

    const postData = getPostdata(slug);
   
    return {
        props:{
            post: postData
        }
    }
}

export function getStaticPaths(){
    const fileNames = getPostFiles();
    const slugs = fileNames.map(fileName=>fileName.replace(/\.md$/, ''));

    return {
        paths: slugs.map(slug=>({params : {slug : slug}})),
        fallback : false
    }
}