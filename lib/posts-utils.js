import fs, { futimes, readdirSync } from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostdata(postIdentifier){
    const postSlug = postIdentifier.replace(/\.md$/,'');
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data, content} = matter(fileContent);

    const postData = {
        slug: postSlug,
        ...data,
        content
    }
    return postData;
}

export function getPostFiles(){
    return fs.readdirSync(postsDirectory);
}

export function getAllPosts(){
    const postFiles = getPostFiles();

    const allPosts = postFiles.map(postFile=>{
        return getPostdata(postFile);
    });

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.data ? -1 : 1);

    return sortedPosts;

}

export function getFeaturedPosts(){
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post=>post.isFeatured);

    return featuredPosts;
}