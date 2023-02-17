import React, {
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";

import Layout from "../Components/Layout/Layout";
import { SideBar, BreadCrumbs, Banner, ShowContent } from "../Components/Index";

import useShopStore from "../Utils/ShopSttore";
import { fetchMoreData } from "../Utils/FetchMoreData";

const Kebab = () => {
  const [dataSource, setDataSource] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const { filterData, filterByCategory, backToDefault } = useShopStore(
    (state) => ({
      filterData: state.filterData,
      filterByCategory: state.filterByCategory,
      backToDefault: state.backToDefault,
    })
  );

  //auto scroll to top
  const ScrollHandler = useCallback(
    (e) => {
      if (
        window.innerHeight + e.target.documentElement.scrollTop + 1 >=
          e.target.documentElement.scrollHeight &&
        hasMore === true
      ) {
        fetchMoreData(dataSource, setDataSource, filterData, setHasMore);
      } else return;
    },
    [hasMore, dataSource, filterData]
  );

  useLayoutEffect(() => {
    backToDefault();
  }, []);

  useEffect(() => {
    filterByCategory("کباب");
  }, []);

  useEffect(() => {
    setDataSource(filterData.slice(0, 9));
    setHasMore(true);
  }, [filterData]);

  useEffect(() => {
    window.addEventListener("scroll", ScrollHandler);
    return () => {
      window.removeEventListener("scroll", ScrollHandler);
    };
  }, [ScrollHandler]);
  return (
    <Layout>
      <Banner />
      <BreadCrumbs />
      <main className="w-full relative">
        <div className="w-full h-[70px]"></div>
        <div className="flex items-start justify-between">
          <SideBar />
          <ShowContent dataSource={dataSource} />
        </div>
      </main>
    </Layout>
  );
};

export default Kebab;
