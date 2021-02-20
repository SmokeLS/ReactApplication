export default function sortedArray(attr) {
  return (users, sortType) => {
    return users.sort((prev, next) => {
      return sortType
        ? (prev[attr] < next[attr]) - (prev[attr] > next[attr])
        : (next[attr] < prev[attr]) - (next[attr] > prev[attr]);
    });
  };
}

// function swap(items, firstIndex, secondIndex) {
//   const temp = items[firstIndex];
//   items[firstIndex] = items[secondIndex];
//   items[secondIndex] = temp;
// }

// function partition(items, left, right) {
//   var pivot = items[Math.floor((right + left) / 2)],
//     i = left,
//     j = right;
//   while (i <= j) {
//     while (items[i] < pivot) {
//       i++;
//     }
//     while (items[j] > pivot) {
//       j--;
//     }
//     if (i <= j) {
//       swap(items, i, j);
//       i++;
//       j--;
//     }
//   }
//   return i;
// }

// export default function sortedArray(items, left, right) {
//   var index;
//   if (items.length > 1) {
//     left = typeof left != "number" ? 0 : left;
//     right = typeof right != "number" ? items.length - 1 : right;
//     index = partition(items, left, right);
//     if (left < index - 1) {
//       sortedArray(items, left, index - 1);
//     }
//     if (index < right) {
//       sortedArray(items, index, right);
//     }
//   }
//   return items;
// }
// first call
