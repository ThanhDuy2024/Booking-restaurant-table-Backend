const Joi = require('joi');
module.exports.register = (req, res, next) => {
  const {fullName, email, password} = req.body;
  const schema = Joi.object({
    fullName: Joi.string()
      .min(8)
      .max(50)
      .required()
      .messages({
        "string.min": "Tên phải chứa ít nhất 8 ký tự",
        "string.max": "Tên không được chứa nhiều nhất 50 ký tự",
        "string.empty": "Tên không được bỏ trống"
      }),
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .messages({
        "string.empty": "Email không được bỏ trống",
        "string.email": "Chỉ chấp nhận email .com hoặc .net"
      }),
    password: Joi.string()
      .required()
      .custom((value, heplers) => {
        if(!/[0-9]/.test(value)) {
          return heplers.error("string.digit");
        }

        if(!/[a-z]/.test(value) && !/[a-z]/.test(value)) {
          return heplers.error("string.lowercase")
        }
      })
      .messages({
        "string.empty": "Mật khẩu không được để trống",
        "string.digit": "Mật khẩu phải có ít nhất một chữ số",
        "string.lowrcase": "Mật khẩu phải có ít nhất một chữ cái in hoa hoặc in thường"
      })
  })

  const { error } = schema.validate({
    fullName,
    email,
    password
  })

  if(error) {
    res.json({
      code: "error",
      message: error.details[0].message
    })
    return;
  }
  next();
}