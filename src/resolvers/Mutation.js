import { v4 as uuidv4 } from "uuid";

const Mutation = {
  createUser(parent, args, { db }, info) {
    const emailTaken = db.user.some((item) => item.email === args.data.email);
    if (emailTaken) {
      throw new Error("Email is already taken");
    }
    const u = {
      id: uuidv4(),
      ...args.data,
    };
    db.user.push(u);
    return u;
  },
  updateUser(parent, args, { db }, info) {
    const { id, data } = args;
    const user = db.user.find((item) => item.id === id);
    if (!user) {
      throw new Error("User not found");
    }
    if (typeof data.email === "string") {
      const isEmail = db.user.some((item) => item.email === data.email);
      if (isEmail) {
        throw new Error("Email already taken");
      }
      user.email = data.email;
    }
    if (typeof data.name === "string") {
      user.name = data.name;
    }
    if (typeof data.age !== "undefined") {
      user.age = data.age;
    }
    return user;
  },
  deleteUser(parent, args, { db }, info) {
    const userIndex = db.user.findIndex((item) => item.id === args.id);
    if (userIndex === -1) {
      throw new Error("User not found");
    }
    const deleted = db.user.splice(userIndex, 1);
    posts = db.posts.filter((item) => item.author !== args.id);
    return deleted[0];
  },
  createPost(parent, args, { db }, info) {
    const userExists = db.user.some((item) => item.id === args.data.author);
    if (!userExists) {
      throw new Error("User not found");
    }
    const p = {
      id: uuidv4(),
      ...args.data,
    };
    db.posts.push(p);
    return p;
  },
  updatePost(parent, args, { db }, info) {
    const { id, data } = args;
    const post = db.posts.find((item) => item.id === id);
    if (!post) {
      throw new Error("Post not found");
    }
    if (typeof data.title === "string") {
      post.title = data.title;
    }
    if (typeof data.body === "string") {
      post.body = data.body;
    }
    return post;
  },
  deletePost(parent, args, { db }, info) {
    const postIndex = db.posts.findIndex((item) => item.id === args.id);
    if (postIndex === -1) {
      throw new Error("Post not found");
    }
    const deleted = db.posts.splice(postIndex, 1);
    return deleted[0];
  },
};

export { Mutation as default };
