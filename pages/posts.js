import Router from 'next/router';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';


import MainLayout from '../components/MainLayout';
import settings from '../app/setings.json';

export default function Post({serverPosts}){

    const [posts, setPosts] = useState(serverPosts);
    useEffect(()=>{
        async function load(){
            const url = settings.sourse;
            const respons = await fetch(`${url}/api`)
            const json = await respons.json();
            setPosts(json.posts);
        }
        if(serverPosts === false){
            load();
        }
        
    }, [])

    const LinkChickHandler = (href) => {
        Router.push(href)
    }

    return(
        <MainLayout title="Posts page">
            <h1>Posts</h1>
            <ul>
                {posts ? 
                    posts.map(p =>
                            <li key={p.id}>
                                <Link href={'/post/[id]'} as = {`/post/${p.id}`}>
                                    <a>
                                        {p.title}
                                    </a>
                                </Link>
                            </li>
                        )
                    : <p>Loading...</p>
                }
            </ul>
            <button onClick={()=>LinkChickHandler('/')}>Go back to home</button>
        </MainLayout>
    )
}

Post.getInitialProps = async ({req}) => {
    if(!req){
        return{
            serverPosts : false
        }
    }
    const url = settings.sourse;
    const respons = await fetch(`${url}/api`)
    const json = await respons.json();
    return {
        serverPosts : json.posts
    }
} 

