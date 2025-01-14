import {IPagingResponse, IQueryRequest} from "src/types"
import {useQuery, useMutation} from "react-query"
import {axiosInstance} from "../index.ts";
import {REQUEST_MAPPING, REQUEST_PATH} from "../../constants"
import {
    ISearchUserRequest,
    ISearchUserResponse,
    IEditUserRequest,
    IEditUserResponse,
    IDeleteUserRequest,
    IDeleteUserResponse,
    IBaseResponse,
} from "src/services/types";

export const useSearchUser=
    (params: IQueryRequest<ISearchUserRequest>) => {
    return useQuery<IPagingResponse<IBaseResponse<ISearchUserResponse>> | IBaseResponse<ISearchUserResponse>>(
        ['search-user', params],
        async () => {
            const response = await axiosInstance.post<IPagingResponse<IBaseResponse<ISearchUserResponse>> | IBaseResponse<ISearchUserResponse>>(
                REQUEST_MAPPING.USER + REQUEST_PATH.SEARCH_USER,
                params
            )
            return response.data
        },
        {
            enabled: !!params,
            // refetchInterval: 1000,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        }
    )
}

export const useEditUser= () => {
    return useMutation(
        'edit-user',
        (params: IEditUserRequest) => {
            return axiosInstance.post<IBaseResponse<IEditUserResponse>>(
                REQUEST_MAPPING.USER + REQUEST_PATH.UPDATE_USER,
                params
            )
        },
    )
}

export const useDeleteUser= () => {
    return useMutation(
        'delete-user',
        (params: IDeleteUserRequest) => {
            const queryParams = new URLSearchParams({
                userId: params.userId,
            }).toString();
            return axiosInstance.post<IBaseResponse<IDeleteUserResponse>>(
                REQUEST_MAPPING.USER + REQUEST_PATH.DELETE_USER,
                queryParams
            )
        },
    )
}