const user = [
  {
    id: "1",
    name: "Aman",
    email: "amanpra333@gmail.com",
    age: 21,
    percent: 84.4,
  },
];

const posts = [
  {
    id: "1",
    title: "Aman",
    body: "My name is Aman Prateek",
    author: "1",
  },
  {
    id: "2",
    title: "Bros",
    body: "My brothers are Amol and Vatan",
    author: "1",
  },
  ,
  {
    id: "3",
    title: "Sis",
    body: "My sisters are Shipra and Richa",
    author: "1",
  },
];

const comments = [
  {
    id: "1",
    text: "Hi Aman",
  },
  {
    id: "2",
    text: "Hello Bros",
  },
  ,
  {
    id: "3",
    text: "Hey Sis",
  },
];

const db = {
  user,
  posts,
  comments,
};

export { db as default };
