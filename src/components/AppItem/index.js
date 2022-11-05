// Write your code here
import './index.css'

const AppItem = props => {
  const {details} = props
  const {appName, imageUrl} = details

  return (
    <li className="app-list">
      <img src={imageUrl} alt={appName} className="app-img" />
      <p className="app-title">{appName}</p>
    </li>
  )
}

export default AppItem
