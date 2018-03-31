import reducer from './reducer_trails';
import {fetchTrails} from '../actions';

describe('Reducer trails', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const newState = reducer(undefined, {type: '@@UNKNOWN'});
    expect(newState).toEqual({});
  })

  it('Should return the current state on an unknown action', () => {
    const state = {
      // user: "Matt",
      // comment: "Need to train for this one!",
      // date: "4-5-18",
      ascent: 4859,
      conditionDate: "2018-03-14 14:27:05",
      conditionDetails: "",
      conditionStatus: "All Clear",
      descent: -4858,
      difficulty: "black",
      high: 8792,
      id: "5ab4196ef10de1335dde6429",
      imgMedium: "https://cdn-files.apstatic.com/hike/7043959_medium_1518485150.jpg",
      imgSmall: "https://cdn-files.apstatic.com/hike/7043959_small_1518485150.jpg",
      imgSmallMed: "https://cdn-files.apstatic.com/hike/7043959_smallMed_1518485150.jpg",
      imgSqSmall: "https://cdn-files.apstatic.com/hike/7043959_sqsmall_1518485150.jpg",
      latitude: 37.7325,
      length: 14.7,
      location: "Yosemite Valley, California",
      longitude: -119.5583,
      low: 4043,
      name: "Half Dome",
      starVotes: 98,
      stars: 4.9,
      summary: "THE premier route in Yosemite. Hike to the top of the most iconic granite dome in the USA.",
      type: "Featured Hike",
      url: "https://www.hikingproject.com/trail/7005207/half-dome"
    };
    const newState = reducer(state, {type: '@@UNKNOWN'});
    expect(newState).toBe(state);    
  });
})