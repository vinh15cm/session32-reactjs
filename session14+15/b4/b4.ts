class User {
    id: number;
    posts: Post[];
    followers: User[];

    constructor(id: number) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }

    createPost(content: string): void {
        const post = new Post(this.id, content);
        this.posts.push(post);
    }

    comment(post: Post, content: string, parentComment?: Comment): void {
        const comment = new Comment(this.id, content);
        if (parentComment) {
            parentComment.addReply(comment);
        } else {
            post.addComment(comment);
        }
    }

    follow(user: User): void {
        this.followers.push(user);
    }

    likePost(post: Post): void {
        post.addLike(this);
    }

    viewFeed(): Post[] {
        let feed: Post[] = [];
        this.followers.forEach(user => {
            feed = feed.concat(user.posts);
        });
        return feed;
    }
}

class Post {
    id: number;
    userId: number;
    content: string;
    likes: User[];
    comments: Comment[];

    constructor(userId: number, content: string) {
        this.id = Math.floor(Math.random() * 1000); // Random ID for simplicity
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }

    addLike(user: User): void {
        this.likes.push(user);
    }

    addComment(comment: Comment): void {
        this.comments.push(comment);
    }
}

class Comment {
    id: number;
    userId: number;
    content: string;
    replies: Comment[];

    constructor(userId: number, content: string) {
        this.id = Math.floor(Math.random() * 1000); // Random ID for simplicity
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }

    addReply(reply: Comment): void {
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
