import { Fragment } from "react";
import Hero from '../components/home-page/hero';
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import { getFeaturedPosts } from "../lib/posts-utils";
import Head from "next/head";
function HomePage(props) {

    return (
        <Fragment>
            <Head>
                <title>Jai' Blog</title>
                <description>Welcome to the Blog. Programmers and porblem solvers are welcome!</description>
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    )
}

export function getStaticProps(){
    const featuredPosts = getFeaturedPosts();

    return{
        props:{
            posts: featuredPosts
        },
        revalidate : 600
    }
}

export default HomePage;