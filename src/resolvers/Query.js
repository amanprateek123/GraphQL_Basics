const Query = {
  me() {
    return {
      id: "Aman12",
      name: "Aman",
      age: 21,
      male: true,
      percent: 84.5,
    };
  },
  greeting(parent, args, ctx, info) {
    return args.name;
  },
  users(parent, args, { db }, info) {
    return db.user;
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }
    return db.posts.filter((item) => {
      return item.title === args.query;
    });
  },
  comments(parent, args, { db }, info) {
    return db.comments;
  },
};

export { Query as default };
