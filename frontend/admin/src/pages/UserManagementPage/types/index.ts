import {UserInfo, IQueryRequest} from 'src/types'
import {
    ISearchUserRequest, 
    IEditUserRequest, 
    IDeleteUserRequest,
    ICreateUserRequest,
} from 'src/services/types'
import {useEditUser, useDeleteUser, useCreateUser} from 'src/services'

export interface UserManagementContextProps {
    userList: UserInfo[] | undefined
    searchRequest: IQueryRequest<ISearchUserRequest>
    editRequest: IEditUserRequest
    deleteRequest: IDeleteUserRequest
    createRequest: ICreateUserRequest
    setUserList: React.Dispatch<React.SetStateAction<UserInfo[] | undefined>>
    setSearchRequest: React.Dispatch<React.SetStateAction<IQueryRequest<ISearchUserRequest>>>
    setEditRequest: React.Dispatch<React.SetStateAction<IEditUserRequest>>
    setDeleteRequest: React.Dispatch<React.SetStateAction<IDeleteUserRequest>>
    setCreateRequest: React.Dispatch<React.SetStateAction<ICreateUserRequest>>
    editHelper: ReturnType<typeof useEditUser>
    deleteHelper: ReturnType<typeof useDeleteUser>
    createHelper: ReturnType<typeof useCreateUser>
    refetchUserList: () => void
}
