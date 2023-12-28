// import { deleteUser } from "@/app/lib/actions";
// import { fetchUsers } from "../../lib/data";
import Search from '@/app/components/dashboard/search/Search'
import styles from "../../components/dashboard/users/users.module.css"
import Image from 'next/image'
import Link from 'next/link'
import Pagination from '@/app/components/dashboard/pagination/Pagination'

const Page = async({ searchParams }) => {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  // const { count, users } = await fetchUsers(q, page);

  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <Search placeholder="Search for a user..." />
      <Link href="/dashboard/users/add">
        <button className={styles.addButton}>Add New</button>
      </Link>
    </div>
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Created At</td>
          <td>Role</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {/* {users.map((user) => ( */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Nitesh Kumar
              </div>
            </td>
            <td>nkumar35101@gmail.com</td>
            <td>28.12.2023</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/users/`}>
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
    <Pagination count={2} />
  </div>
  )
}

export default Page
