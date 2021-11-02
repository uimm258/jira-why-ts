import React from "react";
import { User } from "./search-panel";

interface Projects {
  id: string;
  name: string;
  personId: string;
}

interface ListProps {
  users: User[];
  list: Projects[];
}

export const List = ({ users, list }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Team</th>
          <th>Manager</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.personId)?.name ||
                "Unknown"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
