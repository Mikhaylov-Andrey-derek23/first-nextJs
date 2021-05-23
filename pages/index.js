import Link from 'next/link';


import MainLayout from '../components/MainLayout';

export default function Index(){
  
  return(
    <MainLayout title={"Home page"}>
      <h1>Helloy Next.js!!</h1>
      <Link href={'/posts'}>
        <a>Posts</a>
      </Link>
        
    </MainLayout>

  )
}