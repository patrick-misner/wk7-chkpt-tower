import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { EventsSchema } from "../models/Events";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Events = mongoose.model('Events', EventsSchema);
}

export const dbContext = new DbContext()
