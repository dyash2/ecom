// import { useEffect, useState } from "react";

// const App = () => {
//   const [imageURL, setImageURL] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading,setLoading] = useState(true);


//   useEffect(() => {
//     fetch("https://picsum.photos/v2/list")
//       .then((res) => {
//         if(res.status >= 400){
//           throw new Error("server Error");
//         }
//         return res.json();
//       })
//       .then((data) => setImageURL(data[0].download_url))
//       .catch(console.error)
//       .finally(() => setLoading(false));
//   }, []);

//   if(loading) return <p>Loading...</p>
//   if(error) return <p>A network error has occured.</p>

//   return (
//     <>
//       {/* {!imageURL && <p>Loading...</p>} */}
//       {imageURL && (
//         <>
//           <h1>An image</h1>
//           <img src={imageURL} alt="placeholder" />
//         </>
//       )}
//     </>
//   );
// };

// export default App;

import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

