import "./Item.css";
interface ItemProps {
  id: number;
  src: string;
  alt: string;
  name: string;
  price: number;
  old_price: number;
  onClick: () => void;
}
function Item({ src, alt, name, price, old_price }: ItemProps) {
  return (
    <div className="item">
      <img src={src} alt={alt} />
      <p>{name}</p>
      <div className="item-price">
        <div className="item-price-new">${price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>
    </div>
  );
}

export default Item;
