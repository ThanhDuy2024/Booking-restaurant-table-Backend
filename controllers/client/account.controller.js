const AccountClient = require("../../model/accountClient.model");
const bcrypt = require('bcryptjs')
module.exports.register = async (req, res) => {
  const {fullName, email, password} = req.body

  try {
    const exitsEmail = await AccountClient.findOne({
      email
    })

    if(exitsEmail) {
      res.json({
        code: "error",
        message: "Email has exited"
      })
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const accountUser = new AccountClient({
      fullName: fullName,
      email: email,
      password: hashPassword,
      status: "active",
      deleted: false
    });

    await accountUser.save();

    res.json({
      code: "success",
      message: "register has completed"
    })
  } catch (error) {
    console.log(error);
    res.json({
      code: "error",
      message: "register has uncompleted"
    })
  }
}