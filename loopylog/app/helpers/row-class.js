import {
  helper
} from '@ember/component/helper';

export function rowClass(params /*, hash*/ ) {
  if (params[0]) {
    const row = params[0];
    const class_names = [];
    if (row.Boards === 0 || row.BoardsSum === 0) {
      class_names.push('zero');
    }
    // other conditions can be added here in the future

    return class_names.join(' ');
  }
}

export default helper(rowClass);
