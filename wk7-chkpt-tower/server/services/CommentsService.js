import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"
import { eventsService } from "./EventsService"

class CommentsService{
  async getAll(query = {}){
    let comments = await dbContext.Comments.find(query).sort({ createdAt: -1 }).populate('creator', 'name picture')
    return comments
  }


  async create(commentData){
    let comment = await dbContext.Comments.create(commentData)
    await comment.populate('creator', 'name picture')
    await comment.populate('event')
    return comment
    }
  async edit(commentId, update){
    const original = await dbContext.Comments.findById(commentId)
    .populate('creator', 'name picture')
    if (original.creatorId.toString() != update.creatorId) {
      throw new BadRequest("You do not have permission to edit this Event")
    }
    original.body = update.body || original.body
    original.save()
    return update
  }

  async delete(eventId, userId){
    const comment = await dbContext.Comments.findById(eventId)
    if (comment.creatorId.toString() != userId){
      throw new BadRequest("You don't have permission to delete this event")
    }
    await comment.remove()
    return `deleted comment`
  }
  }


export const commentsService = new CommentsService()