import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/ui/dashboard/users/users.module.css";

function ProductsPage() {
  const products = [];
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for Product" />
        <Link href="/dashboard/users/add">
          <button className={styles.addbutton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>iphone</td>
            <td>broken</td>
            <td>23424</td>
            <td>India</td>
            <td>34</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/users`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                {/* <form action={deleteProduct}> */}
                <input type="hidden" name="id"  />
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product.img || "/avatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.username}
                </div>
              </td>
              <td>{product.email}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.isAdmin ? "Admin" : "Client"}</td>
              <td>{product.isActive ? "active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}

export default ProductsPage;
