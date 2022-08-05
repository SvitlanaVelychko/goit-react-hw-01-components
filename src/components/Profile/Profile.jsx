import PropTypes from "prop-types";
import { Box } from 'components/Box';
import {
    ProfileAvatar,
    ProfileName,
    ProfileTag,
    ProfileLocation,
    ProfileStats,
    ProfileStatItem,
    ProfileStatLabel,
    ProfileStatQuantity
} from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <Box
            width="400px"
            mr="auto"
            ml="auto"
            border="normal"
            borderColor="text"
            borderRadius="normal"
            boxShadow="0px 4px 24px -1px rgba(0,0,0,0.75)"
            overflow="hidden"
        >
            <Box
                pt={4}
                pb={4}
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <ProfileAvatar
                    src={avatar}
                    alt="User avatar"
                />
                <ProfileName>{username}</ProfileName>
                <ProfileTag>@{tag}</ProfileTag>
                <ProfileLocation>{location}</ProfileLocation>
            </Box>
            <ProfileStats>
                <ProfileStatItem>
                    <ProfileStatLabel class="label">Followers</ProfileStatLabel>
                    <ProfileStatQuantity class="quantity">{stats.followers}</ProfileStatQuantity>
                </ProfileStatItem>
                <ProfileStatItem>
                    <ProfileStatLabel class="label">Views</ProfileStatLabel>
                    <ProfileStatQuantity class="quantity">{stats.views}</ProfileStatQuantity>
                </ProfileStatItem>
                <ProfileStatItem>
                    <ProfileStatLabel class="label">Likes</ProfileStatLabel>
                    <ProfileStatQuantity class="quantity">{stats.likes}</ProfileStatQuantity>
                </ProfileStatItem>
            </ProfileStats>
        </Box>
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};
