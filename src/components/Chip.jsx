import { Chip, Avatar, Typography } from "@material-tailwind/react";
import avatar from "../assets/img/avatar.png"

export function ChipWithAvatar() {
  return (
    <Chip
      icon={
        <Avatar
          size="xs"
          variant="circular"
          className="h-full w-full -translate-x-0.5"
          alt="Jhenry Sierra"
          src={avatar}
        />
      }
      value={
        <Typography
          variant="small"
          color="white"
          className="font-medium capitalize leading-none color-blue"
        >
          Jhenry Sierra
        </Typography>
      }
      className="rounded-full py-1.5 mb-2 w-[50%]"
    />
  );
}
