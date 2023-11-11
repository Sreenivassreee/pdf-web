import { Header } from "../header/header";
import PdfHomePage from "../pdf-home-page/PdfHomePage";
import { SideMenu } from "../side-menu/sideMenu";

const DashBoard = () => {
  return (
    <>
      <div className="text-gray-700 bg-gray-100">
        <Header />
      </div>
      <div className="flex">
        <div className="h-[92vh] text-gray-700 bg-gray-100 ">
          <SideMenu />
        </div>

        <div className="w-full">
          <PdfHomePage />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
