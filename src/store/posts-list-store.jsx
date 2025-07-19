import { createContext } from "react";
const DEFAULT_CONTEXT  = createContext({postList:[],
  addPost:()=>{},
  deletePost:()=>{},});
const postListReducer = (currPostList,action)=>{
  return currPostList;
}
const PostListProvider = ({ children }) => {
  const [postList,dispatchPostList]=useReducer();
  const addPost = () => {};
  const deletePost = () => {};
  return <PostList.Provider value={{postList,addPost,deletePost}}>{children}</PostList.Provider>;
};
export default PostListProvider;
