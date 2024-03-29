import mongoose from "mongoose";
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const CommentsSchema = new Schema({
  eventId: {type: ObjectId, required: true, ref: 'Events'},
  body: {type: String, required: true},
  creatorId: {type: ObjectId, required: true, ref: 'Account'},
  isAttending: { type: Boolean, default: false }
},
{ timestamps: true, toJSON: { virtuals: true }}
)

CommentsSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})

CommentsSchema.virtual('event', {
  localField: 'eventId',
  foreignField: '_id',
  ref: 'Events',
  justOne: true
})