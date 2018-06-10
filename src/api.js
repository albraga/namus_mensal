import axios from 'axios'

module.exports = {
  get(self, zip) {
    axios.get(`http://ziptasticapi.com/${zip}`)
    .then(resp => {
      self.$store.dispatch('cidadeAction', resp.data.city)
    }).catch(error => {
      self.$store.dispatch('cidadeAction', 'not found...')
    })
  }
}