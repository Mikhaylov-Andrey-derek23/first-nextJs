import {useRouter} from 'next/router';
import React, {useState, useEffect} from 'react';
import Link from "next/link";

import settings from '../../app/setings.json';
import MainLayout from '../../components/MainLayout';

export default function Post({serverPost}){
    const router = useRouter();

    const [post, setPost] = useState(serverPost);
    useEffect(()=>{
        async function load(){
            const url = settings.sourse;
            const respons = await fetch(`${url}/api/${router.query.id}`)
            const json = await respons.json();
            setPost(json.post[0]);
        }
        if(serverPost === false){
            load();
        }
        
    }, [])
    return(
        <MainLayout title={`Post № ${router.query.id}`}>
            {post ?
                <> 
                    <h1>Post № {post.id}</h1>
                    <hr/>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <br/>
                    <Link href="/posts/">
                        <a>
                            Go to page posts
                        </a>
                    </Link>
                </>
                : 
                <p>Loading....</p>
            }
            
        </MainLayout>
    )
}

Post.getInitialProps = async ({query, req}) =>{
    if(!req){
        return{
            serverPost : false
        }
    }
    const url = settings.sourse;
    const respons = await fetch(`${url}/api/${query.id}`)
    const json = await respons.json();
    return {
        serverPost : json.post[0]
    }
}