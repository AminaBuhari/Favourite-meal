/* eslint-disable import/extensions */
import { getLikes } from './config';

const numberOfLikes = async (id) => {
  const likes = await getLikes();
  const like = likes.find((e) => e.item_id === id);
  if (like) return like;
  return 0;
};

export default numberOfLikes;
