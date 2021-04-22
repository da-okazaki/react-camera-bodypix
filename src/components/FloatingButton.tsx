import React from "react";
import { Fab } from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
interface Props {}
const FloatingButton: React.FC<Props> = ({}: Props) => {
  return (
    <Fab color="primary">
      <PhotoCameraIcon />
    </Fab>
  );
};
export default FloatingButton;
