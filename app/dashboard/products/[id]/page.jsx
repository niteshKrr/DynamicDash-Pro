// import { updateProduct } from "@/app/lib/actions";
// import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/components/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  // const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Your title
      </div>
      <div className={styles.formContainer}>
        <form action="/" className={styles.form}>
          <input type="hidden" name="id" value="234213" />
          <label>Title</label>
          <input type="text" name="title" placeholder="title" />
          <label>Price</label>
          <input type="number" name="price" placeholder="price" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="50" />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={"color"}
          />
          <label>Size</label>
          <input
            type="text"
            name="size"
            placeholder={"size"}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="6"
            placeholder="description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;