import PropTypes from 'prop-types';
import {
    FriendItem,
    FriendStatus,
    FriendAvatar,
    FriendName
} from './FriendListItem.styled';

export const FriendListItem = ({ name, avatar, isOnline }) => {
    return (
        <FriendItem>
            <FriendStatus isOnline={isOnline}></FriendStatus>
            <FriendAvatar src={avatar} alt="User avatar"/>
            <FriendName>{name}</FriendName>
        </FriendItem>
    );
};

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};