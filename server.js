const express = require('express');
const app = express();
const port = 3000;
const users = [
    { id: 1, name: 'Alice', postCount: 10 },
    { id: 2, name: 'Bob', postCount: 15 },
    { id: 3, name: 'Charlie', postCount: 8 },
    { id: 4, name: 'David', postCount: 20 },
    { id: 5, name: 'Eve', postCount: 18 },
    { id: 6, name: 'Frank', postCount: 12 }
];
const posts = [
    { id: 1, userId: 1, content: 'Post about Ant', comments: 10, timestamp: 1711021200 },
    { id: 2, userId: 2, content: 'Post about Animals', comments:20, timestamp: 1711021300 },
    { id: 3, userId: 3, content: 'Post about Ocean', comments: 19, timestamp: 1711021400 },
    { id: 4, userId: 4, content: 'Post about Peoples', comments: 3, timestamp: 1711021500 },
    { id: 5, userId: 5, content: 'Post about Chocolates', comments:2, timestamp: 1711021600 }
];

app.use(express.json());
app.get('/users', (req, res) => {
    const newUsers = users.sort((a, b) => b.postCount - a.postCount).slice(0, 5);
    res.json(newUsers);
});
app.get('/posts',(req,res)=>{
    const type= req.query.type;
    if(type === 'popular'){
        const maximum=Math.max(...posts.map(post=>post.comments));
        const popularposts=posts.filter(post=>post.comments === maximum);
        res.json(popularposts);
    }
    else if(type === 'latest'){
        const latestPosts = posts.sort((a, b) => b.timestamp - a.timestamp).slice(0, 5);
        res.json(latestPosts);
    } else {
        res.status(400).json({ error: 'Invalid type. Use ?type=popular or ?type=latest' });
    }
});

app.listen(port,()=>{
    console.log(`Server is running on the port http://localhost:${port}`);
});