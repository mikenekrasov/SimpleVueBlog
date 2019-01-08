import PostList from '../components/PostList.vue';
import PostDetails from '../components/PostDetails.vue';


export const routes = [{
    path: '/',
    name: 'PostList',
    component: PostList
  },
  {
    path: '/post/:id',
    name: 'PostDetails',
    component: PostDetails
  }
]