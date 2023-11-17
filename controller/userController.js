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
      return res.status(400).json({ success: false, data: null });
    }
  } catch (e) {
    return res.status(500).json({ err: e.message });
  }
};

exports.getAccountDetailsById = async (req, res) => {
  try {
    const uid = req.params.id;
    const data = await userModel.findOne(
      { _id: uid },
      { u_name: 1, full_name: 1, u_email: 1, u_password: 1 }
    );
    if (data) {
      return res.status(200).json({ success: true, data });
    } else {
      return res.status(400).json({ success: false, data: null });
    }
  } catch (e) {
    return res.status(500).json({ err: e.message });
  }
};

exports.updatePersonalDetailsById = async (req, res) => {
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

exports.updateAccountDetailsById = async (req, res) => {
  try {
    const uid = req.params.id;
    const { full_name, u_name, u_email, u_password } = req.body;

    // check if any field is empty
    if ([full_name, u_name, u_email, u_password].includes("")) {
      return res
        .status(400)
        .json({ success: false, message: "Some fields are empty" });
    }

    // check if username is already taken
    const user = await userModel.findOne({ _id: { $nin: [uid] }, u_name });
    if (user !== null) {
      return res
        .status(200)
        .json({ success: false, message: `${u_name} is already taken` });
    }

    // update user account details
    const data = await userModel.findOneAndUpdate(
      { _id: uid },
      {
        full_name,
        u_name,
        u_email,
        u_password,
      }
    );

    if (data) {
      return res
        .status(200)
        .json({ success: true, message: "Data updated successfully" });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Data not updated" });
    }
  } catch (e) {
    return res.status(500).json({ err: e.message });
  }
};
