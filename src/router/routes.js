import PostsList from '../components/PostsList.vue';
import PostDetails from '../components/PostDetails.vue';


export const routes = [
  {
    path: '/',
    name:'PostsList',
    component: PostsList
  },
  {
    path: '/post/:id',
    name: 'PostDetails',
    component: PostDetails
  }
]
  