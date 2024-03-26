import styles from "./SectionHeader.module.css";

const SectionHeader = (props) => {
  return (
    <div className={styles["section-header"]}>
      <p>{props.description}</p>
      <h2>{props.title}</h2>
    </div>
  );
};

export default SectionHeader;
