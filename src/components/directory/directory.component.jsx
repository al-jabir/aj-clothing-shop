import CategoryItem from "../directory-item/category-item.component";
import "../directory/directory.style.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <CategoryItem />;
      })}
    </div>
  );
};

export default Directory;
