import styles from "../styles/header.module.css";

export default function PageHeader(props) {
  return (
    <div className={styles.pageHeader}>
      <h1>{props.title}</h1>
    </div>
  );
}
