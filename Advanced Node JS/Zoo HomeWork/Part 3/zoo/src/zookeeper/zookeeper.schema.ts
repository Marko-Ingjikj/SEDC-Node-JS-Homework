import { Schema } from 'mongoose';

export const ZookeeperSchema = new Schema({
  id: String,
  name: String,
  age: Number,
  location: String,
  isActive: Boolean,
});
