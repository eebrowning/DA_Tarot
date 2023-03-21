
import api from "../api";

const CREATE_ATHLETE = 'create/createAthlete'//create
const GET_ATHLETES = 'athletes/getAthletes'//read
const GET_ATHLETE = 'athletes/getAthlete'//read

const UPDATE_ATHLETE = 'athletes/updateAthlete'//update
const DELETE_ATHLETE = 'athletes/deleteAthlete'//delete


//THUNK ACTION CREATOR
const actionCreateAthlete = (athlete) => {
    return {
        type: CREATE_ATHLETE,
        athlete
    }
}
const actionGetAthletes = (athletes) => {
    return {
        type: GET_ATHLETES,
        athletes
    }
}
const actionGetAthlete = (athlete) => {
    return {
        type: GET_ATHLETE,
        athlete
    }
}
const actionUpdateAthlete = (athlete) => {
    return {
        type: UPDATE_ATHLETE,
        athlete
    }
}
const actionDeleteAthlete = (athleteId) => {
    return {
        type: DELETE_ATHLETE,
        athleteId
    }
}

//THUNKS one per route
//tested, good
export const thunkGetAllAthletes = () => async dispatch => {
    let res = await api.getAllProfiles()

    // console.log('THUNK, GET ALL ATHLETES: ')
    // console.log(res, 'res test')
    if (res.status === 200) {
        let athletes = await res.data.data;
        // athletes = JSON.stringify(athletes)
        // console.log(athletes, 'athletes in thunk')
        dispatch(actionGetAthletes(athletes))
        return athletes;
    }
}

//todo
export const thunkGetAthlete = (athleteId) => async dispatch => {
    console.log('athlete in thunkGetAthlete')

    const res = await fetch(`/api/athletes/${athleteId}`)
    // console.log(athleteId, `THUNK, GET ATHLETE(): `)
    if (res.ok) {
        const athlete = await res.json();
        dispatch(actionGetAthlete(athlete))
        return athlete;
    }
}
//good
export const thunkCreateAthlete = (athlete) => async dispatch => {


    // for (var pair of athlete.entries()) {
    //     console.log(`${pair[0]}: ${pair[1]}`);
    // }

    // try {
    const res = await api.insertProfile(athlete)

    console.log(athlete.files, 'thunk create ath')
    if (res.status >= 200 && res.status < 400) {
        const athlete = await res.data.data;

        dispatch(actionCreateAthlete(athlete))
        return athlete;
    }
    else {
        // console.log(res, 'sstattasssf')

        return res.errors;
    }

}
//todo
export const thunkUpdateAthlete = athlete => async dispatch => {
    console.log(athlete, '\n\n\n', 'in thunkUpdateAthlete');

    const res = await fetch(`/api/athletes/${athlete.id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(athlete)
    })
    if (res.ok) {
        const updatedAthlete = await res.json();
        dispatch(actionUpdateAthlete(updatedAthlete))
        return updatedAthlete;
    }
}

//good
export const thunkDeleteAthlete = (athleteId) => async dispatch => {

    let res = await api.deleteProfileById(athleteId)
    console.log(res.data, 'in thunkDeleteAthlete')
    if (res.data) {

        const newId = await res.data.data._id;
        console.log('Thunk, delete Athlete: ', newId, 'should be newID')
        dispatch(actionDeleteAthlete(newId))
    }
}

//REDUCER
const iState = {};
const athletesReducer = (state = iState, action) => {
    let newState;
    switch (action.type) {
        case CREATE_ATHLETE:
            newState = { ...state, [action.athlete._id]: action.athlete };
            // console.log(action, state, "...CREATE_ATHLETE... in athletesReducer")
            return newState;
        case GET_ATHLETES:
            newState = {};
            // console.log(action.athletes.profiles, 'in GET_')
            action.athletes.profiles.forEach(athlete => {
                newState[athlete._id] = athlete;
            })
            // console.log(action, "...GET_ATHLETES... in athletesReducer")
            return newState;
        case GET_ATHLETE:
            newState = { ...state };
            // console.log(action, "action...GET_ATHLETE... in athletesReducer")
            newState[action.athlete.id] = action.athlete;
            return newState;
        case UPDATE_ATHLETE:
            newState = { ...state }
            // console.log(action.athlete, "action...UPDATE_ATHLETE... in athletesReducer")
            newState[action.athlete.id] = action.athlete;
            return newState;
        case DELETE_ATHLETE:
            // console.log(action, 'action...DELETE_ATHLETE...')
            newState = { ...state }
            delete newState[action.athleteId]
            return newState;
        default:
            // console.log('yer a default, harry')
            return state;
    }
}

export default athletesReducer;
