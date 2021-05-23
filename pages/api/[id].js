import Data from '../../app/post.json';
export default function echo(req, res){ 
    res.json({
        post : Data.filter((e)=> {
            return e.id === parseInt(req.query.id)
        })
    })
}