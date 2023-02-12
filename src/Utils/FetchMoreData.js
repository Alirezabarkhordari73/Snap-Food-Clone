let targetIndexVal;

export const fetchMoreData = (
  dataSource,
  setDataSource,
  filterData,
  setHasMore
) => {
  if (dataSource.length < filterData.length) {
    setTimeout(() => {
      if (dataSource.length + 7 >= filterData.length) {
        targetIndexVal =
          dataSource.length + (filterData.length - dataSource.length);
      } else {
        targetIndexVal = dataSource.length + 7;
      }
      setDataSource(
        dataSource.concat(filterData.slice(dataSource.length, targetIndexVal))
      );
    }, 1000);
  } else {
    setHasMore(false);
  }
};
