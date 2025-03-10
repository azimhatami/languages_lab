const express = require('express');
const { errorHandler, notFoundError } = require('./util/ErrorHandler');
require('./config/mongo.config')
const {BlogModel} = require('./model/blog.model');
const { isValidObjectId } = require('mongoose');
const omitEmpty = require('omit-empty');


const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res, next) => {
  res.send('Hello Test')
})

app.post('/create', async (req, res, next) => {
  try {
    const { title, text } = req.body;
    const result = await BlogModel.create({
      title,
      text
    });
  
    res.send(result)
  } catch (error) {
    next(error)
  }
})

app.post('/new', async (req, res, next) => {
  try {
    const { title, text } = req.body;
    // create new instance method
    const newBlog = new BlogModel({
      title,
      text
    });

    await newBlog.save()
    res.send(newBlog)

  } catch (error) {
    next(error)
  }
})

app.get('/insert-many', async (req, res, next) => {
  try {
    const { title, text } = req.body;
    // create new instance method
    const newBlogs = await BlogModel.insertMany([
      {
        title: 'One blog',
        text: 'Description one'
      },
      {
        title: 'Two blog',
        text: 'Description two'
      },
      {
        title: 'Three blog',
        text: 'Description three'
      }
    ]);

    res.send(newBlogs)

  } catch (error) {
    next(error)
  }
})

app.get('/blogs', async (req, res, next) => {
  const blogs = await BlogModel.find();
  res.send({
    statusCode: 200,
    documentCount: blogs.length,
    blogs
  })
})

app.get('/blogs/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    if (!isValidObjectId(id)) throw {status: 400, message: 'your id is not valid id'}
    const blog = await BlogModel.findOne({_id: id});
    res.send(blog)
  } catch (error) {
    next(error)
  }
})

app.delete('/blogs/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    if (!isValidObjectId(id)) throw {status: 400, message: 'your id is not valid id'}
    const result = await BlogModel.deleteOne({_id: id});
    res.send(result)
  } catch (error) {
    next(error)
  }
})

app.put('/blogs/:id', async (req, res, next) => {
  try {
    const newBodyObject = omitEmpty(req.body)
    const {id} = req.params;
    const blog = await BlogModel.findOne({_id: id});
    if (!blog) throw {status: 404, message: 'not found blog'}
    Object.assign(blog, newBodyObject)
    await blog.save()
    res.send(blog)
  } catch (error) {
    next(error)
  }
})

app.patch('/blogs/:id', async (req, res, next) => {
  try {
    const newBodyObject = omitEmpty(req.body)
    const {id} = req.params;
    const blog = await BlogModel.findOne({_id: id});
    if (!blog) throw {status: 404, message: 'not found blog'}
    const result = await BlogModel.updateOne({_id: id}, {
      $set: newBodyObject
    })
    res.send(result)
  } catch (error) {
    next(error)
  }
})

app.use(notFoundError)
app.use(errorHandler)

app.listen(3000, () => {
  console.log('server run on port 3000: http://localhost:3000');
})
