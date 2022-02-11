import { ComponentType } from "react";
import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
  component: ComponentType;
  isPrivate?: boolean;
}

export const Route = ({
  isPrivate = false,
  component: Conponent,
  ...rest
}: Props) => {
  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!localStorage.getItem("my-capstone:Token") ? (
          <Conponent />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        )
      }
    />
  );
};
