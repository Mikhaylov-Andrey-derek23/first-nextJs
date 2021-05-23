import MainLayout from '../components/MainLayout';
import classes from '../styles/eror.module.scss';

export default function ErrorPage(){

    return(
        <MainLayout title="404 page">
            <h1 className={classes.error}>Page not found</h1>
        </MainLayout>
    )
}