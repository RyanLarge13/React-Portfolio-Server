import mongoose from "mongoose";

const getProjectsFromCollection = async (pageNum) => {
  try {
    const itemAmount = 6;
    let projectsCollection = mongoose.connection.collection("projects");
    let allProjects = await projectsCollection
      .find({})
      .skip(Number(pageNum) * itemAmount)
      .limit(itemAmount)
      .toArray();
    return allProjects;
  } catch (err) {
    return console.log(err);
  }
};

const getBlogsFromCollection = async () => {
  try {
    let blogCollection = mongoose.connection.collection("blogs");
    let blogs = await blogCollection.find({}).toArray();
    return blogs;
  } catch (err) {
    console.log(err);
  }
};

export const sendProjects = async (req, res) => {
  const pageNum = req.params.page;
  const projects = await getProjectsFromCollection(pageNum);
  res.status(200).json({ data: projects });
};

export const sendBlogs = async (req, res) => {
  const blogs = await getBlogsFromCollection();
  res.status(200).json({ blogData: blogs });
};
