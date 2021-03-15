import { AppState } from '../AppState'
import { nasaApi } from './Axios'

class NasaPicsService {
  async searchPics (query) {
    const res = await nasaApi.get('apod?api_key=j9eVkckfXKAEGGzowOGvlQmKcIIwmAUY1q03Xyoa&date=' + query)
    console.log(res.data)
    AppState.photos = res.data
  }
}

export const nasaPicsService = new NasaPicsService()
