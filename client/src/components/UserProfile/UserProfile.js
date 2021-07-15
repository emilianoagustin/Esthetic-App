import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../../Redux/actions/user.actions';
import "./UserProfile.css"

function UserProfile() {
    const dispatch = useDispatch();
    const user_data = useSelector((state) => state.userData.data)

    const { userId } = useParams()

    useEffect(() => {
        dispatch(getUserProfile(userId));
        return () => {};
      }, [])


    return (
        <div>

            <p>{user_data &&user_data.fistName}</p>
            <p>{user_data &&user_data.lastName}</p>
            <p>{user_data &&user_data.email}</p>
            <p>{user_data &&user_data.phone}</p>
          

            
        </div>
    )
}

export default UserProfile
