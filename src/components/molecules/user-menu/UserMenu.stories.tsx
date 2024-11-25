import { UserMenu } from ".";

export default {
  component: UserMenu,
  title: "molecules/UserMenu",
};

export const Default = () => {
  return <UserMenu username="John Doe" />;
};

export const WithAvatar = () => {
  return (
    <UserMenu
      avatarUrl="https://i.pravatar.cc/100?img=11"
      username="John Doe"
    />
  );
};
