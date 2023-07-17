import { ReactDOM } from 'react-dom';

const user = (
  <div class="profile">
    <div class="description">
      <img src={data.avatar} alt="User avatar" class="avatar" />
      <p class="name">{data.username}</p>
      <p class="tag">{data.tag}</p>
      <p class="location">{data.location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{data.stats.followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{data.stats.views}</span>
      </li>
      <li>
        <span class="label">{data.stats.likes}</span>
        <span class="quantity">3000</span>
      </li>
    </ul>
  </div>
);

ReactDOM.render(user, document.querySelector('#root'));

const data = {
  username: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
