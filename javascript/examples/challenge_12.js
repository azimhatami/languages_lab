const notes = [
  {
    id: 1, 
    title: 'Note-1',
    createdAt: '2022-08-05T07:34:31.731Z',
  },
  {
    id: 2, 
    title: 'Note-2',
    createdAt: '2024-08-05T07:34:31.731Z',
  },
  {
    id: 3, 
    title: 'Note-3',
    createdAt: '2021-08-05T07:34:31.731Z',
  },
  {
    id: 4, 
    title: 'Note-4',
    createdAt: '2023-08-05T07:34:31.731Z',
  },
]


// descending
function sortNotesNewest (notes) {
  return [...notes].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return dateB - dateA;
  });
}

// ascending
function sortNotesOldest (notes) {
  return [...notes].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return dateA - dateB;
  });
}

function sortByDate(data, sort='ascending') {
  return [...data].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    // ascending
    if (sort === 'ascending') return dateA - dateB;

    // descending
    return dateB - dateA;
  });
}

// console.log(sortNotesNewest(notes));
// console.log(sortNotesOldest(notes));
console.log(sortByDate(notes));
console.log(sortByDate(notes, 'descending'));




