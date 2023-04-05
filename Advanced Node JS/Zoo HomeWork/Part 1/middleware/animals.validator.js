import joi from "joi";

const AnimalsSchema = joi.object({
  name: joi.string().required(),
  type: joi.string().required(),
  age: joi.number().required(),
  location: joi.string().required(),
  gender: joi.string().required(),
  characteristics: joi.object({
    food: joi.array().required(),
    colour: joi.string().required(),
    isDangerous: joi.boolean().required(),
    weight: joi.number().required(),
    enclosure: joi.string().required(),
  }),
});

const animalsValidator = (req, res, next) => {
  const animalsData = req.body;
  const validate = AnimalsSchema.validate(animalsData);

  if (validate?.error) {
    res.status(400).send(validate?.error?.details[0]?.message);
  } else {
    next();
  }
};

export default animalsValidator;
