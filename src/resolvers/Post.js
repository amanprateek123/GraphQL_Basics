const Post = {
  author(parent, arg, { db }, info) {
    return db.user.find((item) => item.id === parent.author);
  },
};

export { Post as default };
