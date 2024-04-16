import { StateType } from '../../types';
import { NameSpace } from '../../const';

export const selectUser = (state: StateType) => state[NameSpace.User].user;
export const selectUserAuthStatus = (state: StateType) => state[NameSpace.User].authStatus;
export const selectUsersReadyTrain = (state: StateType) => state[NameSpace.User].usersReadyTrain;
export const selectTrainingsCount = (state: StateType) => state[NameSpace.User].trainingsCount;
export const selectLocationFilter = (state: StateType) => state[NameSpace.User].locationFilter;
export const selectTrainTypeFilter = (state: StateType) => state[NameSpace.User].trainTypeFilter;
export const selectLevelFilter = (state: StateType) => state[NameSpace.User].levelFilter;
export const selectRoleFilter = (state: StateType) => state[NameSpace.User].roleFilter;
export const selectUsersList = (state: StateType) => state[NameSpace.User].usersList;
export const selectUsersTake = (state: StateType) => state[NameSpace.User].usersTake;
export const selectUsersTotalItems = (state: StateType) => state[NameSpace.User].usersTotalItems;
