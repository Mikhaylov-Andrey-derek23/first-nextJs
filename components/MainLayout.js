import Head from 'next/head'; 
import Link from 'next/link';
import {useRouter} from 'next/router'

export default function MainLayout({children, title = 'Next app'}){
    const router = useRouter();
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> 
                <meta name="description" content="Сайт об HTML и создании сайтов"/>
                <meta charSet="utf-8"/> 
            </Head>
            <nav>
                <Link href={'/'}>
                    <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
                </Link>
                <Link href={'/about'}>
                    <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
                </Link>
                <Link href={'/posts'}>
                    <a className={router.pathname.indexOf('/post') >= 0 ? 'active' : ''}>Posts</a>
                </Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>
                {
                    `
                        nav{
                            position: fixed;
                            top : 0;
                            left: 0;
                            background-color: darkblue;
                            height: 60px;
                            width : 100%;
                            display: flex;
                            justify-content: space-around;
                            align-items: center; 
                        }
                        nav a{
                            color: white;
                            text-decoration : none;
                        }
                        nav a.active{
                            color : red;

                        }
                        main {
                            padding: 1rem;
                            max-width: 1100px;
                            margin: 60px auto;
                        }

                    `
                }
            </style>
            
        </>
    )

} 