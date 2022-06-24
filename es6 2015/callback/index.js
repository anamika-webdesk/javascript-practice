const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
  { title: "Post Three", body: "This is post three" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById("demoCallback").innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  // callback function is a function that is passed into another function as an argument and is called when the function that is passed into it is finished.
  setTimeout(() => {
    posts.push(post);
    callback(); // callback function is called here because it is asynchronous function and we need to call it after the post is created
  }, 2000);
}

getPosts();
createPost({ title: "Post Four", body: "This is post four" }, getPosts);
