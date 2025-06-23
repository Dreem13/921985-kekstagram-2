const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Олег',
  'Егор',
  'Ирина',
  'Мария',
  'Андрей',
  'Василий',
  'Полина',
  'Сабрина'
];

const minId = 0;
const maxId = 999;

const minAvatar = 1;
const maxAvatar = 6;

const minPhoto = 1;
const maxPhoto = 25;

const minDescription = 1;
const maxDescription = 25;

const minLike = 15;
const maxLike = 300;

const minComment = 0;
const maxComment = 30;

const getRandomNumber = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElementArray = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const createCommentPhoto = () => ({
  id: getRandomNumber(minId, maxId),
  avatar: `img/avatar-${getRandomNumber(minAvatar, maxAvatar)}.svg`,
  message: `${getRandomElementArray(MESSAGES)}`,
  name: `${getRandomElementArray(NAMES)}`
});

const createDescriptionPhoto = (element, index) => ({
  id: index + 1,
  url: `photos/${getRandomNumber(minPhoto, maxPhoto)}.jpg`,
  description: `Описание фотографии №${getRandomNumber(minDescription, maxDescription)}`,
  likes: getRandomNumber(minLike, maxLike),
  comments: Array.from({length: getRandomNumber(minComment, maxComment)}, createCommentPhoto)
});

const arrayPhotos = Array.from({length: 25}, createDescriptionPhoto);

console.log(arrayPhotos);
