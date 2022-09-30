// components/Post.js
export default function Post(props) {
    const post = props.post;
  
    return (


<div class="w-1/2 h-full flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
<div>
<h4 class="text-gray-800 dark:text-gray-100 font-bold mb-3">{post.metadata.name}</h4>
{console.log(post.metadata.media?.[0])}
    {/* <p class="text-gray-800 dark:text-gray-100 text-sm">{post.metadata.media && post.metadata.media.original?.uri}</p> */}
    <p class="text-gray-800 dark:text-gray-100 text-sm">{post.metadata.content}</p>
</div>
<div>
  <hr className="mt-10 mb-2"></hr>
    <div class="  flex items-center justify-between text-gray-800 dark:text-gray-100">
        
        <p class="text-sm">{post.createdAt.substring(0,10)}</p>
        <p class="text-sm">Mirrors: {post.stats.totalAmountOfMirrors}</p>
        <p class="text-sm">Collects: {post.stats.totalAmountOfCollects}</p>
        <p class="text-sm">Comments: {post.stats.totalAmountOfComments}</p>
  
  
    </div>
</div>
</div>
    );
  }