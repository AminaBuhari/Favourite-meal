// ////////////// Api request
const appID = 'AminaTeshomeID';
const baseURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const involvementURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/`;

// ////////////// Create food object
const food = {
  id: '',
  name: '',
  description: '',
  images: '',
  likes: 0,
  comments: [],
};

// ////////////// Get all data from baseURL
const getData = async () => {
  const response = await fetch(baseURL);
  return response.json();
};

// ////////////// Get all data from involvementURL
const getLikes = async () => {
  const response = await fetch(`${involvementURL}likes`);
  return response.json();
};

// ////////////// Get Single data from involvementURL
const getComments = async (id) => {
  const response = await fetch(`${involvementURL}comments?item_id=${id}`);
  return response.json();
};

// /////////////////// Post Data
const postData = async (data = {}) => {
  await fetch(involvementURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return appID;
};

// /////////////////// Post Likes
const postLikes = async (data = {}) => {
  const response = await fetch(`${involvementURL}likes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};

export {
  food, getData, getLikes, getComments, postData, postLikes,
};
