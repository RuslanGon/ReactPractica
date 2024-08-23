import { createSelector } from "@reduxjs/toolkit"

export const selectorUsers = state => state.mailbox.users
export const selectFilter = state => state.mailbox.filter

export const selectFiltetredUsers = createSelector(
    [selectorUsers, selectFilter],
    (users, filter) => {
        return users.filter(user =>
            user.userName.toLowerCase().includes(filter.toLowerCase()) ||
            user.userEmail.toLowerCase().includes(filter.toLowerCase())
          )
    }
)

