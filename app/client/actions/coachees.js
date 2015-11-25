/* global Meteor */

export function loadCoacheeFactory(coacheeCollection) {
  return (userId) => {
    return dispatch => {
      dispatch({
        type: 'COACHEE',
        meteor: {
          get: () => coacheeCollection.findOne(userId),
        },
      });
    };
  };
}

export function loadCoacheesFactory(coacheeCollection) {
  return () => {
    return dispatch => {
      dispatch({
        type: 'COACHEES',
        meteor: {
          subscribe: () => Meteor.subscribe('coachees'),
          get: () => coacheeCollection.find({
            _id: { $ne: Meteor.userId() },
          }).fetch(),
        },
      });
    };
  };
}
