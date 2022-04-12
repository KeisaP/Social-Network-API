const connection = require('../config/connection');
const { User, Thought } = require('../models');


connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [
    {
        "username": "fafield0",
      "email": "glaird0@flickr.com",
      "thoughts": [
      ],
      "friends": [],
      "__v": 0,
      "friendCount": 0
    },
    {
      "username": "arothon1",
      "email": "unashe1@cornell.edu",
      "thoughts": [
      ],
      "friends": [],
      "__v": 0,
      "friendCount": 0
    },
    {
      "username": "hcash2",
      "email": "cbaulcombe2@go.com",
      "thoughts": [
      ],
      "friends": [],
      "__v": 0,
      "friendCount": 0
    },
    {
      "username": "creidshaw3",
      "email": "trogliero3@umich.edu",
      "thoughts": [
      ],
      "friends": [],
      "__v": 0,
      "friendCount": 0
    },
    {
      "username": "rkimbling4",
      "email": "gsplevin4@rediff.com",
      "thoughts": [
      ],
      "friends": [],
      "__v": 0,
      "friendCount": 0
    },
    {
      "username": "sbrugsma5",
      "email": "kmaggs5@wikipedia.org",
      "thoughts": [
      ],
      "friends": [],
      "__v": 0,
      "friendCount": 0
    }
  ]

  const thoughts = [
    {
      "thoughtBody": "The scream in your head will never be out of breath.",
      "createdAt": "2022-03-18T03:36:31.930Z",
      "reactions": [],
      "__v": 0,
      "getReactions": 0
    },
    {
      "thoughtBody": "Do fish in water have their hidden life where they go to school, hang out, study, and get married?",
      "createdAt": "2022-03-18T03:38:05.634Z",
      "reactions": [],
      "__v": 0,
      "getReactions": 0
    },
    {
      "thoughtBody": "If everyone had roller skates instead of feet, would there be cars or would they go rollerblading everywhere?",
      "createdAt": "2022-03-18T03:39:23.564Z",
      "reactions": [],
      "__v": 0,
      "getReactions": 0
    },
    {
      "thoughtBody": "We will never know what memories we had as children and we will never remember them.",
      "createdAt": "2022-03-18T03:40:21.075Z",
      "reactions": [],
      "__v": 0,
      "getReactions": 0
    },
    {
      "thoughtBody": "We know our parents for whole our life, while they know us only part of their lives.",
      "createdAt": "2022-03-18T03:41:18.867Z",
      "reactions": [],
      "__v": 0,
      "getReactions": 0
    },
    {
      "thoughtBody": "Someone was born at this very moment, and someone lost his life at this very moment.",
      "createdAt": "2022-03-18T03:42:34.773Z",
      "reactions": [],
      "__v": 0,
      "getReactions": 0
    }
  ]

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);


  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});