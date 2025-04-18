import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <main className="bg-[#F0F5FF] w-full ">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
