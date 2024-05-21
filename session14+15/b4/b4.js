"use strict";
class User {
    constructor(id) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    createPost(content) {
        const post = new Post(this.id, content);
        this.posts.push(post);
    }
    comment(post, content, parentComment) {
        const comment = new Comment(this.id, content);
        if (parentComment) {
            parentComment.addReply(comment);
        }
        else {
            post.addComment(comment);
        }
    }
    follow(user) {
        this.followers.push(user);
    }
    likePost(post) {
        post.addLike(this);
    }
    viewFeed() {
        let feed = [];
        this.followers.forEach(user => {
            feed = feed.concat(user.posts);
        });
        return feed;
    }
}
class Post {
    constructor(userId, content) {
        this.id = Math.floor(Math.random() * 1000); // Random ID for simplicity
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }
    addLike(user) {
        this.likes.push(user);
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class Comment {
    constructor(userId, content) {
        this.id = Math.floor(Math.random() * 1000); // Random ID for simplicity
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
// Example usage
const user1 = new User(1);
const user2 = new User(2);
user1.createPost("Hello, this is my first post!");
user2.createPost("Nice weather today!");
user1.likePost(user2.posts[0]);
user1.comment(user2.posts[0], "Yes, it's beautiful!");
const comment = user2.posts[0].comments[0];
user2.comment(user2.posts[0], "Thank you!");
user1.viewFeed().forEach(post => {
    console.log(`Post by User ${post.userId}: ${post.content}`);
});
