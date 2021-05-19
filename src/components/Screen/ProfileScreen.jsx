import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../service/firebase';
import Navbar from '../Navbar/Navbar';
import styles from './ProfileScreen.module.css';
function ProfileScreen() {
    // 이메일 - 유저 정보 가져오기
    const user = useSelector(selectUser);
    return (
        <div className={styles.profilescreen}>
            <Navbar />
            <div className={styles.body}>
                <h1>Edit Profile</h1>
                <div className={styles.info}>
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="profile"></img>
                    <div className={styles.details}>
                        <h2>{user.email}</h2>
                        <div className={styles.plans}>
                            <h3>Plans(Current Plan : prenium)</h3>
                            {/* 클릭시 파이어베이스 로그아웃 하기 -> auth 변화따라 dispatch 해줬으니 여기선 auth의 상태만 변경해줘*/}
                            <button onClick={() => auth.signOut()} className={styles.signOut}>Sign Out</button>
                        </div>

                        <p>Renewal date : 04/03/2021</p>




                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
