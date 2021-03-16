let url;
if (process.env.NODE_ENV === 'production') {
  url = `https://roosterback.herokuapp.com`;
} else {
  url = 'http://localhost:8000';
}

class ContentModel {

  static async getOne(location) {
    let peep = await fetch(`${url}/content/${location}/`, {
      // mode: 'no-cors',
      // credentials: 'include'
    })
      .then(res => res.json())
      .catch(err => {
        console.log('error fetching data in MyndexModel.getOne: ', err)
      })
      return peep
  }

  static update(info) {
    return fetch(`${url}/rest/content/${info.id}/`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(info),
      // credentials: 'include'
    })
      .then(res => console.log('this is your res: ', res.json()))
      .catch(err => {
        console.log('error fetching data in MyndexModel.update: ', err)
        return {message: 'error in update'};
      })
      .then(res => window.location.href = '/')
  }
}

export default ContentModel;
