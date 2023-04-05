import joi from "joi";

const zookeeperSchema = joi.object({
  name: joi.string().required(),
  age: joi.number().required().min(18).max(120),
  location: joi.string().required(),
  isActive: joi.boolean().required(),
});

const zookeepersValidator = (req, res, next) => {
  const zookeepersData = req.body;
  const validate = zookeeperSchema.validate(zookeepersData);

  if (validate?.error) {
    res.status(400).send(validate?.error?.details[0]?.message);
  } else {
    next();
  }
};

export default zookeepersValidator;
