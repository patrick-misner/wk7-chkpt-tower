import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class CommentsService {

  async getComments(eventId){
    logger.log('get commets service hit')
    const res = await api.get('api/events/' + eventId + '/comments')
    logger.log('comments service res', res.data)
    AppState.comments = res.data
  }
  async postComment(comment) {
    const res = await api.post('api/comments', comment)
    AppState.comments.unshift(res.data)
  }
  async deleteComment(commentId){
    const res = await api.delete('api/comments/' + commentId)
    AppState.comments = AppState.comments.filter(c => c.id != commentId)
  }

}

export const commentsService = new CommentsService()