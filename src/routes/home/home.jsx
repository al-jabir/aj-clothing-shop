import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://images.pexels.com/photos/101537/baby-boy-hat-covered-101537.jpeg?cs=srgb&dl=pexels-pixabay-101537.jpg&fm=jpg",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?cs=srgb&dl=pexels-adrian-dorobantu-2300334.jpg&fm=jpg",
    },
    {
      id: 4,
      title: "womens",
      imageUrl:
        "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?cs=srgb&dl=pexels-juan-mendez-1536619.jpg&fm=jpg",
    },
    {
      id: 5,
      title: "mens",
      imageUrl:
        "https://images.pexels.com/photos/1964970/pexels-photo-1964970.jpeg?cs=srgb&dl=pexels-edgar-serrano-1964970.jpg&fm=jpg",
    },
  ];

  return (
    <>
      <Directory categories={categories} />
      <Outlet />
    </>
  );
};

export default Home;
