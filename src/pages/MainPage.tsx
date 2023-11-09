//rafce for shortcut
import SearchBar from "../components/SearchBar";
import React from "react";
import UserInfoButton from "../components/UserInfoButton";
import MainPageBanner from "../components/MainPageBanner";
import SnackCategoryFrame from "../components/SnackCategoryFrame";
import RecommendSnackFrame from "../components/RecommendSnackFrame";

const MainPage = () => {
  return (
    <>
      <div className="container">
        <SearchBar />
        <MainPageBanner />
        <div className="mt-5">
          <SnackCategoryFrame />
        </div>
        <div className="mt-5 mb-5">
          <RecommendSnackFrame />
        </div>
        <UserInfoButton />
        <hr />
        <div className="text-center">
          © 2023 BoboAigaowei. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default MainPage;
