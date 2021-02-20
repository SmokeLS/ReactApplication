export default function sortedArray(attr) {
  return (users, sortType) => {
    return users.sort((prev, next) => {
      return sortType
        ? (prev[attr] < next[attr]) - (prev[attr] > next[attr])
        : (next[attr] < prev[attr]) - (next[attr] > prev[attr]);
    });
  };
}
