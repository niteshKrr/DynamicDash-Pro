import Image from "next/image";
import Link from "next/link";
import styles from "@/app/components/dashboard/products/products.module.css";
import Search from "@/app/components/dashboard/search/Search";
import Pagination from "@/app/components/dashboard/pagination/Pagination";
// import { fetchProducts } from "@/app/lib/data";
// import { deleteProduct } from "@/app/lib/actions";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  // const { count, products } = await fetchProducts(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {/* {products.map((product) => ( */}
            <tr key="">
              <td>
                <div className={styles.product}>
                  <Image
                    src={"/noavatar.png"}
                    alt="loading..."
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  book
                </div>
              </td>
              <td>for reading purpose</td>
              <td>$120</td>
              <td>28.12.2023</td>
              <td>available</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action="">
                    <input type="hidden" name="id" value="" />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          {/* ))} */}
        </tbody>
      </table>
      <Pagination count={4} />
    </div>
  );
};

export default ProductsPage;