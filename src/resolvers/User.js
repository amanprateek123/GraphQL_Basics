const User = {
  posts(parent, arg, { db }, info) {
    return db.posts.filter((item) => item.author === parent.id);
  },
};

export { User as default };
