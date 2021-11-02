import React from 'react'

export const List = ({user, list}) => {
    return <table>
        <thead>
            <tr>
                <th>Team</th>
                <th>Manager</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(project => <tr key={project.id}>
                    <td>{project.name}</td>
                    <td>{user.find(user => user.id === project.personId)?.name || "Unknown"}</td>
                </tr>)
            }
        </tbody>
    </table>
}