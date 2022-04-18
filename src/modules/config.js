// ////////////// Api request
const appID = 'NFxX76uVcS9wzX0LJoyT';
const baseURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const involvementURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/`;

// ////////////// Create objects
const likeOB = { item_id: '' };
const comments = { item_id: '', username: '', comment: '' };
const reservations = {
  item_id: '', username: '', date_start: '', date_end: '',
};

// ////////////// Get all data from baseURL
const getData = async () => {
  const response = await fetch(baseURL);
  return response.json().then((res) => res.categories);
};

// ////////////// Get all data from involvementURL
const getLikes = async () => {
  const response = await fetch(`${involvementURL}likes`);
  return response.json();
};

// ////////////// Get Comments
const getComments = async (id) => {
  const response = await fetch(`${involvementURL}comments?item_id=${id}`);
  if (response.status === 200) return response.json();

  return [
    {
      comment: 'No Comment here please Add',
      creation_date: '',
      username: '',
    },
  ];
};

// /////////////////// Post Likes
const postLikes = async (data = {}) => {
  const response = await fetch(`${involvementURL}likes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.status();
};

// /////////////////// Post Comments
const postComments = async (data = {}) => {
  const response = await fetch(`${involvementURL}comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response;
};

// Post Reservations
const postReservations = async (data = {}) => {
  const response = await fetch(`${involvementURL}reservations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response;
};

// Get Reservations
const getReservations = async (id) => {
  const response = await fetch(`${involvementURL}reservations?item_id=${id}`);
  if (response.status === 200) return response.json();

  return [
    {
      comment: 'No current reservation',
      date_start: '',
      date_end: '',
      username: '',
    },
  ];
};

export {
  getData,
  getLikes,
  getComments,
  postLikes,
  postComments,
  likeOB,
  comments,
  baseURL,
  postReservations,
  getReservations,
  reservations,
};
