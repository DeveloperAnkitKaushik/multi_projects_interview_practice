import menuData from './data';
import styles from './index.module.css'

const NestedMenu = () => {
  return (
    <div style={styles.container}>
      <div className={`${styles.heading} text-gradient`}>Nested Menu</div>
      {
        menuData && menuData.length > 0 ? (
          <div></div>
        ) : null
      }
    </div>
  )
}

export default NestedMenu;