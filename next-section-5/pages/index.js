import path from "path";
import fs from "fs/promises";
import Link from "next/link";

export default function Home(props) {
  console.log(props);
  return (
    <div>
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log("REGENERATE", context);
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  // if (!data) {
  //   return {
  //     redirect: {
  //       destination: "/no-data",
  //     },
  //   };
  // }

  // if (data.products.length === 0) {
  //   return { notFound: true };
  // }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
    notFound: false,
  };
}
