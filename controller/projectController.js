const projectModel = require("../models/projectsModel");

exports.addProject = async (req, res) => {
  try {
    const {
      project_name,
      tagline,
      image,
      github_repo,
      project_url,
      description,
    } = req.body;

    const uid = req.params.id;

    // validate if all fields are not empty
    if (
      [
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

    // save data into db
    const data = await projectModel.updateOne(
      { _id: uid },
      {
        $set: {
          _id: uid,
          project_name,
          tagline,
          image,
          github_repo,
          project_url,
          description,
        },
      },
      { upsert: true }
    );

    if (data) {
      return res
        .status(200)
        .json({ success: true, message: "Data updated successfully" });
    } else {
      return res
        .status(400)
        .json({ success: true, message: "Data not updated successfully" });
    }
  } catch (e) {
    return res.status(500).json({ err: e.message });
  }
};
