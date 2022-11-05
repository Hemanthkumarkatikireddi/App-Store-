// Write your code here
import './index.css'

const TabItem = props => {
  const {details, clickItem, active} = props
  const {tabId, displayText} = details

  const onClickedTab = () => {
    clickItem(tabId)
  }
  const activeBtn = active ? 'isActive' : 'button'

  return (
    <li className="tabs-list">
      <button className={activeBtn} type="button" onClick={onClickedTab}>
        <p>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
