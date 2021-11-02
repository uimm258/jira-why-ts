import React from 'react'

export const SearchPanel = ({users, param, setParam}) => {

    return <form action="">
        <div>
            <input type="text" value={param.name} onChange={(e) => setParam({
                ...param,
                name: e.target.value
            })}/>
            <select value={param.personalId} onChange={(e) => setParam({
                ...param,
                personalId: e.target.value
            })}>
                <option value={''}>Manager</option>
                {
                    users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                }
            </select>
        </div>
    </form>
}