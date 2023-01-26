import styles from './index.module.css';

const TableHead = () =>  {
  return (
   <thead>
    <tr>
      <th></th>
      <th id={styles["time"]}>TIME</th>
      <th id="destination">DESTINATION</th>
      <th id="flight">FLIGHT</th>
      <th id="gate">GATE</th>
      <th id="remarks">REMARKS</th>

    </tr>

   </thead>
  )
}

export default TableHead;
