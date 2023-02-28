import styles from "../styles/Testing.module.css";

const tailwindTesting = () => {
  return (
    <div className={styles.testingContainer}>
        <h1 className="text-black-600">Test paragraph</h1>
      <div className="min-h-full grid place-content-center">
        <p className="bg-emerald-500 w-52 h-52 rounded-full shadow-2xl"></p>
      </div>
    </div>
  );
};

export default tailwindTesting;
