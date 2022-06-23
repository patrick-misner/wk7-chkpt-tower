import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CommentsSchema } from "../models/Comments";
import { EventsSchema } from "../models/Events";
import { TicketsSchema } from "../models/Tickets";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Events = mongoose.model('Events', EventsSchema);
  Comments = mongoose.model('Comments', CommentsSchema)
  Tickets = mongoose.model('Tickets', TicketsSchema)
}

export const dbContext = new DbContext()
