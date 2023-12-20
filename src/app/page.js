import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

async function fetchProducts() {
  const productsResponse = await fetch("http://fakestoreapi.com/products");

  // , {
  //   catch: "no-store",
  // });

  console.log("fetching Products");
  return productsResponse.json();
}

export default async function Home() {
  const products = await fetchProducts();
  console.log("Rerendering Products");
  console.log("Number of  Products :", products.length);
  return (
    <div className="bg-gray-100 ">
      <Header />
      {/* <Banner /> */}
      <Banner />

      <main className="max-w-screen-2xl mx-auto ">
        {/* ProductFeed */}

        <ProductFeed products={products} />
      </main>
    </div>
  );
}
