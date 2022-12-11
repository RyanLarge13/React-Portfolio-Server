import mongoose from "mongoose";

const getProjectsFromCollection = async () => {
  try {
    let projectsCollection = mongoose.connection.collection("projects");
    let allProjects = await projectsCollection.find({}).toArray();
    return allProjects;
  } catch (err) {
    return err;
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
  const projects = await getProjectsFromCollection();
  res.status(200).json({ data: projects });
};

export const sendBlogs = async (req, res) => {
  const blogs = await getBlogsFromCollection();
  res.status(200).json({ blogData: blogs });
};
