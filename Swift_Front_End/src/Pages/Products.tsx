// interface ProductsProps {
//   ?: number;
// }
import { useParams } from "react-router-dom";
function Products() {
  const props = useParams();
  console.log(props?.productid);
  return <div>{props?.productid}</div>;
}

export default Products;
