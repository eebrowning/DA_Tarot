// const { csrfFetch } = require('./csrf');


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

export const thunkGetAllAthletes = () => async dispatch => {
    const res = await fetch('/api/athletes')

    console.log('THUNK, GET ALL ATHLETES: ')

    if (res.ok) {
        const athletes = await res.json();
        dispatch(actionGetAthletes(athletes))
        return athletes;
    }
}
export const thunkGetAthlete = (athleteId) => async dispatch => {
    // console.log('athlete in thunkGetAthlete')

    const res = await fetch(`/api/athletes/${athleteId}`)
    // console.log(athleteId, `THUNK, GET ATHLETE(): `)
    if (res.ok) {
        const athlete = await res.json();
        dispatch(actionGetAthlete(athlete))
        return athlete;
    }
}

export const thunkCreateAthlete = (athlete) => async dispatch => {
    // console.log(athlete, 'in thunkCreateAthlete, step4?')
    const res = await fetch('/api/athletes', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(athlete)
    })
    if (res.ok) {
        const athlete = await res.json();
        // console.log('Thunk, create Athlete: ', athlete)
        dispatch(actionCreateAthlete(athlete))
        return athlete;
    }
}

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


export const thunkDeleteAthlete = (athleteId) => async dispatch => {
    console.log(athleteId, 'in thunkDeleteAthlete')
    const res = await fetch(`/api/athletes/${athleteId}`, {
        method: 'delete',
    })
    if (res.ok) {
        const newId = await res.json();
        console.log('Thunk, delete Athlete: ',)
        dispatch(actionDeleteAthlete(newId))
        // return athlete;
    }
}

//REDUCER
const iState = {};
const athletesReducer = (state = iState, action) => {
    let newState;
    switch (action.type) {
        case CREATE_ATHLETE:
            newState = { ...state, [action.athlete.id]: action.athlete };
            // console.log(action, "...CREATE_ATHLETE... in athletesReducer")
            return newState;
        case GET_ATHLETES:
            newState = {};
            action.athletes.forEach(athlete => {
                newState[athlete.id] = athlete;
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
            console.log(action.athlete, "action...UPDATE_ATHLETE... in athletesReducer")
            newState[action.athlete.id] = action.athlete;
            return newState;
        case DELETE_ATHLETE:
            // console.log(action, 'action...DELETE_ATHLETE...')
            newState = { ...state }
            delete newState[action.athleteId]
            return newState;
        default:
            return state;
    }
}

export default athletesReducer;
