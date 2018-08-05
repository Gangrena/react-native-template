import { agent } from '../../../app/api/index'

const Posts = {
  getAll: () => agent.get('/posts'),
  post: (data: any) => agent.post('/posts', data),
}

export default Posts
