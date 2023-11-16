const userModel = require("../models/userModel");

exports.getUserById = async (req, res) => {
  try {
    const uid = req.params.id;
    const data = await userModel.findOne(
      { _id: uid },
      { u_password: 0, role: 0 }
    );
    if (data) {
      return res.status(200).json({ success: true, data });
    } else {
      return res.status(200).json({ success: false, data: null });
    }
  } catch (e) {
    return res.status(500).json({ err: e.message });
  }
};

exports.addPersonalDetails = async (req, res) => {
  try {
    const uid = req.params.id;
    const {
      full_name,
      u_email,
      u_contact,
      u_description,
      u_company_name,
      u_work_experience,
      u_city,
      u_country,
      u_image,
      u_resume,
      skills,
      leetcode,
      codeforces,
      gfg,
      linkedin,
    } = req.body;

    const data = await userModel.findOneAndUpdate(
      { _id: uid },
      {
        $set: {
          full_name,
          u_email,
          u_contact,
          u_description,
          u_company_name,
          u_work_experience,
          u_city,
          u_country,
          u_image,
          u_resume,
          skills,
          leetcode,
          codeforces,
          gfg,
          linkedin,
        },
      }
    );

    if (data) {
      return res
        .status(200)
        .json({ success: true, message: "Data updated successfully" });
    } else {
      return res.status(400).json({
        success: false,
        message: "Data not updated some error occured",
      });
    }
  } catch (e) {
    return res.status(500).json({ err: e.message });
  }
};
