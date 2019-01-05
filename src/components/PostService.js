import Vue from 'vue';
import _ from 'lodash';
import { postsRef } from '../config/db';

export default new Vue({
    props:{
        posts: Array
    },
    data(){
        return{
            // posts:[]
        }
    },
    firebase: {
    	posts: postsRef
	},
    methods:{
        viewDetails(key){
			// let key_id = this.post['.key'];
			let postToView = _.find(this.posts, {'.key': key}) 
			this.$emit("viewDetails", postToView);
			console.log(postToView);
		}
    }
})