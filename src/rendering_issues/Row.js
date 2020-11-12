import React, { useContext } from 'react';

import Field from './Field';
import { SwimlaneContext } from '../context/SwimlaneContext';

/**
 * Each cell in a row is Droppable, except the first one (story/assignee)
 * Droppable is an entity where a Draggable (in this case an issue card)
 * can be placed by Drag&Drop.
 * Id-s and classnames are formed by the alphanumeric names of rows (swimlane)
 * and columns (status)
 * @param {string[]} statuses
 * @param {*} objectIssues
 * @param {string} swimlaneClassName
 * @param {boolean} isDropDisabled
 */
const Row = ({ objectIssues, storyIdOfDraggedIssue }) => {
  const [swimlane] = useContext(SwimlaneContext);

  const swimlaneId =
    swimlane === 'STORY'
      ? objectIssues.story !== null && objectIssues.story !== undefined
        ? objectIssues.story.id
        : 'Without story'
      : objectIssues.assignee !== null && objectIssues.assignee !== undefined
      ? objectIssues.assignee.id
      : 'Unassigned';

  const isDropDisabled =
    swimlane === 'STORY'
      ? objectIssues.story !== null && objectIssues.story !== undefined
        ? storyIdOfDraggedIssue !== objectIssues.story.id
          ? true
          : false
        : storyIdOfDraggedIssue !== ''
        ? true
        : false
      : false;

  return Object.entries(objectIssues.statusIssuesMap).map(
    ([status, issues]) => {
      return (
        <Field
          key={status}
          issues={issues}
          status={status}
          swimlaneId={swimlaneId}
          isDropDisabled={isDropDisabled}
        />
      );
    }
  );
};

export default Row;
