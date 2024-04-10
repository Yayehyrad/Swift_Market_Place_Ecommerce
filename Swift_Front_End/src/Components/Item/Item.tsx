import "./Item.css";
interface ItemProps {
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
      <div className="itme-price">
        <div className="item-price-new">{price}</div>
        <div className="item-price-ol">{old_price}</div>
      </div>
    </div>
  );
}

export default Item;
