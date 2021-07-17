import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../../Redux/actions/user.actions';
import "./UserProfile.css"

function UserProfile() {
    const dispatch = useDispatch();
    /* const user_data = useSelector((state) => state.userData.data) */
    const loginData = useSelector((state) =>  state.loginData)
    /* console.log(user_data) */
    console.log(loginData.userFound)

    /* useEffect(() => {
        dispatch(getUserProfile(userId));
        return () => {};
      }, [])
 */

    return (
        <div>

            <p>{loginData.userFound.email}</p>
            <p>{loginData.userFound.firstName}</p>
            <p>{loginData.userFound.lastName}</p>
            <p>{loginData.userFound.phone}</p>
            <p>{loginData.userFound.creditCards}</p>
            
          

            
        </div>
    )
}

export default UserProfile
