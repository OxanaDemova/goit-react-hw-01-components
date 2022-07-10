import PropTypes from 'prop-types';

import styles from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline}) => {
    return (<li className={styles.item}>
        {!isOnline ? <span className={styles.status}>{isOnline}</span> :
        <span className={styles.isActive}>{isOnline}</span>}
        
        <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{name}</p>
    </li>);
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}