
import { useEffect, useState } from "react"
import apis from "../../api";


function Athletes() {
    let [profiles, setProfiles] = useState('');
    //since this is a single-crud, I'm just going to do dispatch-thunk behavior inside of this component to save time instead of setting up a store.
    useEffect(() => {
        async function fetchData() {
            let response = await apis.getAllProfiles();
            if (response.ok) {
                // const reviews = await res.json();
                const responseData = await response;
                setProfiles(response.data);

            }
        }
        fetchData();

    }, [])

    return (
        <div className="Athletes">
            <>stuff</>
            <>
                {console.log(profiles)}

            </>

        </div>
    );
}

export default Athletes;
