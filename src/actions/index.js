import axios from 'axios';

// local database
const ROOT_URL = process.env.REACT_APP_API_BASE_URL || `http://localhost:3005`;

// hiking trail api
const API_KEY = '&key=200228532-bc7667c06009a2e233ef5527dbb3a053';
const API_ROOT_URL = 'https://www.hikingproject.com/data/get-trails?';

// google geolocation api
const GEO_ROOT_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const GEO_KEY = '&key=AIzaSyATySdNMMYE-uv4PmUb3RqYgDcHCARsvMQ';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_TRAILS = 'FETCH_TRAILS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_TRAIL = 'FETCH_TRAIL';
export const FETCH_COORDINATES = 'FETCH_COORDINATES';
export const DELETE_POST = 'DELETE_POST';



export function fetchPosts() {
  // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  const request = axios.get(`${ROOT_URL}/notes`);

  // posting add fields that didn't exist
  // posting use different way than axios
  // use nodejs for posting
  

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchTrails(lat, lon) {
  // const lat = '40.0274';
  // const lon = '-105.2519';
  // const lat = '37.8651';
  // const lon = '-119.5383';
  const url = `${API_ROOT_URL}lat=${lat}&lon=${lon}&maxDistance=10${API_KEY}`;
  const request = axios.get(url);
  return {
    type: FETCH_TRAILS,
    payload: request
  }
}

// hook up to posts_new.js
export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/notes`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchTrail(id) {
  const BASE_URL = 'https://www.hikingproject.com/data/get-trails-by-id?ids=';  
  const url = `${BASE_URL}${id}${API_KEY}`;
  const request = axios.get(url);
  return {
    type: FETCH_TRAIL,
    payload: request
  }
}

export function fetchCoordinates(address) {
  const url = `${GEO_ROOT_URL}${address}${GEO_KEY}`;
  // const url = `${GEO_ROOT_URL}yosemite${GEO_KEY}`;
  
  // OPTION 2
  const request = axios.get(url)
    .then(coor => {
      const latCoor = (coor.data.results[0].geometry.location.lat);
      const lngCoor = (coor.data.results[0].geometry.location.lng);
      
      const trail_url = `${API_ROOT_URL}lat=${latCoor}&lon=${lngCoor}&maxDistance=10${API_KEY}`;
      // console.log(trail_url);
      return axios.get(trail_url);
    });

  // console.log(request);
  
  // For google maps api integration
  // const getCoor = axios.get(url)
  //   .then(coor => {
  //     const latCoor = (coor.data.results[0].geometry.location.lat);
  //     const lngCoor = (coor.data.results[0].geometry.location.lng);

  //     return coor.data.results[0].geometry.location;
  //   })


  // console.log(getCoor);
  
  
  // const requestTrail = a
  
  // const request = axios.get(url);
  // // OPTION 2
  // // return axios.get(url);
  // const request = axios.get(url);
  // // console.log(request);
  // if (request) {
  //   // const { data } = ((request));
  //   console.log((request.data));
  // }
    
  // // .then(function (response) {
  // //   this.setState({address: response.data.results});
  // // });

  return {
    type: FETCH_COORDINATES,
    payload: request
  }
}

export function deletePost(id, callback) {
  axios.delete(`${ROOT_URL}/notes/${id}`)
    .then( () => callback());

  return {
    type: DELETE_POST,
    payload: id
  }
}

export function fetchPost(id) {
  const url = `${ROOT_URL}/notes/${id}`;
  const request = axios.get(url);
  return {
    type: FETCH_POST,
    payload: request
  }
}