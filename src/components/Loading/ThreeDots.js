import React from "react";
import Loader from "react-loader-spinner";

import { LoadingWrapper } from "./styles";

export default function ThreeDotsLoading() {
    return (
        <LoadingWrapper>
            <Loader type="ThreeDots" color="#bc54e0" height={70} width={70} />
        </LoadingWrapper>
    );
};