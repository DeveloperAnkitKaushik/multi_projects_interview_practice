import styles from './index.module.css'

const NestedMenu = () => {
  return (
    <div style={styles.container}>
      <div className="maincontainer">
        <div className={styles.innercontainer}>
          <div className={`${styles.heading} text-gradient`}>Nested Menu</div>
        </div>
      </div>
    </div>
  )
}

export default NestedMenu;