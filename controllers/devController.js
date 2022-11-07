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

export const sendProjects = async (req, res) => {
  const projects = await getProjectsFromCollection();
  res.status(200).json({ data: projects });
};
