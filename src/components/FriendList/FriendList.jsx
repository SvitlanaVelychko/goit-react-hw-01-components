import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import { Box } from 'components/Box';
import { Friends } from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <Box as="section"
            pt={5}
            pb={6}
            width="400px"
            mr="auto"
            ml="auto"
        >
            <Friends>
                {friends.map(({ id, name, avatar, isOnline }) =>
                (<FriendListItem
                    key={id}
                    name={name}
                    avatar={avatar}
                    isOnline={isOnline}
                />
                ))}
            </Friends>
        </Box>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })).isRequired,
};