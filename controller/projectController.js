const projectModel = require("../models/projectsModel");

exports.getAllProjectsById = async (req, res) => {
  try {
    const uid = req.params.id;
    const data = await projectModel.find({ uid });
    if (data) {
      return res.status(200).json({ success: true, data });
    } else {
      return res.status(400).json({ succss: false, data: null });
    }
  } catch (e) {
    return res.status(500).json({ err: e.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const { uid, pid } = req.params;
    const data = await projectModel.findOne({ _id: pid, uid: uid });
    if (data) {
      return res.status(200).json({ success: true, data });
    } else {
      return res.status(400).json({ succss: false, data: null });
    }
  } catch (e) {
    return res.status(500).json({ err: e.message });
  }
};

exports.updateProjectById = async (req, res) => {
  try {
    const {
      uid,
      pid,
      project_name,
      tagline,
      image,
      github_repo,
      project_url,
      description,
    } = req.body;

    // validate if all fields are not empty
    if (
      [
        uid,
        pid,
        project_name,
        tagline,
        image,
        github_repo,
        project_url,
        description,
      ].includes("")
    ) {
      return res
        .status(200)
        .json({ success: false, message: "Please fill all fields" });
    }

    const data = await projectModel.findOneAndUpdate(
      { _id: pid, uid: uid },
      {
        $set: {
          project_name,
          tagline,
          image,
          github_repo,
          project_url,
          description,
        },
      }
    );

    if (data) {
      return res
        .status(200)
        .json({ success: true, message: "Data updated successfully" });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Data not updated successfully" });
    }
  } catch (e) {
    return res.status(500).json({ err: e.message });
  }
};

// pagination
exports.getAllProjectsByIdPagination = async (req, res) => {
  try {
    const page = parseInt(req.params.page);
    let limitCount = 12;
    let skipCount = (page - 1) * limitCount;

    const result = await projectModel
      .find()
      .limit(limitCount)
      .skip(skipCount);

    const allProjects = await projectModel.find();
    const totalLength = allProjects.length;
    const count = Math.ceil(totalLength / limitCount);

    console.log(page);

    if (result) {
      return res.status(200).json({
        success: true,
        data: result,
        pageCount: count == 0 ? 1 : count,
      });
    } else {
      return res.status(400).json({
        success: false,
        data: null,
        pageCount: 0,
      });
    }
  } catch (e) {
    return res.status(500).json({ err: e.message });
  }
};

exports.addProject = async (req, res) => {
  try {
    const {
      uid,
      project_name,
      project_domain,
      tagline,
      image,
      github_repo,
      project_url,
      description,
    } = req.body;

    // validate if all fields are not empty
    if (
      [
        uid,
        project_name,
        project_domain,
        tagline,
        github_repo,
        project_url,
        description,
      ].includes("")
    ) {
      return res
        .status(200)
        .json({ success: false, message: "Please fill all fields" });
    }

    // save data into db
    const data = await projectModel.create({
      uid,
      project_name,
      project_domain,
      tagline,
      image,
      github_repo,
      project_url,
      description,
    });

    if (data) {
      return res
        .status(200)
        .json({ success: true, message: "Data updated successfully" });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Data not updated successfully" });
    }
  } catch (e) {
    return res.status(500).json({ err: e.message });
  }
};
