// import { useEffect, useState } from "react";

// const ProductAPI = () => {
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => {
//         if (response.status >= 400) {
//           throw new Error("server error");
//         }
//         return response.json();
//       })
//       .then((data) => setProducts(data))
//       .catch((error) => setError(error))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <p>Loading....</p>;
//   if (error) return <p>A network error was encountered</p>;

//   return (
//     <div>
//       {products.map((item) => {
//         <p key={item.id}>{item.title}</p>;
//       })}
//     </div>
//   );
// };

// export default ProductAPI;


export const fetchProducts = async () => {
    const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");

    if(!response.ok){
        throw new Error("Server Error");
    }

    return response.json();
}