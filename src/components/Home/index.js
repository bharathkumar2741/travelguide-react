import {Component} from 'react'
import Guide from '../Guide'

import './index.css'

const apiStatuConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN-PROGRESS',
}
class Home extends Component {
  state = {traveList: [], apiStatus: apiStatuConstants.initial}

  componentDidMount() {
    this.getTravelList()
  }

  getTravelList = async () => {
    this.setState({apiStatus: apiStatuConstants.inProgress})

    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(item => ({
        description: item.description,
        id: item.description,
        imageUrl: item.image_url,
        name: item.name,
      }))
      this.setState({
        traveList: updatedData,
        apiStatus: apiStatuConstants.success,
      })
    }
  }

  render() {
    const {traveList} = this.state
    console.log(traveList)
    return (
      <div className="bg">
        <h1>Travel Guide</h1>
        <ul className="card">
          {traveList.map(eachItem => (
            <Guide guideDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
