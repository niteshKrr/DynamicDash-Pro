// import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "../../../lib/data";
import styles from "../../../components/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  
  const { id } = params;
  // const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="loading..." fill />
        </div>
        Nitesh Kumar
      </div>
      <div className={styles.formContainer}>
        <form action="/" className={styles.form}>
          <input type="hidden" name="id" value=""/>
          <label>Username</label>
          <input type="text" name="username" placeholder="nitesh kumar" />
          <label>Email</label>
          <input type="email" name="email" placeholder="nkumar35101@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="7631124942" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="I don't no" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected="">Yes</option>
            <option value={false} selected="">No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected="">Yes</option>
            <option value={false} selecte="">No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;