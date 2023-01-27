import styles from './TableHead.module.css';


const TableHead = () =>  {
  return (
   <thead>
    <tr>
      <th></th>
      <th id={styles["time"]}>TIME</th>
      <th id={styles["destination"]}>DESTINATION</th>
      <th id={styles["flight"]}>FLIGHT</th>
      <th id={styles["gate"]}>GATE</th>
      <th id={styles["remarks"]}>REMARKS</th>

    </tr>

   </thead>
  )
};

export default TableHead;
