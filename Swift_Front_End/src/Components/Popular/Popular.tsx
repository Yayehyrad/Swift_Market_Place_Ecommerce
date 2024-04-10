import "./Popular.css";
import data from "../../../public/Assets/data";
import Item from "../Item/Item";
function Popular() {
  return (
    <div className="popular">
      <h1>{"Popular in women".toLocaleUpperCase()} </h1>
      <hr />
      <div className="popular-item">
        {data.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              src={item.image}
              alt={"new"}
              name={item.name}
              price={item.new_price}
              old_price={item.old_price}
              onClick={() => {}}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
