import PostsList from '../components/PostsList.vue';
import PostDetails from '../components/PostDetails.vue';
// import SinglePost from '@/components/SinglePost.vue';
import PostItem from '../components/PostItem.vue';


export const routes = [
  {
    path: '/',
    name:'PostsList',
    component: PostsList
  },
  {
    path: '/single',
    name: 'PostItem',
    component: PostItem
  },
  {
    path: '/details/:id',
    name: 'PostDetails',
    component: PostDetails
  }
]
  