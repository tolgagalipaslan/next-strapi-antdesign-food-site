import React, { useEffect, useState } from "react";
import { GiHamburger } from "react-icons/gi";
import { MenuOutlined } from "@ant-design/icons";
import { Breadcrumb, Drawer, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
const { Header, Sider } = Layout;
const Navbar = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [show, setShow] = useState("");
  const controlNavbar = () => {
    if (window.scrollY > 5) {
      setShow("md:backdrop-blur-sm backdrop-blur-md shadow-lg");
    } else {
      setShow("");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  const tabs = [
    {
      key: "1",
      label: "Home",
      path: "/saaaa",
      className: "bg-transparent  flex  justify-center items-center",
      onClick: () => {
        router.push("/");
        setOpenMenu(false);
      },
    },
    {
      key: "2",
      label: "Menu",
      path: "/saaaa",
      className: "bg-transparent flex  justify-center items-center",
      onClick: () => {
        router.push("/");
        setOpenMenu(false);
      },
    },
    {
      key: "3",
      label: "Our Story",
      path: "/saaaa",
      className: "bg-transparent flex  justify-center items-center",
      onClick: () => {
        router.push("/");
        setOpenMenu(false);
      },
    },
    {
      key: "4",
      label: "Contact Us",
      path: "/saaaa",
      className: "bg-transparent flex  justify-center items-center",
      onClick: () => {
        router.push("/");
        setOpenMenu(false);
      },
    },
  ];
  const subTabs = [
    {
      key: "1",
      label: "Home",
      path: "/saaaa",
      className:
        "bg-transparent hover:text-2xl flex  justify-center items-center active:text-lg",
      onClick: () => {
        router.push("/");
        setOpenMenu(false);
      },
    },
    {
      key: "2",
      label: "Menu",
      path: "/saaaa",
      className:
        "bg-transparent flex hover:text-2xl justify-center items-center active:text-lg",
      onClick: () => {
        router.push("/");
        setOpenMenu(false);
      },
    },
    {
      key: "3",
      label: "Our Story",
      path: "/saaaa",
      className:
        "bg-transparent flex hover:text-2xl justify-center items-center  active:text-lg",
      onClick: () => {
        router.push("/");
        setOpenMenu(false);
      },
    },
    {
      key: "4",
      label: "Contact Us",
      path: "/saaaa",
      className:
        "bg-transparent flex hover:text-2xl justify-center items-center active:text-lg",
      onClick: () => {
        router.push("/");
        setOpenMenu(false);
      },
    },
  ];
  const SubMenu = () => {};
  return (
    <Layout className="bg-transparent absolute w-full   ">
      <Header
        key={"mainHeader"}
        className={`bg-transparent mainHeader flex justify-between items-center h-[80px] fixed top-0 z-50 w-full ${show} duration-300`}
      >
        <h1 className=" font-bold flex items-center gap-2 float-left  text-[#43200c]  ">
          {" "}
          <GiHamburger className="text-5xl text-[#43200c]" /> BURGER HOUSE{" "}
        </h1>
        <Menu
          className="md:flex hidden bg-transparent font-bebas  border-none  text-xl h-full   "
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={tabs}
        />
        <MenuOutlined
          className="text-2xl md:hidden flex"
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      </Header>
      <Drawer
        className="backdrop-blur-md bg-yellow-500"
        open={openMenu}
        closable={false}
        onClose={() => {
          setOpenMenu(false);
        }}
      >
        <Menu
          className=" bg-transparent font-bebas  border-none  text-xl h-full  text-[#43200c]  "
          theme="light"
          mode="vertical"
          defaultSelectedKeys={["1"]}
          items={subTabs}
        />
      </Drawer>
    </Layout>
  );
};

export default Navbar;
