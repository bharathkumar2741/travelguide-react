import './index.css'

const Guide = props => {
  const {guideDetails} = props
  const {description, id, imageUrl, name} = guideDetails
  return (
    <li className="bg-card">
      <div className="bgs">
        <img alt={name} src={imageUrl} />
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </li>
  )
}
export default Guide
