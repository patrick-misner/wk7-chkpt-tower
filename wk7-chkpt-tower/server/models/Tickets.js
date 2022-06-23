import mongoose from "mongoose";
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const TicketsSchema = new Schema({
  eventId: {type: ObjectId, required: true, ref: 'Events'},
  accountId: {type: ObjectId, required: true, ref: 'Account'},
},
{ timestamps: true, toJSON: { virtuals: true }}
)

TicketsSchema.virtual('account', {
  localField: 'accountId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})

TicketsSchema.virtual('event', {
  localField: 'eventId',
  foreignField: '_id',
  ref: 'Events',
  justOne: true
})