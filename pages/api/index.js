import Data from '../../app/post.json';
export default function echo(res, req){
    req.json({
        posts : Data
    })
}