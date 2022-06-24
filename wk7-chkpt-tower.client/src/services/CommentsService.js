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

}

export const commentsService = new CommentsService()