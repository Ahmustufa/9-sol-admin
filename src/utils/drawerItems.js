import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
export const drawerItems = [
  {
    id: 1,
    title: "Dashboard",
    to: "/dashboard",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: 2,
    title: "Blogs",
    to: "/dashboard/blogs",
    icon: <InfoOutlinedIcon />,
  },
  {
    id: 3,
    title: "Payment",
    to: "/dashboard/payment",
    icon: <LocalOfferOutlinedIcon />,
  },
  // {
  //   id: 4,
  //   title: "Blogs",
  //   to: "/blogs",
  //   icon: <BookOutlinedIcon />,
  // },
  //   {
  //     id: 5,
  //     title: "Contact",
  //     to: "/contactus",
  //     icon: <ContactMailOutlinedIcon />,
  //   },
];
