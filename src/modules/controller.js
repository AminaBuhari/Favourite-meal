/* eslint-disable import/extensions */
import { getLikes, likeOB, postLikes } from './config';

const numberOfLikes = async (id) => {
  const likes = await getLikes();
  const like = likes.find((e) => e.item_id === id);
  return like ? like.likes : 0;
};

const like = (icon, id, numLikes) => {
  icon.addEventListener('click', async () => {
    numLikes.textContent = Number(numLikes.textContent) + 1;
    likeOB.item_id = id;
    await postLikes(likeOB);
  });
};

export { numberOfLikes, like };
