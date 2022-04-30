export async function setID(dao) {
  const arr = await dao.readAll();
  if (arr.length > 0) {
    const lastItemId = arr[arr.length - 1].id; // --> last element id
    return lastItemId + 1; // --> next element id
  } else {
    return 1;
  }
}
